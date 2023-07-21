import transporter from "../../utils/nodemailer";
import User from "../../model/user.model";
import jwt from "jsonwebtoken";

export default async function sendResetService(email, ip){
    const user = await User.findOne({email});

    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '5h'});

    transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Recuperação de senha - DiversiTrampos",
        html: `<p>Olá, <b>${user.name}</b>!</p>
        <p>Recebemos uma solicitação de recuperação de senha para sua conta no diversiTrampos.</p>
        <p>Caso não tenha sido você, ignore este e-mail.</p>
        <p>Caso tenha sido você, clique no link abaixo para redefinir sua senha:</p>
        <a href="${process.env.WEBSITE_URL}/reset/${token}">Clique aqui para resetar sua senha</a>
        <p>A solicitação partiu deste endereço de IP: ${ip}</p>
        <p>Este link só estará disponível durante 5 horas.</p>
        `
    }, (err, info) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(info);
    })

    return {message: "E-mail enviado com sucesso!"}
}