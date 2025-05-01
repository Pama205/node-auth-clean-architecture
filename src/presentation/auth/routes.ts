// src/presentation/auth/routes.ts

import { Router, Request, Response } from 'express';
import { AuthController } from './controller';
import { testController } from "./testController";
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infraestructure';
import { AuthMiddleware } from '../middlewares/Auth.middleware';

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new AuthDataSourceImpl();
        const authRepository = new AuthRepositoryImpl(datasource);

        const controller = new AuthController(authRepository);

        // listar mis rutas principales

        router.get('/test', (req, res) => {
            res.json('test page');
        });

        router.get('/testController', testController);
        router.post('/login', controller.loginUser.bind(controller));
        //router.post('/register', controller.registerUser.bind(controller));
        router.post('/register', (req, res) => {
            controller.registerUser(req, res);
        });
        //router.get('/', AuthMiddleware.validateJWT, controller.getUsers );
        router.get('/', AuthMiddleware.validateJWT, controller.getUsers.bind(controller));

        return router;
    }
}