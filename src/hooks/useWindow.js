import { useCallback, useEffect, useState } from "react";

const useWindow = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0
  });
  const [paneSize, setPaneSize] = useState({
    width: 0,
    height: 0
  });

  const updateScrollPosition = useCallback(() => {
    if (typeof window === "undefined") return;

    setScrollPosition((prevState) => ({
      ...prevState,
      x: window.scrollX,
      y: window.scrollY
    }));
  }, []);

  const updatePaneSize = useCallback(() => {
    if (typeof window === "undefined") return;

    setPaneSize((prevState) => ({
      ...prevState,
      height: window.innerHeight,
      width: window.innerWidth
    }));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", updatePaneSize);

    updatePaneSize();

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updatePaneSize);

      updatePaneSize();
    };
  }, [updatePaneSize, updateScrollPosition]);

  return {
    scrollPosition,
    paneSize
  };
};

export default useWindow;
