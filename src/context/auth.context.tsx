import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useMemo, useEffect, useState } from "react";
import { useAuth } from "src/hooks/useAuth";
import { useRouter } from "next/router";
import { auth } from 'src/firebase';
interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: "",
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const { error, isLoading, logout, signIn, signUp, user, setUser ,setIsLoading} = useAuth();
  const router = useRouter();

  const value = useMemo(
    () => ({
      user,
      isLoading,
      logout,
      signIn,
      error,
      signUp,
    }),

    // eslint-disable-next-line
    [user, isLoading, error]
  );

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false)
          setUser(user);
        } else {
          setUser(null)
          setIsLoading(true)
          router.push("/auth");
        }
        setInitialLoader(false);
        setIsLoading(false)
      }),
    //eslint-disable-next-line
    []
  );

  return (
    <AuthContext.Provider value={value}>
      {!initialLoader ? children : <p className=" flex justify-center items-center h-[100vh]  text-red-500" >Loading.....</p>}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
