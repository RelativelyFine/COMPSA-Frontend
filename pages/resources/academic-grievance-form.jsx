import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSf1t6jvP1Hn_jaPuri5A6fkmXqMc4Qi3f_lm9wn3YEF_omzIg/viewform"
    );
  }, []);
}
