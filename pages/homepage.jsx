import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
