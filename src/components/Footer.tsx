import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#151617] text-white/60 py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Column 1: Logo */}
                <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 text-white/80">
                        <Logo className="w-full h-full" />
                    </div>
                    <p className="font-oswald uppercase tracking-widest text-sm text-white/40">
                        Luma Lab <br /> Inżynieria & Design
                    </p>
                </div>

                {/* Column 2: Page map */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2 border-l-2 border-[#FF4D00] pl-3">Menu</h4>
                    <Link href="/oferta" className="hover:text-[#FF4D00] transition-colors">Oferta</Link>
                    <Link href="/technologia" className="hover:text-[#FF4D00] transition-colors">Technologia</Link>
                    <Link href="/realizacje" className="hover:text-[#FF4D00] transition-colors">Realizacje</Link>
                    <Link href="/kontakt" className="hover:text-[#FF4D00] transition-colors">Kontakt</Link>
                </div>

                {/* Column 3: Contact */}
                <div className="flex flex-col gap-5">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2 border-l-2 border-[#FF4D00] pl-3">Kontakt</h4>

                    {/* Address */}
                    <div className="flex items-start gap-3 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF4D00] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="group-hover:text-white transition-colors">ul. Rzgowska 109<br />93-153 Łódź, Polska</p>
                    </div>

                    {/* Phone */}
                    <a href="tel:+48662098840" className="flex items-center gap-3 group hover:text-[#FF4D00] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF4D00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+48 662 098 840</span>
                    </a>

                    {/* Mail */}
                    <a href="mailto:kontakt@lumalab.pl" className="flex items-center gap-3 group hover:text-[#FF4D00] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF4D00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>kontakt@lumalab.pl</span>
                    </a>
                </div>

                {/* Column 4: Legal info */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-oswald text-white uppercase tracking-widest mb-2 border-l-2 border-[#FF4D00] pl-3">Legal</h4>
                    <Link href="/polityka-prywatnosci" className="hover:text-[#FF4D00] transition-colors">
                        Polityka Prywatności
                    </Link>
                    <p className="text-sm text-white/20 mt-2">
                        © 2026 Luma Lab.<br />
                        Wszelkie prawa zastrzeżone.
                    </p>
                </div>
            </div>
        </footer>
    );
}