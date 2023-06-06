import { AuthProvider } from "@/contexts/Auth";
import { defaultTheme } from "@/styles/themes/default/default";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </ThemeProvider>
  );
}
