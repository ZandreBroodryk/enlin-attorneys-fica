import DocumentTypes from "@/components/document-types";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <DocumentTypes />
      <Footer />
    </>
  );
}
