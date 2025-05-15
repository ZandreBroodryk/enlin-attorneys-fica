"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page is not at top
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-20 flex flex-row justify-between px-10 py-2 font-sans transition-all duration-700 ${isScrolled ? "bg-neutral-800 text-white" : "bg-transparent"}`}
    >
      <HamburgerMenu />
      <Link href="/" className="flex flex-row place-items-center gap-4">
        <Image
          src="/logo.jpg"
          alt="Enslin Inc. Logo"
          width={40}
          height={40.5}
        />
        <h1 className="text-xl">Enslin Inc. Attorneys</h1>
      </Link>
      <nav className="hidden flex-row items-center gap-4 lg:flex">
        <Routes />
      </nav>
    </header>
  );
}

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="absolute top-3 left-2 z-40 block size-7 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          viewBox="-9 -9 18 18"
          stroke="currentColor"
          focusable="false"
          className={`transition-all ${isOpen ? "rotate-90" : ""}`}
        >
          <g>
            <path
              className={`bg-white transition-all ${isOpen ? "translate-x-[-4px] translate-y-[4px] rotate-45" : ""}`}
              d="M-9 -5 L9 -5"
              fill="none"
              strokeWidth="2"
            />
            <path
              className={`bg-white transition-all ${isOpen ? "rotate-135 opacity-0" : ""}`}
              d="M-9 0 L9 0"
              fill="none"
              strokeWidth="2"
            />
            <path
              className={`bg-white transition-all ${isOpen ? "translate-x-[3px] translate-y-[4px] rotate-135" : ""}`}
              d="M-9 5 L9 5"
              fill="none"
              strokeWidth="2"
            />
          </g>
        </svg>
      </button>
      <nav
        className={`absolute top-0 left-0 flex h-screen flex-col gap-4 overflow-clip bg-neutral-800 pt-20 text-white transition-all duration-500 lg:hidden ${isOpen ? "w-60 px-7" : "w-0"}`}
      >
        <Routes />
      </nav>
    </>
  );
}

function Routes() {
  return (
    <>
      <Link href="/about">About Page</Link>
      <Link href="/">Client Fica Documents</Link>
    </>
  );
}
