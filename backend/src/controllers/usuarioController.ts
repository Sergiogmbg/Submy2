import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bcryptdos = require('bcrypt');
const SECRET_KEY = 'laSecretacionDelLogin';

class UsuarioController {
    index(req: Request, res: Response) {
        res.json({ mensaje: "Estás en usuarios" })
    }

    // crear los metodos crud
    public async create(req: Request, res: Response) {
        console.log(req.body.password);
        // aqui es donde se va a codicar la contraseña se va a modificar la const Usuario
        const Usuario = req.body; // objeto Usuario
        const passUsu = bcrypt.hashSync(Usuario.password);  // contraseña
        console.log(passUsu); //comprobador
        Usuario.password = passUsu;
        pool.query('INSERT INTO usuario SET ?', [Usuario]);
        res.json({ 'menssage': 'se ha insertado correctamente el usuairo' });

    }

    public async get(req: Request, res: Response) {
        let usuario = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req: Request, res: Response) {
        const copiaUsuario = {
            usuario: req.body.usuario,
            pass: req.body.pass
        }

        const usuarios = await pool.query('SELECT * FROM usuario WHERE email=? ', [req.body.usuario])
        console.log(usuarios[0].password); // comprobador
        if (usuarios.length == 0) {
            res.json({ message: 'error al logear' });
        } else {
            // comparar contraseñas
            if (bcrypt.compareSync(copiaUsuario.pass, usuarios[0].password)) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.usuario },
                    SECRET_KEY,
                    { expiresIn: expiresIn });

                console.log("token de acceso");
                console.log(accessToken);
                res.json(accessToken); //lo que enviamos el token en el response 
            } else {
                console.log("error al loggearse");
            }


        }




    }

}


export const usuarioController = new UsuarioController;