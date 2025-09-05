import {Request, Response} from "express"
import { User } from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import uploadImageOnCloudinary from "../utils/imageUpload";

export const signup = async (req: Request, res: Response) => {
  try {
    const {fullName, email,contact,password,role} = req.body

    let user = await User.findOne({email})
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user already exist with this email"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    user = await User.create({
      fullName,
      email,
      contact,
      password: hashedPassword,
      role
    })

    const userwithoutPassword = await User.findOne({email}).select("-password")

    const jwtToken = jwt.sign(
      {
        _id: user._id,
        email: user.email
      },
      process.env.JWT_KEY!,
      {
        expiresIn: '1d'
      }
    )

    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60* 60 * 24),
      httpOnly: true,
      sameSite: "none",
      secure: true
    })

    return res.status(201).json({
      success: true,
      message: "account created successfully",
      user: userwithoutPassword
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error"})
    
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password, role} = req.body
    const existedUser = await User.findOne({email})
    if (!existedUser) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, existedUser.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password"
      })
    }

        if (role !== existedUser.role) {
          return res.status(400).json({
              message: "Account doesn't exist with current role.",
              success: false
          })
      };

    const jwtToken = jwt.sign(
      {
        _id: existedUser._id,
        email: existedUser.email
      },
      process.env.JWT_KEY!,
      {
        expiresIn: "1d"
      }
    )
     const userWithoutPassword = await User.findOne({ email }).select("-password");
    res.cookie("token", jwtToken,{
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "none",
      secure: true
    })


    return res.status(200).json({
      success: true,
      message: `Wellcome back ${existedUser.fullName}!`,
      userWithoutPassword
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error"})
    
  }
}

export const logout = async (req: Request, res: Response) => {
  try {
    return res.clearCookie("token").status(200).json({
      success: true,
      message: "Logged out successsfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error"})
    
  }
}

export const updateProfile = async (req: Request, res: Response) => {
try {
    const userId = req.id
    const {fullName, contact, address} = req.body
    const file = req.file

    const existedUser =  await User.findById(userId)

    if (!existedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!"
      })
    }

    if(fullName) existedUser.fullName = fullName
    if(contact) existedUser.contact = contact
    if(address) existedUser.address = address

    if (file) {
      const profilePicture = await uploadImageOnCloudinary(file as Express.Multer.File);
            existedUser.profilePicture = profilePicture
    }
   await existedUser.save()
    return res.status(200).json({
      success: true,
      message: "Profile updated successsfully",
      existedUser
    })
} catch (error) {
  console.log(error);
  return res.status(500).json({message: "Internal server error"})
  
}
}

