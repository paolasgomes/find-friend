import { api } from "@/services/api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createContext, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { toast } from "react-toastify";

interface AuthProps {
  isAuthenticated: boolean;
  signIn: (user: User) => Promise<void>;
}

export interface User {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthProps);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = false;

  const Router = useRouter();

  const signIn = async ({ email, password }: User) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      const { token } = response.data;

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 1, // 1 hora
      });
      //1° parametro o contexto da requisição aonde está sendo executado, neste caso, não está executando nada do lado do browser
      //2° nome do cookie
      // 3° o cookie

      Router.push("/usuario");
    } catch (error) {
      toast.error("Email e/ou senha inválidos", {
        icon: <CiCircleAlert color="red" size={32} />,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>{children}</AuthContext.Provider>
  );
}
