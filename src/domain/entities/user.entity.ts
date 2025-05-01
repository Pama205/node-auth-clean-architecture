// src/domain/entities/user.entity.ts


export class userEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string[],
        public img?: string,
    ){}

}