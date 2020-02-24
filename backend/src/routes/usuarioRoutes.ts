import { Router } from 'express';
import { usuarioController } from '../controllers/usuarioController';

class UsuarioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get("/usuarios", usuarioController.index);
        this.router.get("/usuarios/:id", usuarioController.get);
        this.router.post('/crearUser', usuarioController.create);
        this.router.post("/login", usuarioController.readlogin);
    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;