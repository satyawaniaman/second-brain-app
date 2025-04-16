"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
function random(len) {
    const options = "qwertyuioasdfghjklzxcvbnm123456789";
    const length = options.length;
    return Array.from({ length: len }, () => options[Math.floor(Math.random() * length)]).join("");
}
//# sourceMappingURL=utils.js.map