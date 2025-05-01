// src/presentation/auth/controller.ts

import { Request, Response } from 'express';
import { AuthRepository, CustomError, RegisterUserDto } from '../../domain';
import { JwtAdapter } from '../../config';
import { UserModel } from '../../data/mongodb/models/user.models';

export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository
    ) {}

    private hadleError = ( error: unknown, res: Response) => {
        if( error instanceof CustomError ){
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }

    registerUser(req: Request, res: Response) {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) {
            return res.status(400).send(error);
        }

        this.authRepository.register(registerUserDto!)
            .then( async(user) => {
                
                res.json({
                    user,
                    token: await JwtAdapter.generateToken({ id: user.id })
                });

            })
            .catch( error => this.hadleError( error, res ) )
    }

    loginUser(req: Request, res: Response) {
        res.json(req.body);
    }

    getUsers(req: Request, res: Response) {
        
        UserModel.find()
            .then( users => {
                res.json({
                    users,
                    token: req.body.payload?.id
                    
                })
            })
            .catch( ()=> res.status(500).json({ error: 'Internal Server Error'}) )
    }
}

lista los partidos ganados, empatados, los partidos perdidos por 1 gol y los partidos perdidos por 2 goles y lista los partidos perdidos por mas de 2 goles. en total deben ser 38 partidos sumando los ganados+empatados+perdidos.