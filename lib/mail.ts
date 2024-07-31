import { sendEmail } from "@/lib/sendEmail";

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const twoFactorEmailData = {
    to: email,
    subject: "Two factor authentication",
    html: `<div style="font-size:16px;"><p>Your 2FA code: ${token}</p></div>`,
  };
  await sendEmail(twoFactorEmailData);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;
  const resetEmailData = {
    to: email,
    subject: "Reset your password",
    html: `<div style="font-size:16px;"><p><a href="${resetLink}">Click here to reset your password</a></p></div>`,
  };
  await sendEmail(resetEmailData);
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;
  const verifyEmailData = {
    to: email,
    subject: "Verify email",
    html: `<div style="font-size:16px;"><p><a href="${confirmLink}">Click here to verify your email</a></p></div>`,
  };
  await sendEmail(verifyEmailData);
};
