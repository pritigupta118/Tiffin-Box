import express from "express"
import { login, logout, signup, updateProfile } from "../controllers/user.controller"
import { verifyToken } from "../middlewares/verifyToken"

const userRouter = express.Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/update/profile", verifyToken, updateProfile)

export default userRouter