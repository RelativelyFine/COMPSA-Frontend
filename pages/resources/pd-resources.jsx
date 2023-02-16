import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/document/d/1Telw7rLxjh6tinQ63ctvhfAxR_ZyzceAEfy3dfs2qf4/edit#heading=h.3y4vqdyau69z"
    );
  }, []);
}
