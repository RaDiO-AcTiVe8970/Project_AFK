"use client";

import { Element } from "react-scroll";

export default function RoadMap() {
  return (
    <Element name="event-roadmap">
      <section className="bg-rgba(247, 247, 247, 0.8)  text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">
            Event <span className="text-red-600">Roadmap</span>
          </h2>
          <p className="text-sm text-gray-300 mt-4">
            Follow our tournament schedule from registration to the grand finals. Mark these important
            dates in your calendar to be part of ASCENSION 2025.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-red-600"></div>

          {/* Registration Opens */}
          <div className="mb-20 flex justify-start items-center relative">
            <div className="w-1/2 pr-8">
              <div className="bg-[#0a0a0a] p-6 rounded-md shadow-md">
                <p className="text-sm text-red-500 mb-1">May 24, 2025</p>
                <h3 className="font-bold text-lg">Registration Opens</h3>
                <p className="text-sm text-gray-300">Event Launch & Registration Opens</p>
              </div>
            </div>
            <div className="w-1/2 relative">
              <div className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-red-600 z-10"></div>
            </div>
          </div>

          {/* Registration Closes */}
          <div className="mb-20 flex justify-end items-center relative">
            <div className="w-1/2 relative">
              <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-red-600 z-10"></div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="bg-[#0a0a0a] p-6 rounded-md shadow-md">
                <p className="text-sm text-red-500 mb-1">June 26, 2025</p>
                <h3 className="font-bold text-lg">Registration Closes</h3>
                <p className="text-sm text-gray-300">End of time for registration</p>
              </div>
            </div>
          </div>

          {/* Online Round */}
          <div className="mb-20 flex justify-start items-center relative">
            <div className="w-1/2 pr-8">
              <div className="bg-[#0a0a0a] p-6 rounded-md shadow-md shadow-red-500/30">
                <p className="text-sm text-red-500 mb-1">June 27, 2025</p>
                <h3 className="font-bold text-lg">Online Round</h3>
                <p className="text-sm text-gray-300">Online rounds commence</p>
              </div>
            </div>
            <div className="w-1/2 relative">
              <div className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-red-600 z-10"></div>
            </div>
          </div>

          {/* Finale */}
          <div className="flex justify-end items-center relative">
            <div className="w-1/2 relative">
              <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-red-600 z-10"></div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="bg-[#0a0a0a] p-6 rounded-md shadow-md">
                <p className="text-sm text-red-500 mb-1">July 10, 2025</p>
                <h3 className="font-bold text-lg">Finale and Prize Giving Ceremony</h3>
                <p className="text-sm text-gray-300">
                  Finale competitors face off and prize distributed at the Selim Al Deen Mukto Moncho, JU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
