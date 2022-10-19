import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ContactPage from "../components/Contact/ContactPage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <ContactPage />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
