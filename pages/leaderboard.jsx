import Head from "next/head";
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Queen&lsquo;s Compsa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Leaderboard />
      <Navbar color="dark" />
      <Footer />
    </div>
  );
}
