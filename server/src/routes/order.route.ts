import express from "express"
import { verifyToken } from "../middlewares/verifyToken"
import { allMyOrders, createOrder, getSingleOrder } from "../controllers/order.controller"

const orderRouter = express.Router()

orderRouter.post("/new", verifyToken, createOrder)
orderRouter.get("admin/order/:id", verifyToken, getSingleOrder)
orderRouter.get("/my-orders", verifyToken, allMyOrders)

export default orderRouter