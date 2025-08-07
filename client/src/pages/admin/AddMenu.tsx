import React, { useState, type FormEvent } from 'react'


import { Loader2, Plus, Star } from 'lucide-react';

import { menuSchema, type MenuFormSchema } from '@/lib/schema/menuSchema';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import EditMenu from '@/components/EditMenu';


type Props = {}

function AddMenu({}: Props) {
    const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    rating: "",
    image: undefined,
  });
  const [open, setOpen] = useState<boolean>(false);
  const loading = false
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [error, setError] = useState<Partial<MenuFormSchema>>({});
   const menus = [
    {
      name: "Biriyani",
      description: "lorem kjrfhgvjkfhjk ajkhfkljhsajk",
      price: 60,
      rating: "4",
      image: "/biriyani.avif"
    },
    {
      name: "Biriyani",
      description: "lorem kjrfhgvjkfhjk ajkhfkljhsajk",
      price: 60,
      rating: "4",
      image: "/biriyani.avif"
    },
   ]
    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    const result = menuSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      return;
    }
    console.log(input);
    
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-1 md:p-4">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-md md:text-2xl">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange-500 hover:bg-orange-400 hidden md:flex">
              <Plus className="mr-2" />
             Add Menus
            </Button>
            <Button size="icon" className='bg-orange-400 hover:bg-orange-500 md:hidden'><Plus/></Button>

          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter menu name"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.name}
                  </span>
                )}
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter menu description"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.description}
                  </span>
                )}
              </div>
              <div>
                <Label>Price in (Rupees)</Label>
                <Input
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter menu price"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.price}
                  </span>
                )}
              </div>
              <div>
                <Label>Rating</Label>
                <Input
                  type="string"
                  name="rating"
                  value={input.rating}
                  onChange={changeEventHandler}
                  placeholder="rate your dish"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.rating}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.image?.name}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange-400 hover:bg-orange-500">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {menus.map((menu: any, idx: number) => (
        <div key={idx} className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
           
            <img
              src={menu.image}
              alt=""
              className="md:h-24 md:w-24 w-full h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm tex-gray-600 mt-1">{menu.description}</p>
              <h2 className="text-md font-semibold mt-2">
                Price: <span className="text-[#D19254]">80</span>
              </h2>
              <h2 className="text-md font-semibold mt-2 flex gap-1 text-green-600">
                4 <Star className='fill-green-600 w-4'/>
              </h2>
            </div>
           
            <Button                    
              onClick={() => {
                setSelectedMenu(menu);
                setEditOpen(true);
              }}
              size={"sm"}
              className="bg-orange-400 hover:bg-orange-500 mt-2"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  )
}

export default AddMenu