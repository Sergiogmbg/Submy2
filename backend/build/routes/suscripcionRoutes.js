"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suscripcionController_1 = require("../controllers/suscripcionController");
class SuscripcionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/suscripciones", suscripcionController_1.suscripcionController.get);
    }
}
const suscripcionRoutes = new SuscripcionRoutes();
exports.default = suscripcionRoutes.router;
