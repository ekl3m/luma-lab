"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Laser CO2 (Cięcie & Grawer)",
        desc: "Obróbka tworzyw i materiałów naturalnych. Precyzja do 0.1mm. Tniemy, grawerujemy, znakujemy.",
        details: [
            "TNIEMY I GRAWERUJEMY: Plexi (PMMA), Sklejka, Drewno, Skóra, Filc, Guma, Karton, Laminaty grawerskie",
            "TYLKO GRAWERUJEMY: Szkło, Ceramika (kubki / bidony), Kamień (łupek), Aluminium anodowane, Lustra",
            "POLE ROBOCZE: 600x400mm (z opcją przelotu na wylot dla długich desek)",
            "MOC 100W: Tniemy plexi do 15mm i sklejkę do 10mm na raz"
        ],
        price: "Start od 50 zł"
    },
    {
        id: "02",
        title: "Druk 3D (FDM)",
        desc: "Produkcja addytywna. Od tanich prototypów po wytrzymałe części maszynowe. Druk wielokolorowy.",
        details: [
            "TWORZYWA STANDARDOWE: PLA (Biodegradowalny), PETG (Odporny chemicznie), TPU (Elastyczna guma 95A)",
            "TWORZYWA TECHNICZNE: ABS/ASA (Odporne na UV i temp.), PC (Poliwęglan - Ultra mocny)",
            "TWORZYWA KOMPOZYTOWE: PA-CF, PET-CF, PA-GF (Nylon z włóknem węglowym lub szklanym)",
            "DRUK WIELOKOLOROWY: Możliwość druku do 4 kolorów w jednym modelu (napisy, logotypy)"
        ],
        price: "Start od 20 zł / h"
    },
    {
        id: "03",
        title: "Projektowanie CAD",
        desc: "Usługi inżynierskie. Zamieniamy pomysły w pliki produkcyjne gotowe do wysyłki na maszynę.",
        details: [
            "MODELOWANIE 3D: Projektowanie części 3D pod druk i obróbkę CNC",
            "GRAFIKA WEKTOROWA: Przygotowanie plików DXF/AI pod cięcie laserem (optymalizacja ścieżek)",
            "INŻYNIERIA ODWROTNA: Odtwarzanie zepsutych części na podstawie dostarczonego elementu",
            "DOKUMENTACJA: Rysunki techniczne i złożeniowe"
        ],
        price: "Start od 150 zł"
    }
];

export default function OfertaPage() {
    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* NAGŁÓWEK Z PODPISEM VAT */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4"
                    >
                        Cennik & <span className="text-[#FF4D00]">Usługi</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 font-mono text-xs md:text-sm tracking-wide uppercase"
                    >
                        * Podane ceny są orientacyjne i zawierają podatek VAT (23%).
                    </motion.p>
                </div>

                <div className="space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 hover:border-[#FF4D00] transition-all duration-300 overflow-hidden group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] min-h-[300px]">

                                {/* LEWA STRONA (Nagłówek) */}
                                <div className="bg-white/5 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 group-hover:bg-[#FF4D00]/10 transition-colors">
                                    <div>
                                        <span className="font-oswald text-6xl text-white/10 font-bold block mb-4 group-hover:text-[#FF4D00]/20 transition-colors">
                                            {service.id}
                                        </span>
                                        <h2 className="font-oswald text-3xl uppercase font-bold leading-tight mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <span className="text-xs uppercase tracking-widest text-gray-500 block mb-1">Cena orientacyjna</span>
                                        <span className="font-oswald text-2xl text-[#FF4D00] font-bold">{service.price}</span>
                                    </div>
                                </div>

                                {/* PRAWA STRONA (Detale) */}
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <ul className="space-y-4">
                                        {service.details.map((item, i) => {
                                            const [label, content] = item.split(':');
                                            return (
                                                <li key={i} className="text-sm md:text-base text-gray-300 border-l-2 border-white/10 pl-4 hover:border-[#FF4D00] transition-colors">
                                                    {content ? (
                                                        <>
                                                            <span className="font-bold text-white uppercase text-xs tracking-wider block mb-1">{label}</span>
                                                            <span className="font-light text-gray-400">{content}</span>
                                                        </>
                                                    ) : (
                                                        <span>{item}</span>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}