// src/config/jwt.ts
import jwt, { Secret, SignOptions } from 'jsonwebtoken';

export class JwtAdapter {
    // 1. Define el secret con tipo explícito y valor por defecto seguro
    private static readonly secret: Secret = process.env.JWT_SECRET || 'your-256-bit-secret-min-32-chars';
    
    // 2. Implementación corregida con tipos estrictos
    static async generateToken(
        payload: object, // Usa 'object' en minúscula
        duration: string = '2h'
    ): Promise<string | null> {
        return new Promise((resolve) => {
            // 3. Configuración de opciones con tipo explícito
            const options: SignOptions = {
                expiresIn: duration,
                algorithm: 'HS256' // Especifica el algoritmo explícitamente
            };

            // 4. Implementación segura
            jwt.sign(
                payload,
                JwtAdapter.secret,
                options,
                (err, token) => {
                    if (err || !token) return resolve(null);
                    resolve(token);
                }
            );
        });
    }

    static async validateToken<T>(token: string): Promise<T | null> {
        return new Promise((resolve) => {
            jwt.verify(
                token, // Ahora token está definido como parámetro
                JwtAdapter.secret,
                (err: jwt.VerifyErrors | null, decoded: unknown) => { // Tipos explícitos
                    if (err || !decoded) return resolve(null);
                    resolve(decoded as T);
                }
            );
        });
    }

}