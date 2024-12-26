"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const userMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header missing",
        });
    }
    const decoded = jsonwebtoken_1.default.verify(authHeader, config_1.JWT_PASSWORD);
    try {
        if (decoded) {
            if (typeof decoded === "string") {
                res.status(403).json({
                    message: "you are not logged in",
                });
                return;
            }
            //@ts-ignore
            req.userId = decoded.userId;
            next();
        }
    }
    catch (e) {
        res.status(403).json({
            message: "you are not logged in",
        });
    }
};
exports.userMiddleware = userMiddleware;
