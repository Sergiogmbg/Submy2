"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const suscripcionRoutes_1 = __importDefault(require("./routes/suscripcionRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
/* Creamos la clase server para el servidor de datos */
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use(suscripcionRoutes_1.default);
        this.app.use(usuarioRoutes_1.default);
    }
    start() {
        //crear escuchador
        this.app.listen(this.app.get('port'), () => console.log('El servidor está escuchando en el puerto', this.app.get('port'))); //en app tengo el metodo listen de express
    }
}
const server = new Server();
server.start();
