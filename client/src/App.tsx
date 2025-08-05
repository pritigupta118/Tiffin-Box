import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./auth/signup"
import Login from "./auth/login"
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchPage"
import MainLayout from "./layout/MainLayout"
import RestaurantDescription from "./components/RestaurantDescription"
import Cart from "./pages/Cart"
import AdminRestaurant from "./pages/AdminRestaurant"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout/>
    ),
    children: [
{
    path: "/",
    element: <Home/> 
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
    {
    path: "/search/:id",
    element: <SearchPage/>
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantDescription/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/admin/restaurant",
    element: <AdminRestaurant/>
  },
    ]
  }
  
])

function App() {
  return (
    <>
    
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
