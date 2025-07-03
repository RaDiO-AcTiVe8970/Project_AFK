"use client";

export default function TournamentDetails() {
  const tournaments = [
    {
      name: "Valorant",
      prize: "BDT 30,000",
      first: "BDT 20,000",
      second: "BDT 10,000",
      third: "-",
      pdf: "",
    },
    {
      name: "PUBG Mobile",
      prize: "BDT 30,000",
      first: "BDT 15,000",
      second: "BDT 10,000",
      third: "BDT 5,000",
      pdf: "",
    },
    {
      name: "FC-2025",
      prize: "BDT 25,000",
      first: "BDT 15,000",
      second: "BDT 8,000",
      third: "-",
      pdf: "",
    }
  ];

  return (
    <section className="bg-rgba(247, 247, 247, 0.8) text-white py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Tournament Details</h2>
        <p className="text-gray-300 mt-4">
          <span className="text-red-400 font-semibold">Modes:</span> Most games will feature a mix of online and offline rounds, with the Valorant and PUBG finals held offline.
        </p>
        <p className="mt-2 text-gray-300">
          <span className="text-red-500 font-semibold">Venue (Offline Rounds & Finals):</span> The intense offline battles and grand finals will take place at the <span className="text-red-500">Selim Al Deen Mukto Moncho, Jahangirnagar University.</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-[#0a0a0a] border border-red-800/20 rounded-xl px-6 py-8">
        <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
        <p className="text-sm text-gray-300 mb-6">
          Ascension 2025 unleashes a thrilling lineup of top-tier gaming segments, delivering nonstop action and adrenaline-pumping challenges for every kind of competitor.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left text-gray-300">
            <thead className="border-b border-gray-700">
              <tr className="uppercase text-xs text-gray-400">
                <th className="py-3">Tournament</th>
                <th className="py-3">Rulebook</th>
                <th className="py-3">Prize Pool</th>
                <th className="py-3">1st Place</th>
                <th className="py-3">2nd Place</th>
                <th className="py-3">3rd Place</th>
              </tr>
            </thead>
            <tbody>
              {tournaments.map((t, i) => (
                <tr key={i} className="border-t border-gray-800">
                  <td className="py-4 font-medium">{t.name}</td>
                  <td>
                    <button onClick={() => window.open(t.pdf)} className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded">
                      Rulebook
                    </button>
                  </td>
                  <td>{t.prize}</td>
                  <td>{t.first}</td>
                  <td>{t.second}</td>
                  <td>{t.third}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
