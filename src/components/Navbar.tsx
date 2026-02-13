import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        // Navigation bar: fixed, on top (z-50), with a semi-transparent graphite background and a subtle blur effect
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1E2022]/90 backdrop-blur-md border-b border-white/10">

            {/* Width container - so the content doesn't stretch too wide on large screens */}
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LEFT SIDE: Logo + Company name (Clickable -> returns to homepage) */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Small logo - 40px */}
                    <div className="w-10 h-10 text-[#F5F3EE]">
                        <Logo className="w-full h-full" />
                    </div>
                    {/* Company name */}
                    <span 
                        className="font-oswald font-bold text-xl tracking-widest text-[#F5F3EE] uppercase"
                    >
                        Luma
                        <span
                            className="text-[#FF4D00] ml-1"
                            style={{ WebkitTextStroke: '0.7px #FF4D00' }}
                        >
                            Lab
                        </span>
                    </span>
                </Link>

                {/* MIDDLE: Links (Hidden on mobile devices, but visible on desktop "md:flex") */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="/oferta">Oferta</NavLink>
                    <NavLink href="/technologia">Technologia</NavLink>
                    <NavLink href="/realizacje">Realizacje</NavLink>
                    <NavLink href="/kontakt">Kontakt</NavLink>
                </div>

                {/* RIGHT SIDE: CTA Button (Call to Action) */}
                <div className="flex items-center gap-4">
                    {/* For mobile devices, we can show a menu icon instead of the CTA button - TO DO LATER */}
                    <Link
                        href="/wycena"
                        className="px-6 py-2 bg-[#FF4D00] text-white font-oswald font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#e04400] transition-colors shadow-lg shadow-orange-900/20 inline-block"
                    >
                        Wyceń
                    </Link>
                </div>
            </div>
        </nav>
    );
}

// Small helper component for navigation links - to keep the code DRY and maintain consistent styling across all links in the navbar
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