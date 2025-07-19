import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./auth/signup"
import Login from "./auth/login"
import Home from "./pages/Home"

const appRouter = createBrowserRouter([
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
