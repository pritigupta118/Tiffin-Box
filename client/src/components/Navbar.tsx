import { HandPlatter, Home, LayoutDashboard,  Loader2, Menu, Moon, PackageCheck, ShoppingBag, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Link } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Separator } from "./ui/separator"


function Navbar() {
  const user = true
  const loading = false
  return (
    <div className="h-[58px] md:p-8 flex justify-between items-center ">
      <div className="mt-3 cursor-pointer">
        <Link to="/">
    <img src="/logo-light mode.png" alt="" className="w-28 h-28"/>
    </Link>
    </div>
   <ul className="hidden md:flex gap-6 items-center p-4 cursor-pointer">
    <li className="flex items-center gap-1 font-semibold hover:text-orange-500
    "><Home/>Home</li>
   <li className="flex flex-row items-center gap-1 font-semibold hover:text-orange-500"> <Link to="/order/status" className="flex items-center gap-1"><HandPlatter/>Order</Link></li>
    <DropdownMenu>
       <DropdownMenuTrigger asChild>
    <Button className="flex flex-row items-center gap-1 font-semibold"><Link to="/order/status" className="flex items-center gap-1"><LayoutDashboard />Dashboard</Link></Button>
    </DropdownMenuTrigger>
    
      <DropdownMenuContent className="w-56" align="start">
         <DropdownMenuGroup>
           <DropdownMenuItem>
            <Link to="/admin/restaurant" className="flex items-center gap-1">
            <UtensilsCrossed />
            Restaurant
            </Link>
          </DropdownMenuItem>
           <DropdownMenuItem>
             <Link to="/admin/menu" className="flex items-center gap-1">
            <SquareMenu />
              Menu
              </Link>
          </DropdownMenuItem>
           <DropdownMenuItem>
            <Link to="/admin/orders" className="flex items-center gap-1">
            <PackageCheck />
           Restaurant Orders
           </Link>
          </DropdownMenuItem>
         </DropdownMenuGroup>
      </DropdownMenuContent>
</DropdownMenu>

    <li className="hover:text-orange-500"><Link to="/cart"><ShoppingCart /></Link> </li>
    <li className="hover:text-orange-500"><Moon/></li>
    {
      user ? (
        <>
      <li className="cursor-pointer">
        <Link to="/profile">
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</Link>
      </li>
      <li className="cursor-pointer">
  <Button variant={"destructive"}>Logout</Button>
      </li>
</>
      ) : (
<li>
  <Link to="/login">
    <Button className="bg-orange-500 cursor-pointer">Login</Button>
  </Link>
</li>
      )
    }
   </ul>

    {/* mobile view starts here  */}
   <div  className="flex md:hidden p-2">
 <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="rounded-full bg-gray-200 text-black hover:bg-gray-200"
          variant="outline"
        >
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <Link to="/"><SheetTitle className="text-orange-500">Tiffin Box</SheetTitle></Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <User />
            <span>Profile</span>
          </Link>
          <Link
            to="/order/status"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <HandPlatter />
            <span>Order</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <ShoppingCart />
            <span>Cart (0)</span>
          </Link>
          {user && (
            <>
              <Link
                to="/admin/menu"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <SquareMenu />
                <span>Menu</span>
              </Link>
              <Link
                to="/admin/restaurant"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <UtensilsCrossed />
                <span>Restaurant</span>
              </Link>
              <Link
                to="/admin/orders"
                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
              >
                <PackageCheck />
                <span>Restaurant Orders</span>
              </Link>
            </>
          )}
        </SheetDescription>
        <SheetFooter className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <AvatarImage src="/" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-bold">Priti Gupta</h1>
          </div>
          <SheetClose asChild>
            {loading ? (
              <Button className="bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
               
                className="bg-orange-400 hover:bg-orange-500"
              >
                Logout
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    </div>
    </div>
  )
}

export default Navbar