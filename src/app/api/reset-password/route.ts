import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  try {
    const { email, token, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email, resetToken: token });
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < Date.now()) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
