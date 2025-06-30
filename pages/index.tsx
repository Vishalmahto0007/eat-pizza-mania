import { Geist, Geist_Mono } from "next/font/google";
import Banner from "../components/Banner/Banner";
import Info from "@/components/Info/Info";
import ClientBanner from "../components/ClientBanner/ClientBanner";
import Pizza from "../components/PizzaCard/PizzaCard";
import Contact from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Info />
      <ClientBanner />
      <Pizza />
      <Contact />
    </>
  );
}
