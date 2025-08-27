# Revolución Otaku Oficial

Sitio web para la comunidad otaku con sistema de autenticación completo.

## Estructura del Proyecto

- `src/` - Frontend (React + Vite)
- `backend/` - Backend (Next.js + Prisma + SQLite)

## Configuración y Ejecución

### Frontend

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3001`

### Backend

1. **Navegar al directorio backend:**
```bash
cd backend
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
Crea un archivo `.env` en el directorio `backend/` con:
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="tu-secreto-super-seguro-aqui-cambialo-en-produccion"
```

4. **Configurar la base de datos:**
```bash
npx prisma generate
npx prisma db push
```

5. **Ejecutar el servidor:**
```bash
npm run dev
```

El backend estará disponible en `http://localhost:3000`

## Funcionalidades

### Frontend
- **Página de Inicio:** Carrusel de imágenes y contenido destacado
- **Página de Eventos:** Lista de eventos de anime y gaming
- **Página de Torneos:** Información sobre torneos de videojuegos
- **Sistema de Login/Registro:** Formularios para autenticación de usuarios

### Backend
- **API de Registro:** `/api/register` - Registra nuevos usuarios
- **API de Login:** `/api/login` - Autentica usuarios existentes
- **Base de Datos:** SQLite con Prisma ORM
- **Seguridad:** Encriptación de contraseñas con bcrypt y JWT

## Campos del Formulario de Registro

### Obligatorios:
- **Nombre de usuario:** Debe ser único
- **Contraseña:** Se encripta automáticamente
- **Email:** Debe ser único y tener formato válido

### Opcionales:
- **Teléfono:** Campo opcional
- **Recibir noticias:** Checkbox para recibir noticias sobre eventos

## Tecnologías Utilizadas

### Frontend:
- React 18
- Vite
- React Router DOM
- CSS3 con variables CSS

### Backend:
- Next.js 14
- Prisma ORM
- SQLite
- bcryptjs (encriptación)
- jsonwebtoken (JWT)
- TypeScript

## Notas Importantes

- El frontend y backend deben ejecutarse simultáneamente
- El backend debe estar en el puerto 3000
- El frontend debe estar en el puerto 3001
- CORS está configurado para permitir comunicación entre ambos
- La base de datos se crea automáticamente en `backend/dev.db`


