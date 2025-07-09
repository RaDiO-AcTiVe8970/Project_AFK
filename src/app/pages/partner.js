import Image from "next/image";
import Card from "../components/card";

const partners = [
  { name: "airtel", label: "Title Partner", src: "/sponsors/airtel.png", alt: "Airtel Logo", width: 200, height: 150 },
  { name: "vs", label: "Photography Partner", src: "/sponsors/vs.png", alt: "VS Logo", width: 200, height: 150 },
  { name: "tbs", label: "Print and Online Media Partner", src: "/sponsors/tbs.png", alt: "TBS Logo", width: 200, height: 150 },
  { name: "graduates", label: "Youth Engagement Partner", src: "/sponsors/graduates.png", alt: "Graduates Logo", width: 200, height: 150 },
  { name: "nurstar", label: "Advertisement Partner", src: "/sponsors/nurstar.png", alt: "Nurstar Logo", width: 200, height: 150 },
  { name: "Bhoda", label: "Bhoda Partner", src: "/sponsors/hikikomori.png", alt: "Bhoda Logo", width: 200, height: 150 },
];

export default function PartnerSection() {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-semibold">
        Our <span className="text-red-500 font-bold">Partners</span>
      </h2>
      <p className="text-sm text-gray-300 mt-2 mb-10">
        insert name here - 2025 is supported by these amazing partners
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {partners.map((s, i) => (
          <Card key={i} src={s.src} alt={s.alt} label={s.label} width={s.width} height={s.height} />
        ))}
      </div>
    </section>
  );
}
