import Header from "../components/Header";
import Navbar from "../components/Navbar";
import InDevelopment from "../components/ErrorCollection/InDevelopment";
import Footer from "../components/FooterCollection/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <InDevelopment />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
