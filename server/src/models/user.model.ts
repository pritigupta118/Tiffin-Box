import mongoose, {Schema} from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  contact: number;
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
  type: Number,
  
 },
 address: {
  type: String,
  default: "Update your address"
 },
 profilePicture: {
  type: String,
 default: ""
 },
  role:{
        type:String,
        enum:['user','partner'],
        required:true
    },
},
{
  timestamps: true
})

export const User = mongoose.model("User", userSchema )