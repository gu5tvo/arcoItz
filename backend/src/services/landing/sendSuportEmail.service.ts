import transporter from "../../utils/nodemailer";

export default async function sendSupportEmailService({ name, email, phone, message }) {

  transporter.sendMail(
    {
      from: email,
      to: process.env.RECIPIENT_EMAIL, 
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
