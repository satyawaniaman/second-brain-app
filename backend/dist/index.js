"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const middleware_1 = require("./middleware/middleware");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const utils_1 = require("./utils");
// Initialize PrismaClient with logging enabled
const client = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
// Test database connection
function testDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Testing database connection...");
            yield client.$connect();
            console.log("Database connection successful!");
        }
        catch (error) {
            console.error("Database connection error:", error);
            process.exit(1);
        }
    });
}
// Invoke the test connection function
testDatabaseConnection();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//@ts-ignore
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSchema = zod_1.z.object({
        username: zod_1.z.string().email(),
        password: zod_1.z.string().min(3).max(20),
    });
    try {
        // Validate the input
        const validatedData = userSchema.parse(req.body);
        const { username, password } = validatedData;
        const hashedPassword = yield bcrypt_1.default.hash(password, 15);
        yield client.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        res.json({
            message: "user signed up",
        });
    }
    catch (e) {
        if (e instanceof zod_1.z.ZodError) {
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
}));
//@ts-ignore
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const user = yield client.user.findFirst({
        where: { username },
    });
    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password",
        });
    }
    const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({
            message: "Invalid username or password",
        });
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, config_1.JWT_PASSWORD);
    res.json({
        token: token,
    });
}));
//@ts-ignore
app.post("/api/v1/contents", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    yield client.content.create({
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
}));
//@ts-ignore
app.get("/api/v1/contents", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        const contents = yield client.content.findMany({
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
    }
    catch (e) {
        res.status(500).json({
            message: "Error fetching contents",
        });
    }
}));
//@ts-ignore
app.delete("/api/v1/contents", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contentId = req.body.contentId;
        //@ts-ignore
        yield client.content.deleteMany({
            where: {
                id: contentId,
                //@ts-ignore
                userId: req.userId,
            },
        });
        res.json({
            message: "Content deleted successfully",
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Error deleting content",
        });
    }
}));
//@ts-ignore
app.post("/api/v1/share", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share; // whether the user want to enable sharing or not input is boolean
    try {
        if (share) {
            const existingLink = yield client.link.findFirst({
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
            yield client.link.create({
                data: {
                    //@ts-ignore
                    userId: req.userId,
                    hash: (0, utils_1.random)(10),
                },
            });
        }
        else {
            yield client.link.delete({
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
    }
    catch (e) {
        res.status(411).json({
            message: "error accessing it",
        });
    }
}));
//@ts-ignore
app.get("/api/v1/:shareLink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    const link = yield client.link.findFirst({
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
    const content = yield client.content.findFirst({
        where: {
            userId: link.userId,
        },
    });
    const user = yield client.user.findFirst({
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
}));
const server = app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
server.on("error", (err) => {
    console.error("Error starting server:", err);
});
//# sourceMappingURL=index.js.map