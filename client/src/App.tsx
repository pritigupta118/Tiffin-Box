import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./auth/signup"
import Login from "./auth/login"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div> // Placeholder for the home page, can
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
