// src/infraestructure/datasources/auth.datasource.impl.ts
import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb/models/user.models";
import { AuthDataSource, CustomError, RegisterUserDto, userEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = (password:string, hashed:string) => boolean;

export class AuthDataSourceImpl implements AuthDataSource {

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ){}

    async register(registerUserDto: RegisterUserDto): Promise<userEntity> {
        
        const { name, email ,password } = registerUserDto;

        try {

            const emailExists =  await UserModel.findOne({email});
            if (emailExists) throw CustomError.badRequest('User already exists');

            const user = await UserModel.create({
                name : name,
                email : email,
                password : this.hashPassword(password),
            });

            await user.save();

            return UserMapper.userEntityFromObject(user);
            
        } catch (error) {
            if( error instanceof CustomError ){
                throw error;
            }
            throw CustomError.internalServe();
        }
    }
}