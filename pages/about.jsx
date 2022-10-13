import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Queen&lsquo;s Compsa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <About />
      <Navbar color="light" />
      <Footer />
    </div>
  );
}
