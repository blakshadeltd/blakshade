// app/api/generator-quotation/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { turnstileToken, name, email, phone, company, message, configuration } = data;

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

    // Format configuration data for email
    const configText = `
Generator Configuration:
- Duty: ${configuration.duty}
- Phase: ${configuration.phase}
- Frequency: ${configuration.frequency}
- Application Type: ${configuration.applicationType}
- Environment: ${configuration.weather}
- Engine Brand: ${configuration.engineBrand}
- Alternator Brand: ${configuration.alternatorBrand}
- Exact Power: ${configuration.exactPower || "Not specified"}
- ATS: ${configuration.hasATS ? "Yes" : "No"}
- Extra Fuel Tank: ${configuration.hasExtraFuelTank ? "Yes" : "No"}
    `;

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
      subject: `[Generator Quotation] Request from ${name}${company ? ` at ${company}` : ''}`,
      text: `
Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone: ${phone || "-"}
Message: ${message || "-"}

${configText}
      `,
      html: `
        <h2>Generator Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
        <h3>Generator Configuration</h3>
        <ul>
          <li><strong>Duty:</strong> ${configuration.duty}</li>
          <li><strong>Phase:</strong> ${configuration.phase}</li>
          <li><strong>Frequency:</strong> ${configuration.frequency}</li>
          <li><strong>Application Type:</strong> ${configuration.applicationType}</li>
          <li><strong>Environment:</strong> ${configuration.weather}</li>
          <li><strong>Engine Brand:</strong> ${configuration.engineBrand}</li>
          <li><strong>Alternator Brand:</strong> ${configuration.alternatorBrand}</li>
          <li><strong>Exact Power:</strong> ${configuration.exactPower || "Not specified"}</li>
          <li><strong>ATS:</strong> ${configuration.hasATS ? "Yes" : "No"}</li>
          <li><strong>Extra Fuel Tank:</strong> ${configuration.hasExtraFuelTank ? "Yes" : "No"}</li>
        </ul>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}