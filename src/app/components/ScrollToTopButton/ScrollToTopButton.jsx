"use client";
import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import Image from "next/image";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className={styles.scrollToTop}>
      <Image src="/up-arrow.png" alt="uparrow" width={32} height={32} />
    </button>
  );
}
