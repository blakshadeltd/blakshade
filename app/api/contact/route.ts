import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { turnstileToken, name, email, phone, company, subject, message } = data;

    if (!turnstileToken) {
      return NextResponse.json({ ok: false, error: "Missing Turnstile token" }, { status: 400 });
    }

    // Verify Turnstile token
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ ok: false, error: "CAPTCHA verification failed" }, { status: 400 });
    }

    // Send email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: `[Contact Form] ${subject || "No subject"}`,
      text: `
Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone: ${phone || "-"}
Message: ${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
