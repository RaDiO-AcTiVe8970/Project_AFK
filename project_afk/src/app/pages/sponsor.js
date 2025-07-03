import Image from "next/image";
import Card from "../components/card";

const sponsors = [
  { name: "airtel", label: "Title Partner", src: "/sponsors/airtel.png", alt: "Airtel Logo" },
  { name: "vs", label: "Photography Partner", src: "/sponsors/vs.png", alt: "VS Logo" },
  { name: "tbs", label: "Print and Online Media Partner", src: "/sponsors/tbs.png", alt: "TBS Logo" },
  { name: "graduates", label: "Youth Engagement Partner", src: "/sponsors/graduates.png", alt: "Graduates Logo" },
  { name: "nurstar", label: "Advertisement Partner", src: "/sponsors/nurstar.png", alt: "Nurstar Logo" },
  { name: "hikikomori", label: "Gift Partner", src: "/sponsors/hikikomori.png", alt: "Hikikomori Logo" },
];

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-semibold">
        Our <span className="text-red-500 font-bold">Sponsors</span>
      </h2>
      <p className="text-sm text-gray-300 mt-2 mb-10">
        insert name here - 2025 is supported by these amazing sponsors
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {sponsors.map((s, i) => (
          <Card key={i} src={s.src} alt={s.alt} label={s.label} />
        ))}
      </div>
    </section>
  );
}
