// import { Resend } from "resend";
import { sendEmail } from "@/lib/sendEmail";

// const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;
  const verifyEmailData = {
    to: email,
    subject: "Verify email",
    html: `<a href="${confirmLink}">Click here to verify your email</a>`,
  };
  const res = await sendEmail(verifyEmailData);
  console.log(res);
};

/*
    const verifyEmailData = {
      to: email,
      subject: 'Verify email',
      html: `<h1>Please verify your email</h1><p><a target="_blank" href="${process.env.BASE_URI}/api/auth/verify/${verificationToken}">Click verify email</a></p>`,
    };

    */
