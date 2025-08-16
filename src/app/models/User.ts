import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  resetToken?: string;        // 👈 token for password reset
  resetTokenExpiry?: number;  // 👈 token expiry timestamp
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: { type: String, default: null },        // optional
    resetTokenExpiry: { type: Number, default: null },  // optional
  },
  { timestamps: true }
);

// Prevent model overwrite in dev/hot-reload
const User = mongoose.models.UserArshid || mongoose.model<IUser>("UserArshid", UserSchema);

export default User;
