import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Signup from "../components/Circuit/SignUp/Signup";
import Footer from "../components/FooterCollection/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Signup />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
