
import { Order } from "../models/order.model";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Menu } from "../models/menu.model";
import { User } from "../models/user.model";
import { Restaurant } from "../models/restaurant.model";


export const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.id; // assuming you attach user id to req in auth middleware
    const { restaurant, deliveryAddress, cartItems } = req.body;

    // ✅ Step 1: Basic validation
    if (!restaurant || !deliveryAddress || !cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Restaurant, delivery details and cart items are required",
      });
    }

    // ✅ Step 2: Calculate totalAmount securely
    let totalAmount = 0;

    for (const item of cartItems) {
      // fetch menu price from DB
      const menuItem = await Menu.findById(item.menuId);
      if (!menuItem) {
        return res.status(404).json({
          success: false,
          message: `Menu item not found: ${item.menuId}`,
        });
      }

      const itemTotal = menuItem.price * item.quantity;
      totalAmount += itemTotal;

      // overwrite price/name/image to prevent tampering
      item.price = menuItem.price;
      item.name = menuItem.name;
      item.image = menuItem.imageUrl;
    }

    // ✅ Step 3: Create order
    const newOrder = new Order({
      user: userId,
      restaurant,
      deliveryAddress,
      cartItems,
      totalAmount,
      status: "pending",
    });

    await newOrder.save();

    // ✅ Step 4: Return response
    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const allowedStatuses = ["pending", "confirmed", "preparing", "outfordelivery", "delivered"];
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const user= await User.findById({_id: req.id})

    // ✅ Step 1: Authorization check
    if (!user || user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update order status",
      });
    }

    // ✅ Step 2: Validate status
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    // ✅ Step 3: Update order
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // ✅ Step 4: Return success response
    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleOrder = async(req: Request, res: Response) => {
try {
  const {orderId} = req.params
  const user = await User.findById(req.id)
      if (!user || user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view this order",
      });
    }
  const order = await Order.findById(orderId).populate("user","fullName contact address")
  if (!order) {
    return res.status(404).json({
      success: false,
      message: "No order found!"
    })
  }
  return res.status(200).json({
    success: true,
    order
  })

} catch (error) {
  console.error("Error fetching order:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
}
}

export const allMyOrders = async(req: Request, res: Response) => {
  try {
    const orders = await Order.find({user:req.id})
    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found",
      });
    }

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export const getRestaurantOrders = async (req: Request, res: Response) => {
  try {
    // 1. Verify user role
    const user = await User.findById(req.id);
    if (!user || user.role !== "owner") {
      return res.status(403).json({
        success: false,
        message: "Only restaurant owners can view these orders",
      });
    }

    // 2. Verify restaurant exists for this user
    const restaurant = await Restaurant.findOne({ user: req.id });
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "No restaurant found for this account",
      });
    }

    // 3. Fetch orders
    const orders = await Order.find({ restaurant: restaurant._id })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found for your restaurant",
      });
    }

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching restaurant orders:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



