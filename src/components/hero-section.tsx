import HeroImage from "./hero-image";
import Slogan from "./slogan";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col place-items-center justify-center overflow-clip pt-20">
      <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-fit min-h-screen w-full bg-white opacity-50">
        <HeroImage />
      </div>
      <Slogan />
      <div className="mt-20 flex w-full flex-col gap-7 bg-[url('/header-background.jpg')] p-7 text-center font-sans">
        <p>Your Trusted Partner In Law</p>
        <p>Fica Required Forms</p>
      </div>
    </div>
  );
}
