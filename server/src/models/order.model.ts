import mongoose, {Document, Schema} from "mongoose"


type CartItems = {
  menuId: string;
  name: string;
  image: string;
  price: number;
  quantity: number
}

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  deliveryAddress: string;
  cartItems: CartItems;
  totalAmount: number;
  status: "pending" | "confirmed" |"preparing" |"outfordelivery" |"delivered"
}
const orderschema = new Schema<IOrder>({
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true
},
restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
deliveryAddress:{
       type: String,
       required: true
    },
cartItems:[
        {
            menuId:{type:String, required:true},
            name:{type:String, required:true},
            image:{type:String, required:true},
            price:{type:Number, required:true},
            quantity:{type:Number, required:true},
        }
    ],
totalAmount: {type: Number, required: true},
status:{
        type:String,
        enum:["pending" , "confirmed" , "preparing" , "outfordelivery" , "delivered"],
        required:true
    }
},{ timestamps: true})

export const Order = mongoose.model("Order", orderschema)