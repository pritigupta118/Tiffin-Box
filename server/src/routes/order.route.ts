import express from "express"
import { verifyToken } from "../middlewares/verifyToken"
import { allMyOrders, createOrder, getRestaurantOrders, getSingleOrder, updateOrderStatus } from "../controllers/order.controller"

const orderRouter = express.Router()

orderRouter.post("/new", verifyToken, createOrder)
orderRouter.get("admin/order/:id", verifyToken, getSingleOrder)
orderRouter.put("admin/order/:id", verifyToken, updateOrderStatus)
orderRouter.get("/my-orders", verifyToken, allMyOrders)
orderRouter.get("/admin/orders", verifyToken, getRestaurantOrders)

export default orderRouter