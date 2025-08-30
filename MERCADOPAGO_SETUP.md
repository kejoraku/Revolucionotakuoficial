# Configuración de MercadoPago para Torneos

## Configuración de MercadoPago

Para que el sistema pueda procesar los pagos de inscripción a torneos, necesitas configurar MercadoPago.

### Paso 1: Crear cuenta en MercadoPago

1. Ve a [MercadoPago Argentina](https://www.mercadopago.com.ar/)
2. Crea una cuenta de vendedor
3. Completa la verificación de identidad
4. Configura tu información bancaria para recibir los pagos

### Paso 2: Configurar Preferencias de Pago

Para cada torneo, necesitas crear una preferencia de pago en MercadoPago:

#### Opción A: Usando el SDK de MercadoPago (Recomendado)

1. **Instalar el SDK de MercadoPago:**
```bash
cd backend
npm install mercadopago
```

2. **Crear un archivo de configuración:**
```javascript
// backend/src/lib/mercadopago.js
import mercadopago from 'mercadopago'

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
})

export async function createTournamentPreference(tournamentId, tournamentName) {
  const preference = {
    items: [
      {
        title: `Inscripción - ${tournamentName}`,
        unit_price: 3000,
        quantity: 1,
        currency_id: 'ARS'
      }
    ],
    back_urls: {
      success: `${process.env.FRONTEND_URL}/torneos?success=true`,
      failure: `${process.env.FRONTEND_URL}/torneos?failure=true`,
      pending: `${process.env.FRONTEND_URL}/torneos?pending=true`
    },
    auto_return: 'approved',
    external_reference: `tournament_${tournamentId}`,
    notification_url: `${process.env.BACKEND_URL}/api/webhooks/mercadopago`
  }

  try {
    const response = await mercadopago.preferences.create(preference)
    return response.body.id
  } catch (error) {
    console.error('Error creating preference:', error)
    throw error
  }
}
```

3. **Agregar variables de entorno:**
```env
MERCADOPAGO_ACCESS_TOKEN=your_access_token_here
FRONTEND_URL=http://localhost:3001
BACKEND_URL=http://localhost:3000
```

#### Opción B: Crear preferencias manualmente

1. Ve al [Panel de MercadoPago](https://www.mercadopago.com.ar/developers/panel/credentials)
2. Crea una preferencia para cada torneo
3. Usa los IDs de preferencia en el código

### Paso 3: Configurar Webhooks (Opcional pero recomendado)

Para recibir notificaciones cuando se complete un pago:

1. **Crear endpoint de webhook:**
```javascript
// backend/src/app/api/webhooks/mercadopago/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verificar que es una notificación válida de MercadoPago
    if (body.type === 'payment') {
      const paymentId = body.data.id
      
      // Aquí puedes procesar el pago
      // Por ejemplo, marcar al usuario como inscrito en el torneo
      console.log('Pago recibido:', paymentId)
    }
    
    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Error en webhook:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

2. **Configurar URL de webhook en MercadoPago:**
   - Ve a tu panel de MercadoPago
   - Configura la URL de webhook: `https://tu-dominio.com/api/webhooks/mercadopago`

### Paso 4: Actualizar el frontend

El código actual ya está configurado para usar URLs de MercadoPago. Solo necesitas:

1. **Reemplazar las URLs de ejemplo con las reales:**
```javascript
// En src/pages/Torneos.jsx, línea donde se genera la URL:
const mercadopagoUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_PREFERENCE_ID_${tournament.id}`
```

2. **O usar el SDK para generar URLs dinámicas:**
```javascript
// Llamar a la API del backend para obtener la URL
const response = await fetch(`/api/tournaments/${tournament.id}/payment-url`)
const { paymentUrl } = await response.json()
window.open(paymentUrl, '_blank')
```

## URLs de MercadoPago por Torneo

### URLs de ejemplo (reemplazar con las reales):

- **Mortal Kombat 1 Championship:** `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=REVOLUCION_OTAKU_1`
- **Tekken 8 Championship:** `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=REVOLUCION_OTAKU_3`
- **The King of Fighters XV:** `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=REVOLUCION_OTAKU_5`

## Configuración de Producción

### Variables de entorno para producción:

```env
MERCADOPAGO_ACCESS_TOKEN=APP_USR-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
FRONTEND_URL=https://tu-dominio.com
BACKEND_URL=https://tu-dominio.com
```

### Consideraciones de seguridad:

1. **Nunca expongas tu access token en el frontend**
2. **Usa HTTPS en producción**
3. **Valida las notificaciones de MercadoPago**
4. **Implementa manejo de errores robusto**

## Flujo de Pago

1. Usuario hace clic en "Inscribirse"
2. Sistema verifica que esté logueado
3. Se muestra confirmación con el precio
4. Usuario es redirigido a MercadoPago
5. Usuario completa el pago
6. MercadoPago redirige de vuelta al sitio
7. Sistema procesa la confirmación (opcional)

## Solución de problemas

### Error: "Preference not found"
- Verifica que el preference_id sea correcto
- Asegúrate de que la preferencia esté activa en MercadoPago

### Error: "Access token invalid"
- Verifica que el access token sea correcto
- Asegúrate de usar el token de producción, no el de prueba

### Los pagos no se procesan
- Verifica la configuración de webhooks
- Revisa los logs del servidor
- Confirma que las URLs de redirección sean correctas

## Soporte

Para más información sobre la integración con MercadoPago:
- [Documentación oficial de MercadoPago](https://www.mercadopago.com.ar/developers/es)
- [SDK de Node.js](https://github.com/mercadopago/sdk-nodejs)
- [API de Preferencias](https://www.mercadopago.com.ar/developers/es/docs/checkout-api/integrate-checkout/api/reference/preferences)


