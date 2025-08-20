import emailjs from 'emailjs-com';

export interface ContactSectionData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactSectionData): Promise<void> {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
    throw new Error(`EmailJS environment variables are not set. SERVICE_ID: ${SERVICE_ID}, TEMPLATE_ID: ${TEMPLATE_ID}, USER_ID: ${USER_ID}`);
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      message: data.message,
      title: 'Novo contato pelo site',
    },
    USER_ID
  );
}
