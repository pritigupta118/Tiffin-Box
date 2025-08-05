import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { restaurantFormSchema, type RestaurantFormSchema } from '@/lib/schema/restaurantSchema';
import { Loader2 } from 'lucide-react';
import React, { useState, type FormEvent } from 'react'



const AdminRestaurant = () => {
  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({})
  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    address: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  })
  const changeEventHandler =(e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value,type} = e.target
    setInput({...input, [name]: type === 'number' ? Number(value) : value})
  }

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const result = restaurantFormSchema.safeParse(input)
  if(!result.success){
    const fieldErrors = result.error.formErrors.fieldErrors
    setErrors(fieldErrors as Partial<RestaurantFormSchema>)
  }
  console.log(input);
  
  }
  const restaurant = false
  const loading = false
return (
    <div className="max-w-6xl mx-auto p-2 md:p-8 my-10">
      <div>
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-5">Add Restaurants</h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name  */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  value={input.restaurantName}
                  onChange={changeEventHandler}
                  placeholder="Enter your restaurant name"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={changeEventHandler}
                  placeholder="Enter your city name"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.address}
                  </span>
                )}
              </div>
             
              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  placeholder="Enter your delivery time"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="e.g. Momos, Biryani"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Restaurant Banner</Label>
                <Input
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                  type="file"
                  accept="image/*"
                  name="imageFile"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.imageFile?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 ">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange w-full">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange-500 hover:bg-orange-400 w-full">
                  {restaurant
                    ? "Update Your Restaurant"
                    : "Add Your Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminRestaurant