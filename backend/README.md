# Backend - Revolución Otaku Oficial

Este es el backend de la aplicación Revolución Otaku Oficial, construido con Next.js, Prisma y SQLite.

## Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="tu-secreto-super-seguro-aqui-cambialo-en-produccion"
```

### 3. Configurar la base de datos
```bash
# Generar el cliente de Prisma
npx prisma generate

# Crear las tablas en la base de datos
npx prisma db push
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## APIs disponibles

### POST /api/register
Registra un nuevo usuario.

**Campos requeridos:**
- `username`: Nombre de usuario (único)
- `password`: Contraseña
- `email`: Email (único)

**Campos opcionales:**
- `phone`: Teléfono
- `receiveNews`: Boolean para recibir noticias

### POST /api/login
Inicia sesión de un usuario.

**Campos requeridos:**
- `username`: Nombre de usuario o email
- `password`: Contraseña

## Estructura de la base de datos

### Tabla User
- `id`: ID único del usuario
- `username`: Nombre de usuario (único)
- `email`: Email (único)
- `password`: Contraseña encriptada
- `phone`: Teléfono (opcional)
- `receiveNews`: Boolean para recibir noticias
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de última actualización

## Seguridad

- Las contraseñas se encriptan usando bcrypt
- Se generan tokens JWT para la autenticación
- Validación de campos obligatorios
- Verificación de usuarios duplicados
- CORS configurado para el frontend
