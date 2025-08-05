import CheckoutConfirmationPage from "@/components/CheckoutConfirmationPage"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const Cart = () =>{
  const [open, setOpen] = useState<boolean>(false)

  
  return (
    <div className="max-w-7xl md:p-8 p-4 mx-auto">
      <div className="flex justify-end items-center">
        <Button variant={"link"}>Clear All</Button>
      </div>
     <Table>
       <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Items</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="text-right">Remove</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell><Avatar>
            <AvatarImage src="/biriyani.avif"/>
            </Avatar></TableCell>
            <TableCell>Biriyani</TableCell>
            <TableCell>100</TableCell>
            <TableCell>
              <div className="flex items-center gap-4 text-green-600">
               <div><Minus className="w-4 h-4"/></div>
               <div><h1 className="text-lg font-semibold">1</h1>
               </div>
               <div><Plus className="w-4 h-4"/></div>

              </div>
              </TableCell>
            <TableCell>100</TableCell>
            <TableCell className="text-right"><Button>Remove</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">100</TableCell>
        </TableRow>
      </TableBody>
     </Table>
     <div className="flex justify-end my-6"><Button
     onClick={()=> setOpen(true)} 
     className="bg-orange-500 hover:bg-orange-400">Proceed to Checkout</Button></div>
     <CheckoutConfirmationPage open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Cart
