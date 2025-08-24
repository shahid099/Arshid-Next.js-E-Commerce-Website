import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "../../lib/mongodb";
import User from "../../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Make sure to set this in .env

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
    };

    // Connect to MongoDB
    await connectDB();

    // Fetch user from DB (excluding password)
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error verifying user:", error);
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
  }
}
