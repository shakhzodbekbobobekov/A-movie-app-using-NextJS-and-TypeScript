import AuthContextProvider from "src/context/auth.context";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  <AuthContextProvider>
    return <Component {...pageProps} />;
  </AuthContextProvider>;
}

