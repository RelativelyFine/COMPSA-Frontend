import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/1Ppm7oilNMstDcvNn1KR0KPxwkyirM5wiC4qlx9WROWk/viewform?edit_requested=true"
    );
  }, []);
}
