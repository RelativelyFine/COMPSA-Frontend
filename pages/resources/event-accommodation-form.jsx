import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSdlizszGiuo_5nO0khWAoXek9GDsspmPpRwPhI7aiB5a1abDw/viewform "
    );
  }, []);
}
