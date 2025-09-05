import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import axios from "axios"
import type { LoginInputState, SignupInputState } from "@/schema/userSchema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const API_END_POINT = "http://localhost:8000/user"
axios.defaults.withCredentials = true

type User = {
  fullname: string;
  email: string;
  contact: string;
  address: string;
  profilePicture: string;
  role: string
}
type UserState = {
  user: User | null;
  loading: boolean;
  signup: (input: SignupInputState) => Promise<void>,
  login: (input: LoginInputState) => Promise<void>,
  logout: () => Promise<void>;
  updateProfile: (input: any) => Promise<void>;
};

export const useUserStore = create<UserState>()(persist((set) => ({
  user: null,
  loading: false,

  signup: async (input: SignupInputState) => {
    const navigate = useNavigate()
    try {
      set({ loading: true });
      const response = await axios.post(`${API_END_POINT}/signup`, input, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.data.success) {
        navigate("/")
        console.log(response.data);
        toast.success(response.data.message)
        set({ loading: false, user: response.data.user })
      }
    } catch (error) {
      set({ loading: false })
      console.log(error);

      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }

    }
  },

  login: async (input: LoginInputState) => {
    const navigate = useNavigate()
    try {
      set({ loading: true })
      const response = await axios.post(`${API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.data.success) {
        navigate("/")
        console.log("Successfully login! data: ", response.data);
        toast.success(response.data.message)
        set({ loading: false, user: response.data.userWithoutPassword })
      }
    } catch (error) {
      set({ loading: false })
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }

    }
  },

  logout: async () => {
    const navigate = useNavigate()
    try {
      set({ loading: true })
      const response = await axios.post(`${API_END_POINT}/logout`)
      if (response.data.success) {
        navigate("/")
        toast.success(response.data.message)
        set({ loading: false, user: null })
      }
    } catch (error) {
      set({ loading: false })
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  },

  updateProfile: async (input: any) => {
    try {
      const response = await axios.put(`${API_END_POINT}/update/profile`, input, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (response.data.success) {
        toast.success(response.data.message)
        set({ user: response.data.user })
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }
}),

  {
    name: "user-name",
    storage: createJSONStorage(() => localStorage)
  }
));