import Image from "next/image";

export default function Card({ src, alt, label, width = 150, height = 100 }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#0b0b0b] rounded-2xl p-6 border border-[#1a1a1a] shadow-md transition hover:scale-105"
      style={{
        boxShadow: "0 0 12px 0 rgba(85, 204, 226, 0.8)",
      }}
    >
      <div
        className="flex items-center justify-center mb-4"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
      <p className="text-white text-center">{label}</p>
    </div>
  );
}
