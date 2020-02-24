import { Router } from 'express';
import { suscripcionController } from '../controllers/suscripcionController';

class SuscripcionRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get("/suscripciones", suscripcionController.get);
    }
}
const suscripcionRoutes = new SuscripcionRoutes();
export default suscripcionRoutes.router;