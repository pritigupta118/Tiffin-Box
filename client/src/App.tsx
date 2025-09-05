import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import SignUp from "./auth/signup"
import Login from "./auth/login"
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchPage"
import MainLayout from "./layout/MainLayout"
import RestaurantDescription from "./components/RestaurantDescription"
import Cart from "./pages/Cart"
import AdminRestaurant from "./pages/admin/AdminRestaurant"
import AdminOrders from "./pages/admin/AdminOrders"
import AddMenu from "./pages/admin/AddMenu"
import Success from "./components/Success"
import { useUserStore } from "./store/useUserStore"
import { useEffect } from "react"


const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null || user?.role !== "admin") {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <>
      {children}
    </>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/search/:id",
        element: <SearchPage />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDescription />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/admin/restaurant",
        element: (<AdminProtectedRoute><AdminRestaurant /></AdminProtectedRoute>)
      },
      {
        path: "/admin/menu",
        element: (<AdminProtectedRoute><AddMenu /></AdminProtectedRoute>)
      },
      {
        path: "/admin/orders",
        element: <AdminProtectedRoute><AdminOrders /></AdminProtectedRoute>
      },
      {
        path: "/order/status",
        element: <Success />,
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
