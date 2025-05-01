// src/presentation/middlewares/Auth.middleware.ts
import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config';
import { UserModel } from '../../data/mongodb/models/user.models';

export class AuthMiddleware {
    static validateJWT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const authorization = req.header('Authorization');
        
        if (!authorization) {
            res.status(401).json({ error: 'No token provided' });
            return; // ← Asegura que la ejecución termine aquí
        }
        
        if (!authorization.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Invalid Bearer Token' });
            return;
        }

        const token = authorization.split(' ').at(1) || '';

        try {
            const payload = await JwtAdapter.validateToken<{ id: string }>(token);
            if (!payload) {
                res.status(401).json({ error: 'Invalid token' });
                return;
            }

            req.body.payload = payload;
            next(); // ← Continúa al siguiente middleware/controlador
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}