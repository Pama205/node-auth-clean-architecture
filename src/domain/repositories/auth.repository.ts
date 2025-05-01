// src/domain/repositories/auth.repository.ts

import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { userEntity } from "../entities/user.entity";


export abstract class AuthRepository {

    //Todo:
    // abstract login()
    
    abstract register( registerUserDto: RegisterUserDto ):Promise<userEntity>

}