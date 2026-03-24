import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageWithFallback({
  src,
  alt,
  width = 150,
  height = 100,
  className = "object-contain",
  onError,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Generate a professional placeholder image using Placeholder.co
  // Creates a gradient placeholder with the alt text
  const placeholderSrc = `https://via.placeholder.com/${width}x${height}/1a1a1a/55ccf2?text=${encodeURIComponent(alt || "Image")}`;

  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(placeholderSrc);
      if (onError) onError();
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      unoptimized={hasError}
      priority={false}
      {...props}
    />
  );
}
