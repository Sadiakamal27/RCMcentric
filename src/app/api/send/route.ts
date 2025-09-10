// app/api/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // ✅ Pick only what we need
    const formName = data.formName || "Unknown Form"
    const email = data.email || data.workEmail || data.work_email || null

    if (!email || !formName) {
      return NextResponse.json(
        { success: false, message: "Email and formName are required" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // or smtp
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sadiakamal2468@gmail.com",
      subject: `📩 New submission from ${formName}`,
      text: `Email submitted: ${email}\nForm: ${formName}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
