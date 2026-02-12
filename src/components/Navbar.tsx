import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        // Pasek nawigacji: przyklejony (fixed), na wierzchu (z-50), z tłem grafitowym ale lekko przezroczystym
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1E2022]/90 backdrop-blur-md border-b border-white/10">

            {/* Kontener szerokości - żeby się nie rozlewało na ultra-szerokich monitorach */}
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LEWA STRONA: Logo + Nazwa (Klikalne -> wraca na start) */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Logo małe - 40px */}
                    <div className="w-10 h-10 text-[#F5F3EE]">
                        <Logo className="w-full h-full" />
                    </div>
                    {/* Nazwa firmy - widoczna tylko na większych ekranach albo zawsze, jak wolisz */}
                    <span className="font-oswald font-bold text-xl tracking-widest text-[#F5F3EE] uppercase">
                        Luma <span className="text-[1.05em] text-[#FF4D00]">Lab</span>
                    </span>
                </Link>

                {/* ŚRODEK/PRAWA: Linki (Ukryte na mobile "hidden", widoczne na desktop "md:flex") */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/oferta">Oferta</NavLink>
                    <NavLink href="/technologia">Technologia</NavLink>
                    <NavLink href="/realizacje">Realizacje</NavLink>
                    <NavLink href="/kontakt">Kontakt</NavLink>
                </div>

                {/* PRAWA STRONA: Przycisk CTA (Call to Action) */}
                <div className="flex items-center gap-4">
                    {/* Na mobile można tu dać ikonę menu, na razie zostawiamy sam przycisk */}
                    <button className="px-6 py-2 bg-[#FF4D00] text-white font-oswald font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#e04400] transition-colors shadow-lg shadow-orange-900/20">
                        Wyceń
                    </button>
                </div>
            </div>
        </nav>
    );
}

// Mały pomocniczy komponent do linków, żeby nie kopiować klas w kółko
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-[#F5F3EE]/80 hover:text-[#FF4D00] font-oswald text-sm tracking-widest uppercase transition-colors"
        >
            {children}
        </Link>
    );
}