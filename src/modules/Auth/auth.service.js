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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const db_1 = require("../../config/db");
const jwtUtils_1 = require("../../utils/jwtUtils");
const loginWithEmailAndPassword = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ email, password, }, res) {
    const user = yield db_1.prisma.user.findFirst({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("user not found");
    }
    if (password === user.password) {
        const token = (0, jwtUtils_1.generateToken)(user === null || user === void 0 ? void 0 : user.id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        res.status(200).json(Object.assign(Object.assign({}, user), { token }));
        return Object.assign(Object.assign({}, user), { token });
    }
    else {
        throw new Error("INCORRECT PASSWORD");
    }
});
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUser = yield db_1.prisma.user.create({
            data: payload,
        });
        return createUser;
    }
    catch (error) {
        throw new Error("Failed to create user.");
    }
});
exports.authService = { loginWithEmailAndPassword, register };
