import { Request, Response } from 'express';
import pool from '../database';

class SuscripcionController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en suscripciones"})
    }

    public async get(req: Request, res: Response) {
        let suscripciones = await pool.query('SELECT suscripcion.id,`fechaAlta`,`precio`,`expira`,`prueba`,`idServicio`,'+
        '`usuario_id`,`periodo`,`estado`,`nombre`,`categoria` FROM suscripcion, servicio WHERE suscripcion.idServicio = servicio.id', [req.body]);
        res.json(suscripciones);
    }
}
export const suscripcionController = new SuscripcionController;