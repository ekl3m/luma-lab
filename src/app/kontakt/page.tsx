"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function KontaktPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("submitting");
        // Tu potem podepniemy wysyłanie (np. Formspree)
        setTimeout(() => setStatus("success"), 1000); // Symulacja
    }

    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* LEWA STRONA: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-8">
                        Skontaktuj <br/> <span className="text-[#FF4D00]">się z nami</span>
                    </h1>

                    <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
                        Masz pomysł na projekt? Potrzebujesz precyzyjnego graweru, cięcia lub druku 3D? <br/> Napisz do nas.
                    </p>

                    <div className="space-y-8 font-oswald tracking-wide">
                        <div>
                            <h3 className="text-[#FF4D00] text-sm uppercase mb-2">Email</h3>
                            <a href="mailto:kontakt@lumalab.pl" className="text-2xl hover:text-[#FF4D00] transition-colors">
                                kontakt@lumalab.pl
                            </a>
                        </div>

                        <div>
                            <h3 className="text-[#FF4D00] text-sm uppercase mb-2">Lokalizacja</h3>
                            <p className="text-2xl">Ul. Rzgowska 109, Łódź, Polska</p>
                            <p className="text-gray-500 text-sm font-sans mt-1">Działamy wysyłkowo na cały kraj.</p>
                        </div>
                    </div>
                </motion.div>

                {/* PRAWA STRONA: Formularz */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 p-8 md:p-12 border border-white/10 relative"
                >
                    {status === "success" ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <span className="text-6xl mb-4">✅</span>
                            <h3 className="font-oswald text-3xl font-bold uppercase">Wiadomość Wysłana</h3>
                            <p className="text-gray-400 mt-4">Odezwiemy się w ciągu 24h.</p>
                            <button onClick={() => setStatus("idle")} className="mt-8 text-[#FF4D00] underline">Wyślij kolejną</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Imię</label>
                                    <input type="text" required className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors" placeholder="Jan" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                    <input type="email" required className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors" placeholder="jan@firma.pl" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Temat</label>
                                <select className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors">
                                    <option>Wycena Projektu</option>
                                    <option>Współpraca</option>
                                    <option>Inne</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Wiadomość</label>
                                <textarea required rows={5} className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors" placeholder="Opisz swój projekt..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-[#FF4D00] text-white py-4 font-oswald font-bold uppercase tracking-widest hover:bg-[#e04400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Wysyłanie..." : "Wyślij Wiadomość"}
                            </button>
                        </form>
                    )}

                    {/* Ozdobnik w rogu formularza */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#FF4D00]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#FF4D00]" />
                </motion.div>

            </div>
        </main>
    );
}
