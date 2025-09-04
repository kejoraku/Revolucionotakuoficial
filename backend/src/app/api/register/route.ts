import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { sendRegistrationConfirmation } from '@/lib/emailService'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password, email, tag, phone, receiveNews, ciudad } = body

    // Validar campos obligatorios
    if (!username || !password || !email || !tag) {
      return NextResponse.json(
        { message: 'Todos los campos obligatorios son requeridos (username, password, email, tag)' },
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

    // Validar tag: letras, números y símbolos, 3-15 caracteres
    const tagRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{3,15}$/
    if (!tagRegex.test(tag)) {
      return NextResponse.json(
        { message: 'El tag debe tener entre 3 y 15 caracteres, puede contener letras, números y símbolos' },
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

    // Verificar si el tag ya existe
    const existingTag = await prisma.user.findUnique({
      where: { tag }
    })

    if (existingTag) {
      return NextResponse.json(
        { message: 'El tag ya está en uso' },
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
        tag,
        phone: phone || null,
        ciudad: ciudad || null,
        receiveNews: receiveNews || false
      }
    })

    // Enviar email de confirmación (en segundo plano, no bloquear la respuesta)
    sendRegistrationConfirmation(email, username, tag).catch(error => {
      console.error('Error enviando email de confirmación:', error)
    })

    // Retornar respuesta exitosa (sin la contraseña)
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: 'Usuario registrado exitosamente. Se ha enviado un email de confirmación.',
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
