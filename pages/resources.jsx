import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Resources />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
