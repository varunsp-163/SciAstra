import React, { useState } from "react";
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
