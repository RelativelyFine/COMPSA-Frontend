import Port from "../components/Contact/Mobile_Ports"
import Navbar from "../components/Navbar"
import Footer from "../components/Contact/Mobile_Footer"
import Form from "../components/Contact/Mobile_Form"

export default function Home() {
  return (
    <div>
        <Navbar color="light" />
        <Form />
        <Footer />
    </div>
  );
}