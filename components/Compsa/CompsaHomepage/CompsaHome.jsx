import Header from "../../Header";
import InstagramCarousel from "./InstagramCarousel";
import SplashScreen from "./SplashScreen";
import UpcomingEvents from "./UpcomingEvents";
import WhatsNew from "./WhatsNew";

export default function Home() {
  return (
    <div>
      <Header />
      <SplashScreen />
      <UpcomingEvents />
      <WhatsNew />
      <InstagramCarousel />
    </div>
  );
}
