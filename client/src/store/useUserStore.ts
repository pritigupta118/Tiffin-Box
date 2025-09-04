import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import axios from "axios"
import type { SignupInputState } from "@/schema/userSchema";
import { toast } from "sonner";

type User = {
  fullname:string;
  email:string;
  contact:string;
  address:string;
  profilePicture:string;
  role:string
}
type UserState = {
  user: User|null;
  loading: boolean;
  signup: (input:SignupInputState) => Promise<void>
};
const API_END_POINT = "http://localhost:8000/user"
axios.defaults.withCredentials = true

export const useUserStore = create<UserState>()(persist((set) => ({
  user: null,
  loading: false,

  signup: async (input: SignupInputState) => {
    try {
      set({ loading: true });
      const response = await axios.post(`${API_END_POINT}/signup`, input, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.data.success) {
        console.log(response.data);
        toast.success(response.data.message)
        set({ loading: false, user: response.data.user })
      }
    } catch (error) {
      set({ loading: false })
    }
  }
}),
  {
    name: "user-name",
    storage: createJSONStorage(() => localStorage)
  }
));