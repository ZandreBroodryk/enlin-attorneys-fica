"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage() {
  const [translate, setTranslate] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setTranslate(0.75 * window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page is not at top
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Image
      src="/logo.jpg"
      alt="Enslin Inc. Logo"
      width={899}
      height={887}
      className={`lg:-mt-[190px] mx-auto h-full`}
      style={{ translate: `0px ${translate}px` }}
    />
  );
}
