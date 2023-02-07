import fallback from "/public/circuit-splash.png";
import Image from "next/image";
import { useState } from "react";

const OptimizedImageWithFallback = (props) => {
  const { src, alt = "", fallBackSrc = fallback.src, ...rest } = props;
  const [imageError, setImageError] = useState(false);
  try {
    return (
      <Image
        src={imageError ? fallBackSrc : src}
        {...rest}
        alt={alt}
        onError={() => setImageError(true)}
      />
    );
  } catch {
    return <div></div>;
  }
};

export default OptimizedImageWithFallback;
