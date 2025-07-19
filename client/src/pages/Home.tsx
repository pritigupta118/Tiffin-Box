import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="max-w-7xl  p-8 flex flex-col md:flex-row items-center justify-between mt-10 mx-auto md:gap-4">
     <div className="flex flex-col items-start justify-between gap-4 md:w-1/2">
   
      <h1 className="font-bold text-2xl md:text-5xl w-full">Home-Style Meals, Just a Click Away</h1>
      <p className="text-sm text-gray-400">Tiffin Box brings fresh, affordable meals from nearby restaurants to busy professionals. No cooking, no stress—just delicious food delivered to your office.</p>
     
      <div className="relative w-full">
      <Input
      placeholder="search restaurent"
      className=""
      />
      <Button className="absolute -inset-y-0 right-0 bg-amber-600">Search</Button>
      </div>
     </div>
     <div >
      <img src="hero section.png" alt="hero-img"/>
     </div>
      </div>
   <Footer/>
    </div>
  )
}

export default Home
