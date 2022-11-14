import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="fixed w-screen h-[53px] sm:h-[70px]"></div>
      <Header />
      <Resources />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
