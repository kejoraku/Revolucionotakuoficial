import { MercadoPagoConfig, Preference } from 'mercadopago'

const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
if (!accessToken) {
  throw new Error('Falta MERCADOPAGO_ACCESS_TOKEN en el entorno del backend')
}
const client = new MercadoPagoConfig({ accessToken })

export async function createTournamentPreference(tournamentId: number, tournamentName: string) {
  const preference = new Preference(client)

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001'
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:3000'

  const result = await preference.create({
    body: {
      items: [
        {
          title: `Inscripción - ${tournamentName}`,
          unit_price: 3000,
          quantity: 1,
          currency_id: 'ARS'
        }
      ],
      back_urls: {
        success: `${frontendUrl}/torneos?success=true`,
        failure: `${frontendUrl}/torneos?failure=true`,
        pending: `${frontendUrl}/torneos?pending=true`
      },
      external_reference: `tournament_${tournamentId}`,
      notification_url: `${backendUrl}/api/webhooks/mercadopago`
    }
  })

  return (result.init_point as string) || (result.sandbox_init_point as string)
}
