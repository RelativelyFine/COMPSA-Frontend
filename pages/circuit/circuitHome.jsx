import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Main from "../../components/Circuit/CircuitHomepage/CircuitMain";
import Footer from "../../components/FooterCollection/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
