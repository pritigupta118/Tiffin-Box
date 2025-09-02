import { Request, Response } from "express";
import mongoose from "mongoose"
import uploadImageOnCloudinary from "../utils/imageUpload";
import { Menu } from "../models/menu.model";
import { Restaurant } from "../models/restaurant.model";

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body
    const file = req.file
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image is required"
      })
    }

    const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File)
    const menu = await Menu.create({
      name,
      description,
      price,
      imageUrl
    })
    const restaurant = await Restaurant.findOne({ user: req.id })
    if (restaurant) {
      (restaurant.menus as mongoose.Types.ObjectId[]).push(menu._id)

    }
    await restaurant?.save()

    return res.status(201).json({
      success: true,
      message: "Menu addes successfully!"
    })
  } catch (error) {
    return res.status(200).json({ message: "Internal server error!" })
  }
}

export const editMenuItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description, price } = req.body
    const file = req.file


    const updatedMenu = await Menu.findById(id)
    if (!updatedMenu) {
      return res.status(404).json({
        success: false,
        message: "Menu not found!"
      })
    }

    if(name) updatedMenu.name = name
    if(description) updatedMenu.description = description
    if(price) updatedMenu.price = price

    if (file) {
      const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);
            updatedMenu.imageUrl = imageUrl;
    }

    await updatedMenu.save()

    return res.status(200).json({
      success: true,
      message: "Menu Item updated successfully!",
      updatedMenu
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error!" })

  }
}