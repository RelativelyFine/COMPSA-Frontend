import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("https://www.linkedin.com/company/queenscompsa/");
  }, []);
}
