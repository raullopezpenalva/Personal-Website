import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash: React.FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {

    const elementId = hash.replace("#", "");

    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }

  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;