import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/document/d/1YuUtzakJQX1OJCLn1A4kejXBwy03fsC_zg9XgxZTGHc/edit?usp=sharing"
    );
  }, []);
}
