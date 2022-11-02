import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Home />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
