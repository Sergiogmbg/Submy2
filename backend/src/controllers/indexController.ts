import { Request, Response } from 'express';

class IndexController {
    index(req: Request, res: Response) {
        res.json({mensaje: "Estás en inicio."});
    }
}
export const indexController = new IndexController;