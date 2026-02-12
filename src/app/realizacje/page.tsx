"use client";

import { motion } from "framer-motion";

// Przykładowe projekty pasujące do Twojego sprzętu
const projects = [
    { id: 1, title: "Obudowa IoT", cat: "Druk 3D (ASA)" },
    { id: 2, title: "Statuetka Nagrodowa", cat: "Laser (Plexi + Drewno)" },
    { id: 3, title: "Personalizowany Bidon", cat: "Grawer Obrotowy" },
    { id: 4, title: "Uchwyt GoPro", cat: "Druk 3D (PA-CF)" },
    { id: 5, title: "Logo Ścienne LED", cat: "Laser (Plexi)" },
    { id: 6, title: "Prototyp Mechanizmu", cat: "Projekt CAD + Druk" },
];

export default function RealizacjePage() {
    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-12">
                    Wybrane <span className="text-[#FF4D00]">Projekty</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative aspect-square bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
                        >
                            {/* Placeholder - tu wrzucisz swoje foty */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-oswald text-6xl font-bold group-hover:scale-110 transition-transform duration-500">
                                LUMA
                            </div>

                            {/* Overlay z opisem */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-1">{project.cat}</span>
                                <h3 className="font-oswald text-2xl font-bold uppercase">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}