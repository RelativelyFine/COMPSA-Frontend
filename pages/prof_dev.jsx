import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Prof_dev from "../components/Prof_dev/P_d";
import Footer from "../components/Footer";


export default function Home() {
    return (
      <div>
        <Header />
        
        <Prof_dev />
        <Navbar color="light" />
        <Footer />
      </div>
    );
  }


