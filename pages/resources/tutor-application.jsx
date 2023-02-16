import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSd_SzYnHsQ0Xm4uA3PzL1SSMcq5EIvhDCbYgt34xBC-3pADZw/viewform "
    );
  }, []);
}
