import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import EventPage from "../../components/Circuit/Events/EventPage";
import Footer from "../../components/FooterCollection/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <EventPage />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
