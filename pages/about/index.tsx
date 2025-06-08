import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Clients from "@/components/ClientBanner/ClientBanner";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Info/Info";

const About = () => {
  return (
    <>
      <Navbar />
      <Info />
      <Clients />
      <Footer />
    </>
  );
};

export default About;
