# Revolución Otaku Oficial

Sitio web para la comunidad otaku con sistema de autenticación completo, envío de emails de confirmación, ranking de torneos y sistema de pagos integrado.

## Estructura del Proyecto

- `src/` - Frontend (React + Vite)
- `backend/` - Backend (Next.js + Prisma + SQLite)

## 🚀 Inicio Rápido

### Opción 1: Script Automático (Recomendado)

**Para Windows:**
```bash
# Usando PowerShell
.\start-servers.ps1

# O usando CMD
start-servers.bat
```

### Opción 2: Inicio Manual

#### Frontend (Puerto 3001)

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3001`

#### Backend (Puerto 3000)

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

# Configuración de Email (Gmail)
EMAIL_USER="tu-email@gmail.com"
EMAIL_PASS="tu-contraseña-de-aplicacion"

# Configuración de MercadoPago (Opcional)
MERCADOPAGO_ACCESS_TOKEN="tu-access-token"
FRONTEND_URL="http://localhost:3001"
BACKEND_URL="http://localhost:3000"
```

4. **Configurar la base de datos:**
```bash
npx prisma generate
npx prisma db push
```

5. **Configurar email (opcional pero recomendado):**
Consulta `backend/EMAIL_SETUP.md` para instrucciones detalladas sobre cómo configurar Gmail para el envío de emails de confirmación.

6. **Configurar MercadoPago (opcional):**
Consulta `MERCADOPAGO_SETUP.md` para instrucciones detalladas sobre cómo configurar MercadoPago para los pagos de inscripción a torneos.

7. **Ejecutar el servidor:**
```bash
npm run dev
```

El backend estará disponible en `http://localhost:3000`

## ⚠️ Configuración de Puertos

**IMPORTANTE:** Los puertos están configurados de forma fija para evitar conflictos:

- **Frontend:** Puerto 3001 (http://localhost:3001)
- **Backend:** Puerto 3000 (http://localhost:3000)

Si necesitas cambiar los puertos, modifica:
- `vite.config.js` para el frontend
- `backend/package.json` para el backend

## Funcionalidades

### Frontend
- **Página de Inicio:** Carrusel de imágenes y contenido destacado
- **Página de Eventos:** Lista de eventos de anime y gaming
- **Página de Torneos:** Información sobre torneos de videojuegos con sistema de inscripción
- **Página de Liga ROO:** Ranking completo de hasta 20 participantes por torneo
- **Sistema de Login/Registro:** Formularios para autenticación de usuarios con validaciones en tiempo real

### Backend
- **API de Registro:** `/api/register` - Registra nuevos usuarios con envío de email de confirmación
- **API de Login:** `/api/login` - Autentica usuarios existentes
- **Base de Datos:** SQLite con Prisma ORM
- **Seguridad:** Encriptación de contraseñas con bcrypt y JWT
- **Email:** Envío automático de confirmaciones de registro
- **Pagos:** Integración con MercadoPago para inscripciones a torneos

## Campos del Formulario de Registro

### Obligatorios:
- **Nombre de usuario:** Debe ser único, 6-12 caracteres, solo letras y números
- **Contraseña:** Se encripta automáticamente, máximo 12 caracteres, solo letras y números
- **Tag:** Debe ser único, 3-15 caracteres, letras, números y símbolos. Este será tu nombre dentro de la liga para los torneos
- **Email:** Debe ser único y tener formato válido

### Opcionales:
- **Teléfono:** Campo opcional, solo números
- **Recibir noticias:** Checkbox para recibir noticias sobre eventos

## Funcionalidades de Email

- **Confirmación de registro:** Se envía automáticamente después de un registro exitoso
- **Contenido del email:** Incluye el nombre de usuario y tag del usuario
- **Diseño:** Email HTML con el estilo de Revolución Otaku Oficial
- **Configuración:** Soporte para Gmail con contraseñas de aplicación

## Sistema de Ranking (Liga ROO)

- **Top 20 participantes:** Ranking completo para cada torneo
- **Múltiples juegos:** Mortal Kombat 1, FC 25, Tekken 8, Street Fighter 6, The King of Fighters XV
- **Información detallada:** Posición, usuario, ciudad y puntos
- **Medallas:** Visualización especial para los 3 primeros lugares
- **Diseño responsivo:** Adaptado para móviles y desktop

## Sistema de Inscripción a Torneos

- **Verificación de login:** Solo usuarios registrados pueden inscribirse
- **Integración con MercadoPago:** Pago seguro de $3,000 ARS por torneo
- **Múltiples métodos de pago:** Transferencia bancaria, tarjeta de crédito/débito, efectivo
- **Confirmación de pago:** Mensajes de confirmación y redirección automática
- **Estados de torneo:** Inscripciones abiertas, próximamente, etc.

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
- nodemailer (envío de emails)
- mercadopago (procesamiento de pagos)
- TypeScript

## Notas Importantes

- El frontend y backend deben ejecutarse simultáneamente
- El backend debe estar en el puerto 3000
- El frontend debe estar en el puerto 3001
- CORS está configurado para permitir comunicación entre ambos
- La base de datos se crea automáticamente en `backend/dev.db`
- El envío de emails es opcional - si falla, el registro sigue siendo exitoso
- La integración con MercadoPago es opcional - se pueden usar URLs de ejemplo
- Para producción, considera usar servicios de email como SendGrid, Mailgun o AWS SES
- Para producción, configura correctamente las credenciales de MercadoPago

## Solución de Problemas

### Error: "Error de conexión. Intenta nuevamente"
1. Verifica que ambos servidores estén ejecutándose
2. Frontend debe estar en puerto 3001
3. Backend debe estar en puerto 3000
4. Usa los scripts automáticos para evitar conflictos de puertos

### Error: "Port already in use"
1. Detén todos los procesos de Node.js: `taskkill /f /im node.exe`
2. Usa los scripts automáticos que manejan esto automáticamente

## Documentación Adicional

- `backend/EMAIL_SETUP.md` - Configuración detallada de email
- `MERCADOPAGO_SETUP.md` - Configuración detallada de MercadoPago


