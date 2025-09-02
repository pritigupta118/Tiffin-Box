import mongoose, {Schema} from "mongoose";

export interface IMenu {
  name: string,
  description: string,
  price: number,
  imageUrl: string
}

export interface IMenuDocument extends IMenu, Document {
createdAt: Date,
updatedAt: Date
}

const menuSchema = new Schema<IMenuDocument>({
  name:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    requried: true
  }
}, {timestamps: true})

export const Menu = mongoose.model("Menu", menuSchema)