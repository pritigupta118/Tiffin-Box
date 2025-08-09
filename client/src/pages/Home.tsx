
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { CheckCircle, Clock, MapPin, Search, Smartphone, Star, Users } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState<string>("")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSearchText(e.target.value)
  }
  return (
 <div className="">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 lg:py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Headings */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🍽️ Campus Food Delivery
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">

                Authentic
               <PointerHighlight
        rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-orange-500"
      >
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Homestyle</span>

      </PointerHighlight>
                Meals Delivered
              </h1>
              <p className="text-sm md:text-xl text-gray-500 mb-8 leading-relaxed">
                Experience the comfort of home-cooked Indian meals delivered fresh to your hostel, quarters, or college building. Perfect for students, faculty, and staff craving authentic flavors.
              </p>
              <div className="relative w-full">
                <Input
                  name="search"
                  value={searchText}
                  onChange={onChangeHandler}
                  placeholder="Search for hotels, item..."
                  className="outline-none focus-visible:ring-transparent p-5 text-sm md:text-base bg-white rounded-full"
                />
                <Button
                  size="icon"
                  onClick={() => navigate(`/search/${searchText}`)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 px-2 py-2 h-6 w-6 rounded-full md:h-10 md:w-10"
                >
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
              
            </div>
            
            {/* Right Side - Indian Veg Thali Image */}
            <div className="relative">
             
              <div className="relative z-10 bg-white rounded-sm md:rounded-3xl shadow-2xl p-2 md:p-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/hero-img.png" 
                  alt="Delicious Indian Veg Thali" 
                  className="w-full h-80 object-cover rounded-sm md:rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Fresh & Hot!
                </div>
              </div>
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

        <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-lg font-bold text-gray-800 mb-4">
              Why Choose Tiffin Box?
            </h2>
            <p className="md:text-xl text-sm text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of college communities and deliver exactly what you crave.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:bg-emerald-50 p-6 rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm md:text-base">Get your fresh tiffin delivered in 30-45 minutes to your hostel or college building.</p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-6 rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-2">Campus Coverage</h3>
              <p className="text-gray-600 text-sm md:text-base">Complete coverage of hostels, quarters, and college buildings. We know every corner!</p>
            </div>
            
            <div className="text-center group hover:bg-amber-50 p-6 rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 md:text-xl text-lg">Student Friendly</h3>
              <p className="text-gray-600 text-sm md:text-base">Special pricing for students with bulk order discounts and loyalty rewards.</p>
            </div>
            
            <div className="text-center group hover:bg-indigo-50 p-6 rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 md:text-xl text-lg">Quality Food</h3>
              <p className="text-gray-600 text-sm md:text-base">Partnered with top-rated nearby restaurants serving authentic, hygienic homestyle meals.</p>
            </div>
          </div>
        </div>
      </section>

       <section id="how-it-works" className="py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
          <div className="text-center md:mb-16 mb-8">
            <h2 className="md:text-4xl text-lg font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white md:text-2xl text-lg font-bold shadow-lg">
                1
              </div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-800 mb-4">Browse & Order</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Browse through our curated menu from nearby restaurants. Select your favorite tiffin and customize as needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white md:text-2xl text-lg font-bold shadow-lg">
                2
              </div>
              <h3 className="md:text-xl text-ellipsis font-semibold text-gray-800 mb-4">Track Preparation</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Watch your meal being prepared in real-time. Get notifications at every step from kitchen to your door.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white md:text-2xl text-lg font-bold shadow-lg">
                3
              </div>
              <h3 className="md:text-xl text-ellipsis  font-semibold text-gray-800 mb-4">Enjoy Your Meal</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Receive your fresh, hot tiffin right at your hostel room or office. Enjoy authentic homestyle food!
              </p>
            </div>
          </div>
        </div>
      </section>
      
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-1.5 sm:px-6 lg:px-8">
          <div className="text-center md:mb-16 mb-8">
            <h2 className="md:text-4xl text-lg font-bold text-gray-800 mb-4">
              Perfect for Everyone
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 md:p-8 p-5 rounded-3xl border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                <Users className="md:w-6 w-4 md:h-6 h-4 text-white" />
              </div>
              <h3 className="md:text-2xl text-base font-bold text-gray-800 mb-4">For Students</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Budget-friendly meal options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Late night delivery available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Group ordering discounts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-8 p-5 rounded-3xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Smartphone className="md:w-6 w-4 md:h-6 h-4 text-white"/>
              </div>
              <h3 className="md:text-2xl text-base font-bold text-gray-800 mb-4">For Staff</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Quick lunch break solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Office delivery service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Bulk orders for meetings</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 md:p-8 p-5 rounded-3xl border border-amber-200">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <Star className="md:w-6 w-4 md:h-6 h-4 text-white"/>
              </div>
              <h3 className="md:text-2xl text-base font-bold text-gray-800 mb-4">For Professors</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">Premium quality meals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700">Quarters delivery service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="md:w-5 w-4 h-4 md:h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">Customizable meal plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                 <img src="/logo-dark mode.png"/>
                </div>
                <span className="text-2xl font-bold">Tiffin Box</span>
              </div>
              <p className="text-gray-400 mb-4">
                Bringing delicious, homestyle Indian meals to college communities across the nation.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tiffin Box. All rights reserved. Made with ❤️ for college communities.</p>
          </div>
        </div>
      </footer>

</div>
  )
}

export default Home
