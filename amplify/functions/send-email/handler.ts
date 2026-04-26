import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Configurar cliente SES (cambia la región si es necesario)
const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event: any) => {
  console.log('📧 Lambda iniciada');
  console.log('Evento recibido:', JSON.stringify(event, null, 2));
  
  try {
    // Obtener argumentos de la mutación
    const { nombre, email, telefono, mensaje } = event.arguments;
    
    // Validar datos requeridos
    if (!nombre || !email || !mensaje) {
      throw new Error('Faltan campos requeridos: nombre, email o mensaje');
    }
    
    // Configurar el correo electrónico
    const params = {
      Destination: {
        ToAddresses: ["jmgdesarrollos@gmail.com"] // 👈 DESTINATARIO
      },
      Message: {
        Body: {
          Text: {
            Data: `NUEVO MENSAJE DE CONTACTO\n\n` +
                  `Nombre: ${nombre}\n` +
                  `Email: ${email}\n` +
                  `Teléfono: ${telefono || 'No proporcionado'}\n\n` +
                  `Mensaje:\n${mensaje}\n\n` +
                  `---\nEnviado desde el formulario de contacto`
          },
          Html: {
            Data: `<!DOCTYPE html>
                   <html>
                   <head>
                     <style>
                       body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                       .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                       .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
                       .content { padding: 20px; background: #f9f9f9; }
                       .field { margin-bottom: 15px; }
                       .label { font-weight: bold; color: #667eea; }
                       .message { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
                       .footer { text-align: center; padding: 20px; font-size: 12px; color: #999; }
                     </style>
                   </head>
                   <body>
                     <div class="container">
                       <div class="header">
                         <h2>📧 Nuevo Mensaje de Contacto</h2>
                       </div>
                       <div class="content">
                         <div class="field">
                           <div class="label">👤 Nombre:</div>
                           <div>${nombre}</div>
                         </div>
                         <div class="field">
                           <div class="label">📧 Email:</div>
                           <div><a href="mailto:${email}">${email}</a></div>
                         </div>
                         <div class="field">
                           <div class="label">📞 Teléfono:</div>
                           <div>${telefono || 'No proporcionado'}</div>
                         </div>
                         <div class="field">
                           <div class="label">💬 Mensaje:</div>
                           <div class="message">${mensaje.replace(/\n/g, '<br>')}</div>
                         </div>
                       </div>
                       <div class="footer">
                         <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
                       </div>
                     </div>
                   </body>
                   </html>`
          }
        },
        Subject: {
          Data: `📬 Contacto Web: ${nombre}`
        }
      },
      Source: "jmgdesarrollos@gmail.com", // 👈 REMITENTE (debe estar verificado en SES)
      ReplyToAddresses: [email]
    };
    
    console.log('📧 Enviando email con parámetros:', JSON.stringify(params, null, 2));
    
    // Enviar el correo
    const command = new SendEmailCommand(params);
    const response = await ses.send(command);
    
    console.log('✅ Email enviado exitosamente!');
    console.log('Message ID:', response.MessageId);
    
    // Devolver respuesta exitosa
    return {
      success: true,
      messageId: response.MessageId,
      message: "Correo enviado exitosamente"
    };
    
  } catch (error) {
    console.error('❌ ERROR en Lambda:');
    
    if (error instanceof Error) {
      console.error('Mensaje:', error.message);
      console.error('Stack:', error.stack);
      
      // Manejar errores específicos de SES
      if (error.message.includes('Email address not verified')) {
        throw new Error('La dirección de correo remitente no está verificada en AWS SES');
      } else if (error.message.includes('Daily message quota')) {
        throw new Error('Se ha alcanzado la cuota diaria de envío de emails');
      } else if (error.message.includes('InvalidParameterValue')) {
        throw new Error('Parámetros inválidos al enviar el email');
      } else {
        throw new Error(`Error al enviar email: ${error.message}`);
      }
    } else {
      console.error('Error desconocido:', error);
      throw new Error('Error desconocido al enviar el email');
    }
  }
};