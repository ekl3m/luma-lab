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

export default function WycenaPage() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);

    if (state.success) {
        return (
            <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen flex items-center justify-center pt-20">
                <div className="text-center p-12 bg-white/5 border border-[#FF4D00]/30 rounded-lg max-w-lg">
                    <SuccessTick />
                    <h1 className="text-3xl font-oswald font-bold mb-4 text-white">Zgłoszenie Przyjęte</h1>
                    <p className="text-gray-400 mb-8">
                        Sprawdź swoją skrzynkę mailową. Wysłaliśmy Ci potwierdzenie przyjęcia zlecenia.
                    </p>
                    <a href="/" className="text-[#FF4D00] underline hover:text-white">Wróć na stronę główną</a>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-6">
                        Darmowa <span className="text-[#FF4D00]">Wycena</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        Wypełnij formularz, aby otrzymać precyzyjną ofertę. <br />
                        Odpowiadamy w ciągu 24h.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 p-8 md:p-12 border border-white/10 relative"
                >
                    <form action={formAction} className="space-y-8">

                        {/* Error message */}
                        {state.error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="bg-red-500/10 border border-red-500/20 p-4 mb-6 flex items-start gap-3"
                            >
                                <p className="text-red-400 text-sm justify-center items-center flex">{state.error}</p>
                            </motion.div>
                        )}

                        {/* Hidden subject field*/}
                        <input type="hidden" name="subject" value="Formularz Wyceny" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Imię / Firma</label>
                                <input type="text" name="name" required className="w-full bg-[#151617] border border-white/10 p-4 text-white focus:border-[#FF4D00] outline-none transition-colors" placeholder="Jan Kowalski" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Email Zwrotny</label>
                                <input type="email" name="email" required className="w-full bg-[#151617] border border-white/10 p-4 text-white focus:border-[#FF4D00] outline-none transition-colors" placeholder="jan@firma.pl" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Interesująca Technologia</label>
                                <div className="relative">
                                    <select
                                        name="technology"
                                        className="w-full bg-[#151617] border border-white/10 p-4 text-white focus:border-[#FF4D00] outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="Proszę o pomoc w doborze technologii">Proszę o pomoc w doborze technologii</option>
                                        <option value="Laser CO2">Cięcie / Grawer Laserowy</option>
                                        <option value="Druk 3D FDM">Druk 3D (Tworzywa sztuczne)</option>
                                        <option value="Projektowanie CAD">Projektowanie CAD</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Link do plików (Opcjonalne)</label>
                                <input type="url" name="fileLink" className="w-full bg-[#151617] border border-white/10 p-4 text-white focus:border-[#FF4D00] outline-none transition-colors" placeholder="https://drive.google.com/..." />
                                <p className="text-[10px] text-gray-500 mt-1">Wklej link do Google Drive, Dropbox lub WeTransfer.</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Szczegóły Zlecenia</label>
                            <textarea name="message" required rows={6} className="w-full bg-[#151617] border border-white/10 p-4 text-white focus:border-[#FF4D00] outline-none transition-colors" placeholder="Opisz materiał, ilość sztuk, wymiary i zastosowanie elementu..."></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-[#FF4D00] text-white py-5 font-oswald font-bold uppercase tracking-widest text-lg hover:bg-[#e04400] transition-colors disabled:opacity-50"
                        >
                            {isPending ? (
                                // Loading spinner
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Wysyłanie...
                                </>
                            ) : (
                                "Wyślij Do Darmowej Wyceny"
                            )}
                        </button>

                    </form>

                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#FF4D00]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#FF4D00]" />
                </motion.div>
            </div>
        </main>
    );
}