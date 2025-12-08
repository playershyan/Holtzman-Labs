import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message, company } = body || {};

    if (company) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!resend || !contactEmail) {
      return NextResponse.json(
        { error: "Email service not configured. Set RESEND_API_KEY and CONTACT_EMAIL." },
        { status: 500 },
      );
    }

    const subject = `New inquiry from ${name}`;
    const emailHtml = await render(EmailTemplate({ name, email, projectType, message }));

    const { data, error } = await resend.emails.send({
      from: "Holtzman Labs <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject,
      html: emailHtml,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: error.message || "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("[contact] Caught error:", error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Unable to send message right now." 
    }, { status: 500 });
  }
}

