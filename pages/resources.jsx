import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ResourcePage from "../components/Resources/ResourcePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <ResourcePage />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
