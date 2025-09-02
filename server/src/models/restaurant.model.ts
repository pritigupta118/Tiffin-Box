import { User } from "./user.model";
import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurant {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  address: string;
  deliveryTime: number;
  cuisines: string[];
  menus: mongoose.Types.ObjectId[],
  imageUrl?: string
}
export interface IRestaurantDocument extends IRestaurant, Document {
    createdAt:Date;
    updatedAt:Date;
}
const restaurantchema = new Schema<IRestaurantDocument>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  cuisines: [{
    type: String,
    required: true
  }],
  menus: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu"
  }],
  imageUrl: {
    type: String
  }
}, {timestamps: true})

export const Restaurant = mongoose.model("Restaurant", restaurantchema)