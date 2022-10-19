import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EventPage from "../components/Events/EventPage";
import Footer from "../components/Footer";

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
