import User from "../../model/user.model";
import jwt from "jsonwebtoken";
import nodeMailer from 'nodemailer';
import 'dotenv/config'
import { google } from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
   
export default async function sendResetService(email, ip){
    const user = await User.findOne({email});

    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '5h'});

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
        subject: "Recuperação de senha - DiversiTrampos",
        html: `<p>Olá, <b>${user.name}</b>!</p>
        <p>Recebemos uma solicitação de recuperação de senha para sua conta no DiversiTrampo.</p>
        <p>Caso não tenha sido você, ignore este e-mail.</p>
        <p>Caso tenha sido você, clique no link abaixo para redefinir sua senha:</p>
        <a href="${process.env.WEBSITE_URL}/reset/${token}">Clique aqui para resetar sua senha</a>
        <p>A solicitação partiu deste endereço de IP: ${ip}</p>
        <p>Este link só estará disponível durante 5 horas.</p>
        `
    }, (err) => {
        if(err){
            console.log(err);
            return;
        }
    })

    return "E-mail enviado com sucesso!"
}