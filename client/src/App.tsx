import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./auth/signup"
import Login from "./auth/login"
import Navbar from "./components/Navbar"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <div className=" h-screen"></div> // Placeholder for the home page, can
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
