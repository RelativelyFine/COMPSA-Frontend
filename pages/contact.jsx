import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Desktop from "../components/Contact/Desktop";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar color="light"/>
      <Desktop />
      <Footer />
    </div>
  );
}
