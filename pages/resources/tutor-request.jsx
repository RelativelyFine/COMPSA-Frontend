import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSebseoqRym3KOZsQHE9zYtjzcZL0otMDcflmPuoxSku6gsTyA/viewform"
    );
  }, []);
}
