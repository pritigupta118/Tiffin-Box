import React, { useState, type Dispatch, type SetStateAction, type FormEvent } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'

const CheckoutConfirmationPage = ({open, setOpen}:{open:boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: ""
  })
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setInput({...input, [name]:value})
  }

  const checkoutHandler = (e:FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
    console.log(input)
  }
  return (
   <Dialog open={open} onOpenChange={setOpen}>
<DialogContent>
    <DialogHeader>
            <DialogTitle className='text-center text-lg font-medium'>Review Your Order</DialogTitle>
            <DialogDescription className='text-xs text-center'>
              Please review your order details below. Confirm everything is correct before proceeding to payment.
            </DialogDescription>
          </DialogHeader>
      
            <form onSubmit={checkoutHandler} className='md:grid grid-cols-2 gap-2 space-y-1'>
              <div>
                <Label className='text-gray-600'>FullName</Label>
                <Input
                type='text'
                name="name"
                value={input.name}
                onChange={changeHandler}
                />
              </div>
              <div>
                <Label className='text-gray-600'>Email</Label>
                <Input
                type='email'
                name="email"
                value={input.email}
                onChange={changeHandler}
                />
              </div>
              <div>
                <Label className='text-gray-600'>Contact</Label>
                <Input
                type='text'
                name="contact"
                value={input.contact}
                onChange={changeHandler}
                />
              </div>
              <div>
                <Label className='text-gray-600'>Address</Label>
                <Input
                type='text'
                name="address"
                value={input.address}
                onChange={changeHandler}
                />
              </div>
              <div >
                <Button className='mt-3 w-full bg-orange-500 hover:bg-orange-400  '>Continue to Payment</Button>
              </div>
            </form>
          
</DialogContent>
   </Dialog>
  )
}

export default CheckoutConfirmationPage
