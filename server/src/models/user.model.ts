import mongoose, { Schema } from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  profilePicture: string;
  role: string;
  timestamps: Date
}
const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    enum: [
      "Girls' Hostel",
      "Boys' Hostel",
      "Stuff Quarter",
      "BioTech Building",
      "Administrative Building",
      "Registrar Building"
    ],
    
  },
  profilePicture: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  },
},
  {
    timestamps: true
  })

export const User = mongoose.model("User", userSchema)