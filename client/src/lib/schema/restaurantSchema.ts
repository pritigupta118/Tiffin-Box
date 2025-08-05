import {z} from "zod"

export const restaurantFormSchema = z.object({
    restaurantName: z.string().nonempty("Restaurant name is required"),
     address: z.string().nonempty("address is required"),   
     deliveryTime: z.number().min(0,"Delivery time can not be negetive"),
     cuisines: z.array(z.string()),
     imageFile: z.instanceof(File).optional().refine((file)=>file?.size !== 0, {message:"Image file is required"})
})

export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>