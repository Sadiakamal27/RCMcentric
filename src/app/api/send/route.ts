// app/api/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ✅ Pick required fields and allow all other data
    const formName = data.formName || "Unknown Form";
    const email = data.email || data.workEmail || data.work_email || null;

    if (!email || !formName) {
      return NextResponse.json(
        { success: false, message: "Email and formName are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // or use a custom SMTP server
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct email body with all form details
    let emailBody = `New submission from ${formName}\n\n`;
    emailBody += `Submitted Email: ${email}\n\n`;
    emailBody += "Form Details:\n";
    for (const [key, value] of Object.entries(data)) {
      if (key !== "formName" && key !== "email" && key !== "workEmail" && key !== "work_email") {
        emailBody += `${key}: ${value || "N/A"}\n`;
      }
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sadiakamal2468@gmail.com",
      subject: `📩 New submission from ${formName}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}