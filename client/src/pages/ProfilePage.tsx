import Navbar from "@/components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Home, Loader2, Mail, Phone, Plus } from "lucide-react"
import { useRef, useState } from "react"


const ProfilePage = () => {
  const imgRef = useRef<HTMLInputElement | null>(null)
  const [selectedProfilePicture, setSelectedProfilePicture] = useState<string>("/user.jpg")
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    profilePicture: ""
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setSelectedProfilePicture(result)
        setProfileData((prev) => ({
          ...prev,
          profilePicture: result

        }))
      }
      reader.readAsDataURL(file);
    }

  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }

  const profileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Updated data: ", profileData);

  }
  return (
    <div>
 
      <form onSubmit={profileUpdate} className="max-w-7xl px-8 py-10 mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Avatar className="relative w-[80px] h-[80px]">
              <AvatarImage src={selectedProfilePicture} />
              <AvatarFallback>Cn</AvatarFallback>
              <input ref={imgRef} type="file" accept="image/*" onChange={fileChangeHandler} />
              <div onClick={() => imgRef.current?.click()} className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer">
                <Plus className="text-white" />
              </div>
            </Avatar>

          </div>

          <input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="border-none outline-none focus-visible:ring-transparent rounded-sm p-2 font-bold text-2xl" />

        </div>
        <div className="grid md:grid-cols-3 gap-4 my-20">
          <div className="relative">
            <Mail className="absolute inset-y-2 left-2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              placeholder="enter your email" className="border-none outline-none focus-visible:ring-transparent w-full bg-gray-200 pl-10 p-2 rounded-sm" />
          </div>

          <div className="relative">
            <Phone className="absolute inset-y-2 left-2 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={changeHandler}
              placeholder="enter your number" className="border-none outline-none focus-visible:ring-transparent w-full bg-gray-200 p-2 pl-10 rounded-sm" />
          </div>

          <div className="relative">
            <Home className="absolute inset-y-2 left-2 text-gray-400" />
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              placeholder="enter your address" className="border-none outline-none focus-visible:ring-transparent w-full bg-gray-200 p-2 pl-10 rounded-sm" />
          </div>

        </div>
        <div className="text-center w-full">
          {isLoading ? (
            <Button disabled className="bg-orange-500 hover:bg-orange-400 w-full">
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="bg-orange-500 w-full hover:bg-orange-400">Update</Button>
          )}

        </div>
      </form>
    </div>
  )
}

export default ProfilePage
