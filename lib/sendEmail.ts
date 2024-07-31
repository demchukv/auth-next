import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface mailData {
  to: string;
  subject: string;
  html: string;
}
export const sendEmail = async (data: mailData) => {
  const msg = { ...data, from: "aquatrack3@gmail.com" };
  await sgMail.send(msg);
  return true;
};
