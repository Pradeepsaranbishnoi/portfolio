import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, subject, message } = await req.json();

    // Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Replace with your Gmail
        pass: process.env.EMAIL_PASS, // Use an App Password, not your Gmail password
      },
    });

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
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
