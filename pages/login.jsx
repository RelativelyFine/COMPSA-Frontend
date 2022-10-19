import Head from "next/head";
import Navbar from "../components/Navbar";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Queen&lsquo;s Compsa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
