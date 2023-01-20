import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Desktop from "../components/Contact/Desktop";
import Mobile from "../components/Contact/Mobile_Contact";
import Footer from "../components/Footer";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLargeScreen] = useMediaQuery("(max-width: 480px)");
  const [display, setDisplay] = useState(false);
  useEffect(() => setDisplay(true), []);
  const ContactPage = !isLargeScreen ? Desktop : Mobile;
  if (!display) return null;
  return (
    <div>
      <Header />
      <Navbar color="light" />
      <ContactPage />
      <Footer />
    </div>
  );
}
