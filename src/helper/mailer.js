
import nodemailer from "nodemailer";

export const sendEmail = async (email, verificationCode) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      post: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
   
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Verification Code",
      text: `Your verification code: ${verificationCode}`,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
