import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
