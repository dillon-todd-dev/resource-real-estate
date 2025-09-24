import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const RequestSchema = z.object({
  email: z.string().email('Invalid email format'),
});

type RequestBody = z.infer<typeof RequestSchema>;

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    const validatedBody = RequestSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL!,
      to: [process.env.ADMIN_EMAIL!],
      subject: 'New Investor Subscription',
      html: `
        <h3>New Investor Subscription</h3>
        <p><strong>Email:</strong> ${validatedBody.email}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
    }

    return NextResponse.json({ error }, { status: 500 });
  }
}
