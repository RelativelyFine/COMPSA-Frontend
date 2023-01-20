import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Academics from "../components/Academics/academics";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar color="light" />
      <Academics />
    </div>
  );
}
