import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/document/d/1MXn6Nt31Rl-h1evbVqID47iqsMp0uw1qQmmdQIoEwJA/edit"
    );
  }, []);
}
