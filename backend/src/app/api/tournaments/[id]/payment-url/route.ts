import { NextRequest, NextResponse } from 'next/server'
import { createTournamentPreference } from '@/lib/mercadopago'

export async function GET(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id: idParam } = await ctx.params
    const id = Number(idParam)
    if (Number.isNaN(id)) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 })
    }

    // Nombre de torneo (en un caso real, lo buscarías en DB)
    const tournamentNames: Record<number, string> = {
      1: 'Dragon Ball Z Budokai Tenkaichi III Championship',
      2: 'Mortal Kombat 11 Tournament',
      3: 'PES 2018 Championship',
      4: 'Just Dance',
      5: 'Guitar Hero III Performance'
    }

    const name = tournamentNames[id] || `Torneo ${id}`

    const paymentUrl = await createTournamentPreference(id, name)
    return NextResponse.json({ paymentUrl })
  } catch (error: any) {
    console.error('Error creando preferencia:', error)
    const status = error?.status || 500
    const message = error?.message || 'Error al crear preferencia'
    return NextResponse.json({ message }, { status })
  }
}
