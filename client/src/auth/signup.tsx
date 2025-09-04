import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userSignupSchema, type SignupInputState } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

import { Link } from "react-router-dom";

export default function SignUp() {
 
  const [input, setInput] = useState<SignupInputState>({
    fullname: '',
    email: '',
    contact: '',
    password: ''
  });

  const {signup, loading} = useUserStore()

   const [errors, setErrors] = useState<Partial<SignupInputState>>({});

  

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
   const {name, value} = e.target
   setInput({...input, [name]: value});
  }

    const onSubmitHandler =  async(e:FormEvent) => {
        e.preventDefault();
        // form validation check start
        const result = userSignupSchema.safeParse(input);
       console.log(result);
        if (!result.success) {
          const fieldErrors = result.error.formErrors.fieldErrors
          setErrors(fieldErrors as Partial<SignupInputState>);
          return;
        }
     await signup(input)
      }
  

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form onSubmit={onSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-300">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Signup</h1>
            <h2>or already have an account? <Link to="/login" className="text-blue-500">login</Link></h2>
          </div>
          <div>
            <img src="/login_img.png" alt="login img" className="h-16 w-16" />
          </div>
        </div>
        <div className="mt-4">
          <div className="relative mt-4">
            <Input
              type="text"
              placeholder="FullName"
              name="fullname"
              onChange={onchangeHandler}
              className="w-full pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
              { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
          </div>
          <div className="relative mt-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onchangeHandler}
              className="w-full pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            { errors && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>
          <div className="relative mt-4">
            <Input
              type="contact"
              placeholder="Contact"
              name="contact"
              onChange={onchangeHandler}
              className="w-full pl-10 focus-visible:ring-1"
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
          </div>

          <div className="relative mt-4">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onchangeHandler}
              className="w-full pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            { errors && <span className="text-xs text-red-500">{errors.password}</span>}
          </div>
        </div>
        <div className="mt-6">
          {
            loading ? (
              <Button className="w-full bg-orange-500 text-white py-2 rounded cursor-not-allowed opacity-50" disabled>
                Please wait <Loader2 className="h-2 w-2 animate-spin" />
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
                Signup
              </Button>
            )
          }

        </div>
      </form>
    </div>
  )
}