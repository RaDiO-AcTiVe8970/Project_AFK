// components/SponsorCard.js
import Image from "next/image";

export default function Card({ src, alt, label }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#0b0b0b] rounded-2xl p-6 border border-[#1a1a1a] shadow-md transition hover:scale-105"
      style={{
        boxShadow: "0 0 20px 0 rgba(247, 247, 247, 0.8)",
      }}
    >
      <div className="relative w-40 h-20 mb-4">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
      <p className="text-white">{label}</p>
    </div>
  );
}
