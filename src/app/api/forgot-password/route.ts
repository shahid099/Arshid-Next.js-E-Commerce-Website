import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer, { Transporter } from "nodemailer"; // 👈 Import Transporter type
import connectDB from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    // Generate token
    const token = crypto.randomBytes(20).toString("hex");
    const expiry = Date.now() + 3600000; // 1 hour

    user.resetToken = token;
    user.resetTokenExpiry = expiry;
    await user.save();

    // Setup mailer with type checking
    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const resetURL = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}&email=${email}`;

    await transporter.sendMail({
      to: email,
      from: process.env.EMAIL_USER,
      subject: "Password Reset",
      html: `
        <p>You requested a password reset</p>
        <p>Click this <a href="${resetURL}">link</a> to reset your password.</p>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    return NextResponse.json({ message: "Password reset email sent" });
  } catch (err) {
    console.error("Password reset error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
