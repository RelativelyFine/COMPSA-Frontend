import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer";

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
