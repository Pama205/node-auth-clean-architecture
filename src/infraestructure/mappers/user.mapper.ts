import { CustomError, userEntity } from "../../domain"


export class UserMapper {

    static userEntityFromObject(object:{ [key:string]:any }) {
        const { id, _id, name, email, password, roles } = object;

        if ( !id || !_id ){
            throw CustomError.badRequest('Missing id');
        }

        if ( !name ) throw CustomError.badRequest('Missing id');
        if ( !email ) throw CustomError.badRequest('Missing id');
        if ( !password ) throw CustomError.badRequest('Missing id');
        if ( !roles ) throw CustomError.badRequest('Missing id');

        return new userEntity(
            _id || id,
            name,
            email,
            password,
            roles
        );
    }

}