// src/presentation/routes.ts
import { Router } from 'express';
import { AuthRoutes } from './auth/routes';

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        //listar mis rutas principales
        router.use('/api/auth', AuthRoutes.routes);

        return router;
    }
}