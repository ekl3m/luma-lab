import Logo from "@/components/Logo";

export default function Home() {
  return (
    // Tło ustawiamy na sztywno HEX-em, tekst na Ivory
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1E2022] text-[#F5F3EE] font-sans pt-20">

      {/* KONTENER LOGO */}
      <div className="flex items-center gap-6">

        {/* LOGO: Dzięki stroke-current w Logo.tsx, linie przejmą kolor text-[#F5F3EE] */}
        <div className="w-24 h-24 text-[#F5F3EE]">
          <Logo className="w-full h-full drop-shadow-2xl" />
        </div>

        {/* NAPIS */}
        <h1 className="font-oswald text-8xl font-bold tracking-tight uppercase leading-none">
          Luma <span className="text-[#FF4D00]">Lab</span>
        </h1>
      </div>

      <p className="mt-8 text-xl opacity-70 font-light tracking-[0.2em] uppercase">
        Engineering & Laser Cut Design
      </p>

      {/* BUTTON "DON PREZES" */}
      <button className="
        mt-12 px-12 py-5 
        bg-[#FF4D00] text-white 
        font-oswald font-bold text-xl uppercase tracking-widest 
        rounded-sm
        transition-all duration-300 ease-out
        hover:bg-[#ff6a2b] 
        hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,77,0,0.6)]
        active:translate-y-0 active:shadow-none
      ">
        Rozpocznij Projekt
      </button>

    </main>
  );
}