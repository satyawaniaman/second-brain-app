import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "../config/config";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }
  const decoded = jwt.verify(authHeader as string, JWT_PASSWORD);
  try {
    if (decoded) {
      if (typeof decoded === "string"|| null) {
        res.status(403).json({
          message: "you are not logged in",
        });
        return;
      }
      //@ts-ignore
      req.userId = (decoded as JwtPayload).userId;
      next();
    }
  } catch (e) {
    res.status(403).json({
      message: "you are not logged in",
    });
  }
};
