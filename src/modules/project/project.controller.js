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
exports.projectController = void 0;
const project_service_1 = require("./project.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.projectService.createProject(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
});
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.projectService.getAllProjects();
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
});
const getSingleProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.projectService.getSingleProject(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(501).json(error);
    }
});
exports.projectController = {
    createProject,
    getAllProjects,
    getSingleProject,
};
