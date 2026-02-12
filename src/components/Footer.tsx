import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#151617] text-white/60 py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Kolumna 1: Logo */}
                <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 text-white/80">
                        <Logo className="w-full h-full" />
                    </div>
                    <p className="font-oswald uppercase tracking-widest text-sm text-white/40">
                        Luma Lab <br /> Engineering
                    </p>
                </div>

                {/* Kolumna 2: Mapa strony */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2">Menu</h4>
                    <Link href="/oferta" className="hover:text-[#FF4D00] transition-colors">Oferta</Link>
                    <Link href="/technologia" className="hover:text-[#FF4D00] transition-colors">Technologia</Link>
                    <Link href="/realizacje" className="hover:text-[#FF4D00] transition-colors">Realizacje</Link>
                    <Link href="/kontakt" className="hover:text-[#FF4D00] transition-colors">Kontakt</Link>
                </div>

                {/* Kolumna 3: Kontakt */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2">Kontakt</h4>
                    <p>Ul. Rzgowska 109, Łódź, Polska</p>
                    <p>+48 662 098 840</p>
                    <a href="mailto:kontakt@lumalab.pl" className="hover:text-[#FF4D00] transition-colors">kontakt@lumalab.pl</a>
                    {/* Tu wstawisz swój numer jak będziesz gotowy */}
                </div>

                {/* Kolumna 4: Social / Info */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2">Legal</h4>
                    <p className="text-sm text-white/20">
                        © 2026 Luma Lab.<br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}