import nodemailer from 'nodemailer';

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export class EmailService {
  private static transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Enviar email genérico
  static async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  }

  // Template de boas-vindas
  static async sendWelcomeEmail(to: string, nome: string, tipo: 'admin' | 'modelo' | 'assinante'): Promise<boolean> {
    const tipoTexto = {
      admin: 'Administrador',
      modelo: 'Modelo',
      assinante: 'Assinante Premium'
    };

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; }
          .header { background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 40px 20px; text-align: center; }
          .logo { color: white; font-size: 32px; font-weight: 900; margin-bottom: 10px; }
          .tagline { color: rgba(255,255,255,0.9); font-size: 16px; }
          .content { padding: 40px 20px; }
          .title { font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 20px; }
          .text { color: #6b7280; line-height: 1.6; margin-bottom: 20px; }
          .button { display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">HotLovers</div>
            <div class="tagline">Plataforma Premium #1 do Brasil</div>
          </div>
          
          <div class="content">
            <h1 class="title">Bem-vindo(a), ${nome}!</h1>
            
            <p class="text">
              Sua conta como <strong>${tipoTexto[tipo]}</strong> foi criada com sucesso na HotLovers! 🎉
            </p>
            
            <p class="text">
              Agora você faz parte da maior plataforma premium de conteúdo adulto do Brasil. 
              Prepare-se para uma experiência única e exclusiva.
            </p>
            
            <a href="${process.env.APP_URL}/login" class="button">
              Fazer Login Agora
            </a>
            
            <p class="text">
              Se você não criou esta conta, pode ignorar este email com segurança.
            </p>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} HotLovers. Todos os direitos reservados.</p>
            <p>Plataforma para maiores de 18 anos • Conteúdo adulto premium</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return this.sendEmail({
      to,
      subject: `Bem-vindo(a) à HotLovers, ${nome}!`,
      html,
      text: `Bem-vindo(a) à HotLovers, ${nome}! Sua conta como ${tipoTexto[tipo]} foi criada com sucesso.`
    });
  }

  // Template de reset de senha
  static async sendPasswordResetEmail(to: string, nome: string, resetCode: string): Promise<boolean> {
    const resetUrl = `${process.env.RESET_PASSWORD_URL}?token=${resetCode}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; }
          .header { background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 40px 20px; text-align: center; }
          .logo { color: white; font-size: 32px; font-weight: 900; margin-bottom: 10px; }
          .content { padding: 40px 20px; }
          .title { font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 20px; }
          .text { color: #6b7280; line-height: 1.6; margin-bottom: 20px; }
          .code-box { background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
          .code { font-size: 32px; font-weight: bold; color: #dc2626; letter-spacing: 4px; }
          .button { display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
          .warning { background-color: #fef3cd; border: 1px solid #fbbf24; padding: 15px; border-radius: 8px; color: #92400e; margin: 20px 0; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">HotLovers</div>
          </div>
          
          <div class="content">
            <h1 class="title">Recuperação de Senha</h1>
            
            <p class="text">Olá, ${nome}!</p>
            
            <p class="text">
              Recebemos uma solicitação para redefinir a senha da sua conta HotLovers.
            </p>
            
            <div class="code-box">
              <div>Seu código de recuperação é:</div>
              <div class="code">${resetCode}</div>
            </div>
            
            <p class="text">
              Clique no botão abaixo ou copie e cole o código na página de recuperação:
            </p>
            
            <a href="${resetUrl}" class="button">
              Redefinir Senha
            </a>
            
            <div class="warning">
              <strong>⚠️ Importante:</strong> Este código expira em 1 hora e só pode ser usado uma vez. 
              Se você não solicitou esta recuperação, ignore este email.
            </div>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} HotLovers. Todos os direitos reservados.</p>
            <p>Se você não conseguir clicar no botão, acesse: ${resetUrl}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return this.sendEmail({
      to,
      subject: 'Recuperação de Senha - HotLovers',
      html,
      text: `Código de recuperação de senha: ${resetCode}. Acesse: ${resetUrl}`
    });
  }

  // Template de verificação de email
  static async sendEmailVerification(to: string, nome: string, verificationCode: string): Promise<boolean> {
    const verificationUrl = `${process.env.APP_URL}/verificar-email?token=${verificationCode}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; }
          .header { background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 40px 20px; text-align: center; }
          .logo { color: white; font-size: 32px; font-weight: 900; margin-bottom: 10px; }
          .content { padding: 40px 20px; }
          .title { font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 20px; }
          .text { color: #6b7280; line-height: 1.6; margin-bottom: 20px; }
          .button { display: inline-block; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">HotLovers</div>
          </div>
          
          <div class="content">
            <h1 class="title">Verificar Email</h1>
            
            <p class="text">Olá, ${nome}!</p>
            
            <p class="text">
              Para ativar sua conta HotLovers e começar a aproveitar todo o conteúdo premium, 
              você precisa verificar seu email.
            </p>
            
            <a href="${verificationUrl}" class="button">
              Verificar Email
            </a>
            
            <p class="text">
              Se você não conseguir clicar no botão, copie e cole este link no seu navegador:<br>
              <code>${verificationUrl}</code>
            </p>
          </div>
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} HotLovers. Todos os direitos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return this.sendEmail({
      to,
      subject: 'Verificar Email - HotLovers',
      html,
      text: `Verificar email: ${verificationUrl}`
    });
  }
}

export default EmailService;