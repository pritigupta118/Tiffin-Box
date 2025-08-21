import express from "express"
import {config} from "dotenv"
import userRouter from "./routes/user.route"
import { connectDb } from "./db/connectDB"


const app = express()
config()


app.use("/user", userRouter)

connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
  console.log(`app is listening at port ${PORT}`);
  
})