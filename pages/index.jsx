import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Home from "../components/Compsa/CompsaHomepage/CompsaHome";
import Footer from "../components/FooterCollection/Footer";

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
