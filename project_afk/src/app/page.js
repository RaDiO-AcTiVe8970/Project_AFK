import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Project AFK</h1>
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-lg text-gray-700">
        This is the hero section of your application.
      </p>
    </div>
  );
}
