import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { SWRConfig } from "swr";
import axiosClient from "@/api-client/axios-client";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: async (url) => await axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <main className={roboto.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </main>
    </SWRConfig>
  );
}
