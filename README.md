# 🔐 Sistema de Autenticación JWT con TypeScript

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-47A248.svg)](https://www.mongodb.com/)

Sistema backend robusto para autenticación de usuarios con JWT, construido con arquitectura limpia y buenas prácticas de TypeScript.

## 🛠️ Stack Tecnológico

### Core
- **Node.js** + **Express** - Servidor HTTP
- **TypeScript** - Tipado estático
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Seguridad
- **JWT** - Autenticación stateless
- **Bcrypt** - Hash de contraseñas
- **Env-var** - Validación de variables de entorno

### Arquitectura
- **Patrón Repository** - Separación clara de responsabilidades
- **DTOs** - Validación de datos de entrada
- **Clean Architecture** - Capas bien definidas

## 📂 Estructura del Proyecto
```plaintext
src/
├── config/ # Configuraciones y adaptadores
├── data/ # Acceso a datos (MongoDB)
├── domain/ # Lógica de negocio
│ ├── dtos/ # Data Transfer Objects
│ ├── entities/ # Entidades del dominio
│ └── use-cases/ # Casos de uso
├── infraestructure/# Implementaciones concretas
├── presentation/ # Controladores y rutas
└── app.ts # Punto de entrada
```

## 🔍 Características Destacadas

1. **Autenticación JWT**:
   - Generación y validación de tokens
   - Middleware de autorización
   - Protección de rutas sensibles

2. **Seguridad Robustea**:
   - Hashing de contraseñas con bcrypt
   - Validación estricta de variables de entorno
   - Manejo centralizado de errores

3. **Arquitectura Escalable**:
   - Separación clara entre capas
   - Fácil sustitución de componentes
   - Inversión de dependencias

## 🚀 Instalación

1. Clonar repositorio:
    ```bash
    git clone https://github.com/tu-usuario/node-auth.git
    cd node-auth
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```

3. Configurar variables de entorno (crear .env):
    ```bash
    PORT=3100
    MONGO_URL=mongodb://localhost:27017
    MONGO_DB_NAME=auth_db
    JWT_SECRET=tu_super_secreto
    ```

4. Configurar variables de entorno (crear .env):
    ```bash
    npm run dev
    ```

## 🤝 Contribución

Pull requests son bienvenidos. Para cambios importantes, abre primero un issue.