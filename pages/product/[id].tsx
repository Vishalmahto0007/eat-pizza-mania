import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import menuData from "@/public/data/menu.json";
// import styles from "./Product.module.css";
import { PizzaItem } from "@/types";
import Navbar from "@/components/Navbar/Navbar";
import CustomizePizza from "@/components/CustomizePizza/CustomizePizza";
import Footer from "@/components/Footer/Footer";

const Product = () => {
  return (
    <>
      <Navbar />
      <CustomizePizza />
      <Footer />
    </>
  );
};

export default Product;
