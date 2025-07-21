import { Bike, Flower, MapPin, Star } from "lucide-react"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import MenuItems from "./MenuItems"

type MenuState = {
  itemName: string;
  price: string;
  rating: string;
  description: string;
  imgUrl: string;
}


const RestaurantDescription = () => {
  const menus: MenuState[] = [
    {
      itemName: "Veg Thali",
      price: "40",
      rating: "4",
      description: "rice, dal, chokha, chips, chatni, soyabin alu fulkobi alu",
      imgUrl: "/veg-thali.avif"
    },
    {
      itemName: "Veg Thali",
      price: "40",
      rating: "4",
      description: "rice, dal, chokha, chips, chatni, soyabin alu fulkobi alu",
      imgUrl: "/veg-thali.avif"
    },
    {
      itemName: "Veg Thali",
      price: "40",
      rating: "4",
      description: "rice, dal, chokha, chips, chatni, soyabin alu fulkobi alu",
      imgUrl: "/veg-thali.avif"
    },
    

  ]
  return (
    <div className="max-w-7xl mx-auto p-1 mt-3 md:p-8">
      <div className="flex items-center justify-center">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img src="/res1.jpg" alt="" className="object-cover w-full h-full rounded-lg shadow-lg" />
        </div>

      </div>
      <h1 className="text-lg md:text-2xl font-bold mt-4">Lovely Hotel & Restaurant</h1>
      <div className="w-full shadow-lg my-4 border-2 border-gray-200 rounded-lg p-2 md:p-3">
        <div className="flex items-center gap2">
          <p className="flex items-center text-green-600 gap-1"><Star className="fill-green-600 w-3 h-3 md:w-5 md:h-5" /><span className="text-black font-bold text-sm md:text-base">4.6(433 rating)</span> </p>
        </div>
        <div className="flex w-full flex-wrap gap-2 mt-4">
          <Badge className="bg-orange-500 hover:bg-orange-500">thali</Badge>
          <Badge className="bg-orange-500 hover:bg-orange-500">biriyani</Badge>
          <Badge className="bg-orange-500 hover:bg-orange-500">pizza</Badge>
          <Badge className="bg-orange-500 hover:bg-orange-500">rosogolla</Badge>

        </div>
        <div className="my-4">
          <div className="flex items-center my-2 gap-2 text-sm md:text-base"><MapPin className="w-4 h-4 text-gray-500"/><span className="font-bold ">Outlet</span> <span className=" text-gray-600">Jaguli</span></div>

          <div className="flex items-center my-2 gap-2"><Bike className="w-4 h-4 text-gray-500"/><span className="font-bold">30-35 mins</span></div>

        </div>
        <Separator/>
        <h2 className="font-semibold text-orange-500 p-2 text-sm md:text-base">Free delivery on orders above ₹199</h2>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-center my-4">
          <h1 className="flex gap-2 text-gray-500 font-semibold"><Flower/> M E N U <Flower/></h1>
        </div>
        <Separator/>
        {
          menus.map((menu)=>{
            return (
               <MenuItems itemName={menu.itemName} price={menu.price} rating={menu.rating} description={menu.description} imgUrl={menu.imgUrl}/>
            )
          })
        }
      
      
       </div>
    </div>
  )
}

export default RestaurantDescription
