import express from "express"
import {config} from "dotenv"
import userRouter from "./routes/user.route"
import { connectDb } from "./db/connectDB"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import orderRouter from "./routes/order.route"


const app = express()
config()

app.use(bodyParser.json({limit: '10mb'}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '10mb'}))
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOption))


app.use("/user", userRouter)
app.use("/order", orderRouter)

connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
  console.log(`app is listening at port ${PORT}`);
  
})