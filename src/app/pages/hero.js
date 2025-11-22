import P5Animation from "../components/bg";
import Image from "next/image";
import InteractiveGridBackground from "@/app/components/ui/interactive-grid-background";

function HeroPage() {
  return (
    <>
      <InteractiveGridBackground
        gridSize={40}
        gridColor="#d1d5db"
        darkGridColor="#1f2937"
        effectColor="rgba(0,255,255,0.5)"
        darkEffectColor="rgba(255, 0, 0, 0.5)"
        trailLength={5}
        glow
        glowRadius={30}
        showFade
        fadeIntensity={25}
      >
        <div className="hero flex flex-col items-center justify-center min-h-screen">
        <Image
            src="/afk-white.png"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg mb-6 z-10"
        />
        </div>
      </InteractiveGridBackground>
    </>
  );
}
export default HeroPage;