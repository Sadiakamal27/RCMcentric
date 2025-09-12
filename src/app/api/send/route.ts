// app/api/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Debug: Log the received data
    console.log("Received form data:", data);

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
    emailBody += "================\n";
    
    // Format field names nicely
    const fieldLabels: { [key: string]: string } = {
      // Basic contact info
      fullName: "Full Name",
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phone Number",
      phone: "Phone Number",
      workPhone: "Work Phone",
      email: "Email",
      workEmail: "Work Email",
      practiceName: "Practice Name",
      businessName: "Business Name",
      message: "Message",
      
      // Job and practice details
      jobRole: "Job Role",
      numProviders: "Number of Providers",
      providers: "Number of Providers",
      monthlyCollection: "Monthly Collection",
      collection: "Monthly Collection",
      serviceInterest: "Service Interest",
      services: "Services Interest",
      interest: "Areas of Interest",
      
      // Other fields
      privacy: "Privacy Policy Accepted"
    };
    
    for (const [key, value] of Object.entries(data)) {
      // Filter out system fields and reCAPTCHA data
      if (key !== "formName" && 
          key !== "email" && 
          key !== "workEmail" && 
          key !== "work_email" &&
          key !== "g-recaptcha-response" &&
          key !== "recaptcha" &&
          !key.startsWith("g-")) {
        const label = fieldLabels[key] || key;
        emailBody += `${label}: ${value || "N/A"}\n`;
      }
    }
    
    emailBody += "\n================\n";
    emailBody += `Submitted at: ${new Date().toLocaleString()}`;

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