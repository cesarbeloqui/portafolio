import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import "dotenv/config";
import sgMail from "@sendgrid/mail";

// server used to send send emails
const app = express();
app.use(cors());
app.use(json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/contact", async (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: `${process.env.EMAIL_USER}`,
    to: "beloqui.cesar@gmail.com",
    subject: "Contacto Formulario - Portfolio",
    html: `<p>Nombre: ${name}</p>
           <p>Email: ${email}</p>
           <p>Telefono: ${phone}</p>
           <p>Mensaje: ${message}</p>`,
  };
  try {
    await sgMail.send(mail);
    res.json({ code: 200, status: "Message Sent" });
  } catch (e) {
    res.json(e);
  }
});
