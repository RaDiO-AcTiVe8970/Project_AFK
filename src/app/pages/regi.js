"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const tournaments = [
    {
        id: 1,
        name: "Game 1",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/afk-white.png"
    },
    {
        id: 2,
        name: "Game 2",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/game-logos/game2.png"
    },
    {
        id: 3,
        name: "Game 3",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/game-logos/game3.png"
    },
    {
        id: 4,
        name: "Game 4",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/game-logos/game4.png"
    },
    {
        id: 5,
        name: "Game 5",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/game-logos/game5.png"
    },
    {
        id: 6,
        name: "Visitor",
        entryFee: "",
        eligibility: "",
        formLink: "",
        logo: "/game-logos/visitor.png"
    }
];

const cardVariants = {
    offscreen: {
        y: 20,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
};

function Regi() {
    const handleRegister = (formLink) => {
        window.open(formLink, '_blank');
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4">Register Now</h1>
                    <p className="text-lg">
                        Secure your spot in the ASCENSION 2025 tournaments. Choose your game and registration option below.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {tournaments.map((tournament) => (
                        <motion.div
                            key={tournament.id}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, margin: "-50px" }}
                            className="card bg-black bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border border-base-300 rounded-lg overflow-hidden"
                            style={{
                                boxShadow: "0 0 20px 0 rgba(247, 247, 247, 0.8)",
                            }}
                        >
                            <div className="card-body p-6">
                                {/* Logo Section - Added at the top of the card */}
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center overflow-hidden ">
                                        <Image
                                            src={tournament.logo}
                                            alt={`${tournament.name} logo`}
                                            className="object-contain"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>

                                <h2 className="card-title text-2xl mb-4 text-center">{tournament.name}</h2>
                                <div className="space-y-3 my-2">
                                    <div className="flex items-center">
                                        <span className="font-medium w-28">Entry Fee</span>
                                        <span className="text-gray-600 dark:text-gray-400">: {tournament.entryFee || "TBA"}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium w-28">Eligibility</span>
                                        <span className="text-gray-600 dark:text-gray-400">: {tournament.eligibility || "TBA"}</span>
                                    </div>
                                </div>
                                <div className="card-actions justify-end mt-6">
                                    {tournament.formLink ? (
                                        <button
                                            onClick={() => handleRegister(tournament.formLink)}
                                            className="btn btn-primary px-6 py-2 rounded-md transition-all duration-200 hover:scale-[1.02]"
                                        >
                                            Register Now
                                        </button>
                                    ) : (
                                        <button
                                            className="btn px-6 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                                            disabled
                                        >
                                            Registration Closed
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Regi;