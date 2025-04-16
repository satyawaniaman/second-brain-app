import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { userMiddleware } from "./middleware/middleware";
import cors from "cors";
import { JWT_PASSWORD } from "./config/config";
import { random } from "./utils";

// Initialize PrismaClient with logging enabled
const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// Test database connection
async function testDatabaseConnection() {
  try {
    console.log("Testing database connection...");
    await client.$connect();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

// Invoke the test connection function
testDatabaseConnection();

const app = express();
app.use(express.json());
app.use(cors());

//@ts-ignore
app.post("/api/v1/signup", async (req, res) => {
  const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(3).max(20),
  });

  try {
    // Validate the input
    const validatedData = userSchema.parse(req.body);
    const { username, password } = validatedData;

    const hashedPassword = await bcrypt.hash(password, 15);

    await client.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.json({
      message: "user signed up",
    });
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({
        message: "Invalid input",
        errors: e.errors,
      });
    }

    // Prisma unique constraint error
    if (e.code === "P2002") {
      return res.status(409).json({
        message: "User already registered",
      });
    }

    console.error("Signup error:", e);

    res.status(500).json({
      message: "Error creating user",
    });
  }
});
//@ts-ignore
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.findFirst({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
  const token = jwt.sign({ userId: user.id }, JWT_PASSWORD);
  res.json({
    token: token,
  });
});
//@ts-ignore
app.post("/api/v1/contents", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  const title = req.body.title;
  await client.content.create({
    data: {
      link,
      type,
      title,
      //@ts-ignore
      userId: req.userId,
      tags: {
        create: [],
      },
    },
  });
  res.json({
    message: "Content added",
  });
});
//@ts-ignore
app.get("/api/v1/contents", userMiddleware, async (req, res) => {
  try {
    //@ts-ignore
    const userId = req.userId;
    const contents = await client.content.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    res.json({
      contents,
    });
  } catch (e) {
    res.status(500).json({
      message: "Error fetching contents",
    });
  }
});
//@ts-ignore
app.delete("/api/v1/contents", userMiddleware, async (req, res) => {
  try {
    const contentId = req.body.contentId;
    //@ts-ignore
    await client.content.deleteMany({
      where: {
        id: contentId,
        //@ts-ignore
        userId: req.userId,
      },
    });
    res.json({
      message: "Content deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      message: "Error deleting content",
    });
  }
});
//@ts-ignore
app.post("/api/v1/share", userMiddleware, async (req, res) => {
  const share = req.body.share; // whether the user want to enable sharing or not input is boolean
  try {
    if (share) {
      const existingLink = await client.link.findFirst({
        where: {
          //@ts-ignore
          userId: req.userId,
        },
      });

      if (existingLink) {
        res.json({
          hash: existingLink.hash,
        });
        return;
      }
      await client.link.create({
        data: {
          //@ts-ignore
          userId: req.userId,
          hash: random(10),
        },
      });
    } else {
      await client.link.delete({
        //@ts-ignore
        where: {
          //@ts-ignore
          userId: req.userId,
        },
      });
    }
    res.json({
      message: "Updated sharable link",
    });
  } catch (e) {
    res.status(411).json({
      message: "error accessing it",
    });
  }
});
//@ts-ignore
app.get("/api/v1/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;
  const link = await client.link.findFirst({
    where: {
      hash,
    },
  });
  if (!link) {
    res.status(411).json({
      message: "wrong link",
    });
    return;
  }
  const content = await client.content.findFirst({
    where: {
      userId: link.userId,
    },
  });
  const user = await client.user.findFirst({
    where: {
      id: link.userId,
    },
  });
  if (!user) {
    res.status(411).json({
      message: "user not found",
    });
    return;
  }
  res.json({
    username: user.username,
    content: content,
  });
});

const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

server.on("error", (err: any) => {
  console.error("Error starting server:", err);
});
