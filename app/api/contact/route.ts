import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, mobile, subject, message } = await req.json()

    // Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email Options
    const mailOptions = {
      from: email,
      to: "pradeepmadasar@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile || "Not Provided"}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile || "Not Provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 10px;">${message}</p>
          </div>
        </div>
      `,
    }

    // Send Email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: "Email sent successfully!" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, message: "Failed to send email." }, { status: 500 })
  }
}

