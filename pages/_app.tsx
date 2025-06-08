import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Contact from "../components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css"; // global styles
import { Provider } from "react-redux";
import { store } from "@/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
