"use client";

import { motion } from "framer-motion";
import { useActionState } from "react";
import { sendEmail } from "../actions";
import SuccessTick from "@/components/SuccessTick";

export const runtime = 'edge';

const initialState = {
    success: false,
    error: ''
};

export default function KontaktPage() {
    // Hook to handle form submission state
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left side: About us */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-8">
                        Skontaktuj <br /> <span className="text-[#FF4D00]">się z nami</span>
                    </h1>

                    <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
                        Masz pomysł na projekt? Potrzebujesz precyzyjnego graweru, cięcia lub druku 3D? <br /> Napisz do nas.
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

                {/* Right side: Form to contact us */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 p-8 md:p-12 border border-white/10 relative"
                >
                    {state.success ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-10">
                            <SuccessTick />
                            <h3 className="font-oswald text-3xl font-bold uppercase">Wiadomość Wysłana</h3>
                            <p className="text-gray-400 mt-4">Dziękujemy za kontakt. Wrócimy z odpowiedzią w ciągu 24h.</p>

                            {/* Button to reset form */}
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-8 text-[#FF4D00] underline hover:text-white transition-colors"
                            >
                                Wyślij kolejną wiadomość
                            </button>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">

                            {/* Display server error */}
                            {state.error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm justify-center items-center flex">
                                    {state.error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Imię / Firma</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors"
                                        placeholder="Jan"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors"
                                        placeholder="jan@firma.pl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Temat</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                            className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="Pytanie techniczne">Pytanie techniczne</option>
                                        <option value="Status zamówienia">Status zamówienia</option>
                                        <option value="Współpraca">Współpraca</option>
                                        <option value="Reklamacja / Zwrot">Reklamacja / Zwrot</option>
                                        <option value="Inne">Inne</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Wiadomość</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-[#1E2022] border border-white/10 p-4 text-white focus:border-[#FF4D00] focus:outline-none transition-colors"
                                    placeholder="Opisz, w czym możemy pomóc. Jeśli pytasz o zamówienie, podaj jego numer..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-[#FF4D00] text-white py-4 font-oswald font-bold uppercase tracking-widest hover:bg-[#e04400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {isPending ? (
                                    // Loading spinner
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Wysyłanie...
                                    </>
                                ) : (
                                    "Wyślij Wiadomość"
                                )}
                            </button>
                        </form>
                    )}

                    {/* Decorative corner elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#FF4D00]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#FF4D00]" />
                </motion.div>

            </div>
        </main>
    );
}