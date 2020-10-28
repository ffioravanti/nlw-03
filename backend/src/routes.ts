import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


/* Rota = conjunto
Recurso = usuario

Métodos HTTP = GET, POST, PUT, DELETE
Parâmetros

GET = buscar uma informação (lista, item)
POST = criando uma informação
PUT = editando uma informação
DELETE = deletando uma informação


Params
Query: http://localhost:3333/users?search=felipe&page=2
Route: http://localhost:3333/users/1 (identificar um recurso)
Body: http://localhost:3333/users (tras varioas infos) */

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

  export default routes;