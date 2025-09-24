'use server';

import { Resend } from 'resend';
import { success, z } from 'zod';

let resend: Resend;

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }

  return resend;
}

const RequestSchema = z.object({
  email: z.email('Invalid email format'),
});

export async function subscribe(formData: FormData) {
  const validatedFields = RequestSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return 'Failed to subscribe to newsletter';
  }

  const { data, error } = await getResend().emails.send({
    from: process.env.EMAIL!,
    to: [process.env.ADMIN_EMAIL!],
    subject: 'New Investor Subscription',
    html: `
        <h3>New Investor Subscription</h3>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
      `,
  });

  if (error) {
    return 'Failed to subscribe to newsletter';
  }

  return 'Successfully subscribed to newsletter';
}
