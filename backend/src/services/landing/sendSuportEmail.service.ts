import nodeMailer from 'nodemailer';
import 'dotenv/config'
import { SupportEmailServiceProps } from '../../interfaces/email.interface';
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
   
export default async function sendSupportEmailService({ name, email, phone, message }: SupportEmailServiceProps) {

  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SMTP_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  await transporter.sendMail(
    {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, 
      subject: "Contato do Formulário - DiversiTrampos",
      html: `
        <p>Nome: <b>${name}</b></p>
        <p>Email: ${email}</p>
        <p>Telefone: ${phone}</p>
        <p>Mensagem:</p>
        <p>${message}</p>
      `,
    },
    (err, info) => {
      if (err) {
        console.error(err);
        throw new Error("Erro ao enviar o email"); 
      }
    }
  );

  return { message: "E-mail enviado com sucesso!" };
}
