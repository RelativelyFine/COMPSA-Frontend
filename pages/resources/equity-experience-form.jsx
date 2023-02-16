import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLScLItnZ4CnenBKErp7qUNcN6UXrZflGoSAhjsOk_inkJ-F5CQ/viewform"
    );
  }, []);
}
