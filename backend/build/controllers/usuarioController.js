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
const database_1 = __importDefault(require("../database"));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bcryptdos = require('bcrypt');
const SECRET_KEY = 'laSecretacionDelLogin';
class UsuarioController {
    index(req, res) {
        res.json({ mensaje: "Estás en usuarios" });
    }
    // crear los metodos crud
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.password);
            // aqui es donde se va a codicar la contraseña se va a modificar la const Usuario
            const Usuario = req.body; // objeto Usuario
            const passUsu = bcrypt.hashSync(Usuario.password); // contraseña
            console.log(passUsu); //comprobador
            Usuario.password = passUsu;
            database_1.default.query('INSERT INTO usuario SET ?', [Usuario]);
            res.json({ 'menssage': 'se ha insertado correctamente el usuairo' });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuario = yield database_1.default.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
            res.json(usuario);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                usuario: req.body.usuario,
                pass: req.body.pass
            };
            const usuarios = yield database_1.default.query('SELECT * FROM usuario WHERE email=? ', [req.body.usuario]);
            console.log(usuarios[0].password); // comprobador
            if (usuarios.length == 0) {
                res.json({ message: 'error al logear' });
            }
            else {
                // comparar contraseñas
                if (bcrypt.compareSync(copiaUsuario.pass, usuarios[0].password)) {
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: copiaUsuario.usuario }, SECRET_KEY, { expiresIn: expiresIn });
                    console.log("token de acceso");
                    console.log(accessToken);
                    res.json(accessToken); //lo que enviamos el token en el response 
                }
                else {
                    console.log("error al loggearse");
                }
            }
        });
    }
}
exports.usuarioController = new UsuarioController;
