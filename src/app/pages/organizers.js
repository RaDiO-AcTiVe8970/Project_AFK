import Image from "next/image";
import Card from "../components/card";

const oraginzers = [
  { name: "AFK Production", label: "Dhon.exe", src: "/afk-white.png", alt: "AFK Logo", width: 200, height: 150 },
  { name: "BUCC", label: "BRACU Compooter Club", src: "/computer-club.png", alt: "BUCC Logo", width: 200, height: 150 },
];

export default function OrganizersSection() {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-semibold">
        Our <span className="text-red-500 font-bold">Organizers</span>
      </h2>
      <p className="text-sm text-gray-300 mt-2 mb-10">
        insert name here - 2025 is supported by these amazing sponsors
      </p>

      <div className="items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {oraginzers.map((s, i) => (
          <Card key={i} src={s.src} alt={s.alt} label={s.label} width={s.width} height={s.height} />
        ))}
      </div>
    </section>
  );
}
