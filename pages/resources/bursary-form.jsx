import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSeURF0FdzVDZlhbtz9JYr0uFDGjdU_orKuPxkABqaOPcM-Wxw/viewform"
    );
  }, []);
}
