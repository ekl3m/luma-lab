"use client";

import { motion } from "framer-motion";

export default function TechnologiaPage() {
    return (
        <main className="bg-[#1E2022] text-[#F5F3EE] min-h-screen pt-32 pb-20 px-6 font-sans">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-6">
                        Park <span className="text-[#FF4D00]">Maszynowy</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        Sprzęt dobrany pod wydajność. Nie wierzymy w półśrodki - stawiamy na sprawdzone rozwiązania, które gwarantują jakość.
                    </p>
                </motion.div>

                {/* Machine list */}
                <div className="space-y-12">

                    {/* Machine 1: CO2 Laser */}
                    <MachineCard
                        name="Ploter Laserowy CO2 100W"
                        spec="Prędkość: 500mm/s | Pole: 600x400mm+ | Oś Obrotowa"
                        desc="Wysokowydajny ploter do cięcia i grawerowania. Dzięki systemowi przelotowemu (Pass-Through) obrabiamy materiały o dowolnej długości. Przystawka obrotowa pozwala na personalizację kubków i bidonów."
                        side="left"
                    />

                    {/* Machine 2: 3D Printers */}
                    <MachineCard
                        name="Drukarki Bambu Lab X1C"
                        spec="Prędkość: 500mm/s | Multi-Color (AMS) | Lidar"
                        desc="Flota nowoczesnych drukarek FDM z zamkniętymi komorami. Drukujemy z materiałów inżynierskich (np. ASA, PA-CF) z niespotykaną precyzją warstwy. System AI monitoruje każdą warstwę."
                        side="right"
                    />

                    {/* Machine 3: Workstation */}
                    <MachineCard
                        name="Stacje Projektowania CAD"
                        spec="Ryzen 9 | RX 9070 XT | 64GB RAM"
                        desc="Moc obliczeniowa potrzebna do renderowania i symulacji. Nasze środowisko CAD/CAM pozwala na płynną pracę z dużymi złożeniami i skanami 3D."
                        side="left"
                    />

                </div>
            </div>
        </main>
    );
}

function MachineCard({ name, spec, desc, side }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${side === "right" ? "md:items-end md:text-right" : "md:items-start"} border-b border-white/5 pb-12`}
        >
            <h2 className="font-oswald text-4xl uppercase font-bold text-white mb-2">{name}</h2>
            <span className="font-mono text-[#FF4D00] text-sm tracking-widest mb-4 block">{spec}</span>
            <p className="text-gray-400 max-w-xl leading-relaxed">{desc}</p>
        </motion.div>
    )
}