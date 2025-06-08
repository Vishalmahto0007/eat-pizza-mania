import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../components/Banner/Banner";
import Info from "@/components/Info/Info";
import ClientBanner from "../components/ClientBanner/ClientBanner";
import Pizza from "../components/PizzaCard/PizzaCard";
import Contact from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
