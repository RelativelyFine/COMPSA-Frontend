import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Queen&lsquo;s Compsa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Home />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
