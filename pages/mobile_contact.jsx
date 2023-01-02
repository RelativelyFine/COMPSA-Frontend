import Port from "../components/Contact/Mobile_Ports"
import Navbar from "../components/Navbar"
import Footer from "../components/Contact/Mobile_Footer"
import Body from "../components/Contact/Mobile_Contact"

export default function Home() {
  return (
    <div>
        <Navbar color="light" />
        <Body />
        <Footer />
    </div>
  );
}