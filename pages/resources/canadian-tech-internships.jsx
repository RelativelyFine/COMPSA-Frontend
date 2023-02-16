import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://github.com/Queen-s-COMPSA/Canadian-Tech-Internships-2023"
    );
  }, []);
}
