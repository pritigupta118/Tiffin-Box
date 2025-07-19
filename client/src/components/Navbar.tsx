import { Home, LogIn, LogOut, Menu, Moon, ShoppingBag, ShoppingCart, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Link } from "react-router-dom"


function Navbar() {
  const user = false
  return (
    <div className="h-[58px] md:p-8 flex justify-between items-center md:shadow-sm">
      <div className="mt-3">
        <Link to="/">
    <img src="logo-light mode.png" alt="" className="w-28 h-28"/>
    </Link>
    </div>
   <ul className="hidden md:flex gap-4 items-center p-4 ">
    <li>Home</li>
    <li>Order</li>
    <li> <ShoppingCart /></li>
    <li><Moon/></li>
    {
      user ? (
        <>
      <li>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </li>
      <li>
  <Button variant={"destructive"}>Logout</Button>
      </li>
</>
      ) : (
<li>
  <Link to="/login">
    <Button className="bg-orange-500">Login</Button>
  </Link>
</li>
      )
    }
   </ul>
   <div  className="flex md:hidden p-2">
    {
      user ? (
       <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        
        <div className="grid flex-1 auto-rows-min gap-6 p-4">
          <div className="grid gap-3">
            <Button><Home/>Home</Button>
          </div>
          <div className="grid gap-3">
          <Button><ShoppingBag />Orders</Button>
          </div>
          <div className="grid gap-3">
          <Button><ShoppingCart/>Add to cart</Button>
          </div>
          <div className="grid gap-3">
          <Button><User/>Profile</Button>
          </div>
          <div className="grid gap-3">
          <Button variant={"destructive"}><LogOut/>Logout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
      ) : (
        
      <Link to="/login">
        <Button size={"icon"} className="mt-2 bg-orange-500"><LogIn/></Button>
      </Link>
     
      )
    }

    </div>
    </div>
  )
}

export default Navbar