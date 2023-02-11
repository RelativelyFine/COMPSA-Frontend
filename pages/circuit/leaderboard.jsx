import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Leaderboard from "../../components/Circuit/Circuitboard/Leaderboard";
import Footer from "../../components/FooterCollection/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Leaderboard />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
