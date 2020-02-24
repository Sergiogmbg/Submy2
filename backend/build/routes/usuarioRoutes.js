"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/usuarios", usuarioController_1.usuarioController.index);
        this.router.get("/usuarios/:id", usuarioController_1.usuarioController.get);
        this.router.post('/crearUser', usuarioController_1.usuarioController.create);
        this.router.post("/login", usuarioController_1.usuarioController.readlogin);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
