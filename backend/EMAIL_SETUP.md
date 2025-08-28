# Configuración de Email para Revolución Otaku Oficial

## Configuración de Gmail

Para que el sistema pueda enviar emails de confirmación de registro, necesitas configurar las credenciales de Gmail.

### Paso 1: Habilitar la verificación en dos pasos

1. Ve a tu cuenta de Google
2. Navega a "Seguridad"
3. Habilita "Verificación en dos pasos"

### Paso 2: Generar una contraseña de aplicación

1. Ve a tu cuenta de Google
2. Navega a "Seguridad"
3. Busca "Contraseñas de aplicación"
4. Selecciona "Otra" como tipo de aplicación
5. Dale un nombre como "Revolución Otaku Oficial"
6. Copia la contraseña generada (16 caracteres)

### Paso 3: Configurar las variables de entorno

1. Crea un archivo `.env` en el directorio `backend/` (si no existe)
2. Agrega las siguientes variables:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="tu-secreto-super-seguro-aqui-cambialo-en-produccion"

# Configuración de Email (Gmail)
EMAIL_USER="tu-email@gmail.com"
EMAIL_PASS="tu-contraseña-de-aplicacion"
```

**Importante:**
- Reemplaza `tu-email@gmail.com` con tu dirección de Gmail
- Reemplaza `tu-contraseña-de-aplicacion` con la contraseña de aplicación generada en el Paso 2
- **NUNCA** uses tu contraseña normal de Gmail

### Paso 4: Verificar la configuración

1. Inicia el servidor backend: `npm run dev`
2. Verifica en la consola que aparezca: "Configuración de email verificada correctamente"
3. Si hay errores, revisa las credenciales y asegúrate de que la verificación en dos pasos esté habilitada

## Notas importantes

- El email se envía automáticamente después de un registro exitoso
- El email incluye el nombre de usuario y el tag del usuario
- Si el envío de email falla, el registro sigue siendo exitoso (el email se envía en segundo plano)
- Para producción, considera usar servicios como SendGrid, Mailgun o AWS SES

## Solución de problemas

### Error: "Invalid login"
- Verifica que la verificación en dos pasos esté habilitada
- Asegúrate de usar la contraseña de aplicación, no tu contraseña normal

### Error: "Username and Password not accepted"
- Verifica que el email esté escrito correctamente
- Asegúrate de que la contraseña de aplicación sea la correcta

### Error: "Less secure app access"
- Este error no debería aparecer con contraseñas de aplicación
- Si aparece, verifica que estés usando una contraseña de aplicación válida
