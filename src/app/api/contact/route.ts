import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, honeypot } = body;

    // Spam honeypot trap
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Message sent." }, { status: 200 });
    }

    // Required field validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please enter a subject (minimum 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Optional Formspree forwarding if FORMSPREE_ENDPOINT or FORMSPREE_ID env var is present
    const formspreeUrl = process.env.FORMSPREE_ENDPOINT || (process.env.FORMSPREE_ID ? `https://formspree.io/f/${process.env.FORMSPREE_ID}` : null);

    if (formspreeUrl) {
      try {
        const formspreeRes = await fetch(formspreeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim()
          })
        });

        if (!formspreeRes.ok) {
          const errData = await formspreeRes.json();
          return NextResponse.json(
            { success: false, error: errData.error || "Failed to submit through form service." },
            { status: 502 }
          );
        }
      } catch (err: any) {
        console.error("Formspree forwarding error:", err);
        return NextResponse.json(
          { success: false, error: "Contact submission gateway error." },
          { status: 502 }
        );
      }
    }

    console.log(`[Contact Submission] From: ${fullName} <${email}> | Subject: ${subject}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Shyam will respond shortly."
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing request." },
      { status: 500 }
    );
  }
}

