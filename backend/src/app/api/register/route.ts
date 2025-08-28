import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password, email, phone, receiveNews } = body

    // Validar campos obligatorios
    if (!username || !password || !email) {
      return NextResponse.json(
        { message: 'Todos los campos obligatorios son requeridos' },
        { status: 400 }
      )
    }

    // Validar nombre de usuario: solo letras y números, 6-12 caracteres
    const usernameRegex = /^[a-zA-Z0-9]{6,12}$/
    if (!usernameRegex.test(username)) {
      return NextResponse.json(
        { message: 'El nombre de usuario debe tener entre 6 y 12 caracteres, solo letras y números' },
        { status: 400 }
      )
    }

    // Validar contraseña: solo letras y números, máximo 12 caracteres
    const passwordRegex = /^[a-zA-Z0-9]{1,12}$/
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        { message: 'La contraseña debe tener máximo 12 caracteres, solo letras y números' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Validar teléfono (opcional): solo números
    if (phone && !/^\d+$/.test(phone)) {
      return NextResponse.json(
        { message: 'El teléfono debe contener solo números' },
        { status: 400 }
      )
    }

    // Verificar si el nombre de usuario ya existe
    const existingUsername = await prisma.user.findUnique({
      where: { username }
    })

    if (existingUsername) {
      return NextResponse.json(
        { message: 'El nombre de usuario ya está en uso' },
        { status: 409 }
      )
    }

    // Verificar si el email ya existe
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    })

    if (existingEmail) {
      return NextResponse.json(
        { message: 'El email ya está en uso' },
        { status: 409 }
      )
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        phone: phone || null,
        receiveNews: receiveNews || false
      }
    })

    // Retornar respuesta exitosa (sin la contraseña)
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: 'Usuario registrado exitosamente',
        user: userWithoutPassword
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
