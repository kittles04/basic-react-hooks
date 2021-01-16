import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={
        isLoading
          ? "/static/pics/download.jpeg"
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=""
      ref={imageRef}
      width="500"
      height="500"
    />
  );
};

export default ImageToggleOnScroll;
