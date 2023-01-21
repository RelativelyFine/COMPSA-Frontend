import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Signup from "../../components/Circuit/SignUp/Signup";
import Footer from "../../components/FooterCollection/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    console.log(localStorage.getItem("foo"));
    if (!localStorage.getItem("foo")) {
      localStorage.setItem("foo", "no reload");
      router.reload();
    } else {
      localStorage.removeItem("foo");
    }
  }
  return (
    <div>
      <Header />
      <Signup />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
