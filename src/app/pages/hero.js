import P5Animation from "../components/bg";
import Image from "next/image";

function HeroPage() {
  return (
    <div className="hero flex flex-col items-center justify-center min-h-screen">
    <Image
        src="/afk-white.png"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg mb-6 z-10"
    />
    </div>
  );
}
export default HeroPage;