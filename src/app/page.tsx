"use client";

import Logo from "@/components/Logo";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="bg-[#1E2022] text-[#F5F3EE] font-sans overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="h-screen flex flex-col items-center justify-center relative pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center z-10"
        >
          <div className="w-32 h-32 text-[#F5F3EE] mb-6 drop-shadow-2xl">
            <Logo className="w-full h-full" />
          </div>

          <h1 className="font-oswald text-6xl md:text-9xl font-bold uppercase tracking-normal leading-none flex flex-col items-center">
            <span className="text-[#F5F3EE]">
              LICZY SIĘ
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3EE] to-[#999] pb-2 px-2">
              PRECYZJA
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-[#FF4D00]">
            Inżynieria & Design
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <Link href="/oferta" className="px-8 py-4 bg-[#FF4D00] text-white font-oswald font-bold uppercase tracking-widest hover:bg-[#e04400] transition-all hover:scale-105 text-center">
              Sprawdź Ofertę
            </Link>
            <Link href="/kontakt" className="px-8 py-4 border border-[#F5F3EE]/30 text-[#F5F3EE] font-oswald font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center">
              Skontaktuj się
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D00] rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      </section>

      {/* --- SECTION 2: OFFER --- */}
      <section className="py-24 px-6 bg-[#181a1b]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard
              num="01"
              title="Cięcie Laserem"
              desc="Precyzyjna obróbka materiałów organicznych lub wybranych metalowych. Idealne krawędzie bez dodatkowej obróbki. Detal to podstawa."
            />
            <ServiceCard
              num="02"
              title="Druk 3D"
              desc="Szybkie prototypowanie i produkcja małoseryjna (FDM). Od pomysłu do fizycznego modelu w 24h."
            />
            <ServiceCard
              num="03"
              title="Projektowanie CAD"
              desc="Zamieniamy szkice i pomysły w profesjonalną dokumentację techniczną. Inżynieria odwrotna i modelowanie."
            />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: NUMBERS --- */}
      <section className="py-32 px-6 border-y border-white/5 bg-[#1E2022] relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10"
        >
          <StatItem value="0.05" unit="mm" label="Tolerancja" />
          <StatItem value="24" unit="h" label="Realizacja" />
          <StatItem value="100" unit="%" label="Jakości" />
          <StatItem value="∞" unit="" label="Możliwości" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-oswald font-bold text-white/[0.02] pointer-events-none whitespace-nowrap">
          LUMA LAB
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-32 flex flex-col items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl md:text-6xl uppercase font-bold mb-8"
        >
          Masz projekt? <span className="text-[#FF4D00]">Zrealizujmy go.</span>
        </motion.h2>
        <Link href="/wycena" className="px-12 py-6 bg-[#F5F3EE] text-[#1E2022] font-oswald font-bold text-xl uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-all duration-300 shadow-xl">
          Darmowa Wycena
        </Link>
      </section>

    </main>
  );
}

// Helper components
function ServiceCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div variants={fadeInUp} className="group p-8 border border-white/10 bg-white/5 hover:bg-[#FF4D00] transition-colors duration-500 cursor-default">
      <span className="font-oswald text-5xl text-white/20 group-hover:text-white/40 mb-4 block">{num}</span>
      <h3 className="font-oswald text-2xl uppercase font-bold mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-400 group-hover:text-white leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function StatItem({ value, unit, label }: { value: string, unit: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-oswald text-6xl md:text-7xl font-bold text-[#FF4D00]">
        {value}<span className="text-3xl text-white/50 ml-1">{unit}</span>
      </span>
      <span className="mt-4 font-mono text-sm uppercase tracking-widest text-gray-400">{label}</span>
    </div>
  );
}