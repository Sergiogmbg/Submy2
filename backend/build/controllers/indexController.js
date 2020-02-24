"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ mensaje: "Estás en inicio." });
    }
}
exports.indexController = new IndexController;
