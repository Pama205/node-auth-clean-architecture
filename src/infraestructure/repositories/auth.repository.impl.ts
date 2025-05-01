import { AuthDataSource, AuthRepository, RegisterUserDto, userEntity } from "../../domain";



export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDatasource : AuthDataSource
    ) {}

    register(registerUserDto: RegisterUserDto): Promise<userEntity> {
        return this.authDatasource.register(registerUserDto);
    }
    
}