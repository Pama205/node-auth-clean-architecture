// src/domain/datasources/auth.datasource.ts

import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { userEntity } from "../entities/user.entity";


export abstract class AuthDataSource {

    //Todo:
    // abstract login()
    
    abstract register( registerUserDto: RegisterUserDto ):Promise<userEntity>

}