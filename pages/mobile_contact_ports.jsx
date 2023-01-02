import Port from "../components/Contact/Mobile_Ports"
import Navbar from "../components/Navbar"
import Footer from "../components/Contact/Mobile_Footer"

export default function Home() {
  return (
    <div>
        <Navbar color="light" />
        <Port />
        <Footer />
    </div>
  );
}