import nodeMailer from 'nodemailer';
import 'dotenv/config'
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
   
export default async function confirmEmail(email: string, ip: string, code: string){
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

    transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Código de confirmação - DiversiTrampo",
        html: `
        <p>O seu código de confirmação é:</p>
        <h1>${code}</h1>
        <p>Recebemos uma solicitação de criação de uma conta com este e-mail na plataforma DiversiTrampo.</p>
        <p>Caso você não tenha tentado criar uma conta em nossa plataforma, ignore este e-mail.</p>
        <p>A solicitação partiu do endereço de IP: ${ip}</p>
        `
    }, (err) => {
        if(err){
            console.log(err);
            return;
        }
    })

    return "E-mail enviado com sucesso!"
}