import nodemailer from 'nodemailer'

// Configuración del transportador de email
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'revolucionotakuoficial@gmail.com',
    pass: process.env.EMAIL_PASS || 'tu-contraseña-de-aplicacion'
  }
})

// Función para enviar email de confirmación de registro
export async function sendRegistrationConfirmation(
  userEmail: string,
  username: string,
  tag: string
) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'revolucionotakuoficial@gmail.com',
      to: userEmail,
      subject: '¡Bienvenido a Revolución Otaku Oficial! - Registro Exitoso',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FFFF01;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #030002; margin-bottom: 10px;">🎌 Revolución Otaku Oficial 🎌</h1>
            <h2 style="color: #54BCD5; margin-bottom: 20px;">¡Registro Exitoso!</h2>
          </div>
          
          <div style="background-color: #FFE135; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <p style="font-size: 18px; color: #030002; margin-bottom: 15px;">
              ¡Hola <strong>${username}</strong>! 🎉
            </p>
            
            <p style="font-size: 16px; color: #030002; margin-bottom: 20px;">
              Tu registro en <strong>Revolución Otaku Oficial</strong> ha sido completado exitosamente.
            </p>
            
            <div style="background-color: #54BCD5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #030002; margin-bottom: 10px;">📋 Información de tu cuenta:</h3>
              <p style="color: #030002; margin-bottom: 5px;"><strong>Nombre de usuario:</strong> ${username}</p>
              <p style="color: #030002; margin-bottom: 5px;"><strong>Tag para torneos:</strong> ${tag}</p>
            </div>
            
            <p style="font-size: 16px; color: #030002; margin-bottom: 15px;">
              Tu tag <strong>"${tag}"</strong> será utilizado para cargar tus datos en el ranking de los torneos de videojuegos.
            </p>
            
            <p style="font-size: 16px; color: #030002; margin-bottom: 20px;">
              Ya puedes acceder a tu cuenta y participar en todos nuestros eventos, torneos y actividades de la comunidad.
            </p>
          </div>
          
          <div style="background-color: #FFE135; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: #030002; margin-bottom: 15px;">🎮 ¿Qué puedes hacer ahora?</h3>
            <ul style="color: #030002; font-size: 16px; line-height: 1.6;">
              <li>Participar en torneos de videojuegos</li>
              <li>Acceder a eventos exclusivos</li>
              <li>Conectar con otros miembros de la comunidad</li>
              <li>Recibir noticias sobre nuevos lanzamientos</li>
              <li>Acceder a contenido exclusivo</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #030002; font-size: 14px;">
              ¡Gracias por unirte a la Revolución Otaku! 🚀
            </p>
            <p style="color: #030002; font-size: 12px; margin-top: 10px;">
              Si tienes alguna pregunta, no dudes en contactarnos.
            </p>
          </div>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email de confirmación enviado:', info.messageId)
    return true
  } catch (error) {
    console.error('Error enviando email de confirmación:', error)
    return false
  }
}

// Función para verificar la configuración del email
export async function verifyEmailConfig() {
  try {
    await transporter.verify()
    console.log('Configuración de email verificada correctamente')
    return true
  } catch (error) {
    console.error('Error en la configuración de email:', error)
    return false
  }
}
