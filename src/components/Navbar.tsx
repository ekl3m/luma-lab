'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "./Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // 1. Close the menu when the route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // 2. Block body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            {/* MAIN NAVBAR (Always visible) */}
            <nav className="fixed top-0 left-0 w-full z-40 bg-[#1E2022]/90 backdrop-blur-md border-b border-white/10 h-20">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 group z-50 relative">
                        <div className="w-10 h-10 text-[#F5F3EE]">
                            <Logo className="w-full h-full" />
                        </div>
                        <span className="font-oswald font-bold text-xl tracking-widest text-[#F5F3EE] uppercase">
                            Luma
                            <span
                                className="text-[#FF4D00] ml-1"
                                style={{ WebkitTextStroke: '0.7px #FF4D00' }}
                            >
                                Lab
                            </span>
                        </span>
                    </Link>

                    {/* DESKTOP LINKS (Hidden on mobile) */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="/oferta">Oferta</NavLink>
                        <NavLink href="/technologia">Technologia</NavLink>
                        <NavLink href="/realizacje">Realizacje</NavLink>
                        <NavLink href="/kontakt">Kontakt</NavLink>
                    </div>

                    {/* DESKTOP CTA (Hidden on mobile) */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/wycena"
                            className="px-6 py-2 bg-[#FF4D00] text-white font-oswald font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#e04400] transition-colors shadow-lg shadow-orange-900/20 inline-block"
                        >
                            Wyceń
                        </Link>
                    </div>

                    {/* MOBILE HAMBURGER BUTTON */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none group"
                        aria-label="Open Menu"
                    >
                        <span className="w-8 h-[2px] bg-[#F5F3EE] block transition-all group-hover:bg-[#FF4D00]" />
                        <span className="w-6 h-[2px] bg-[#F5F3EE] block transition-all group-hover:bg-[#FF4D00]" />
                        <span className="w-6 h-[2px] bg-[#F5F3EE] block transition-all group-hover:bg-[#FF4D00]" />
                    </button>
                </div>
            </nav>

            {/* DRAWER + BACKDROP */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* 1. BACKDROP (Background darkening) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)} // Click on backdrop also closes the menu
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        {/* 2. DRAWER */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#151617] z-[70] shadow-2xl border-l border-[#FF4D00]/20 md:hidden flex flex-col"
                        >
                            {/* Drawer header with close button */}
                            <div className="flex justify-between items-center p-6 border-b border-white/5">
                                {/* Logo in Drawer */}
                                <div className="flex items-center gap-2 opacity-80">
                                    <div className="w-6 h-6 text-[#F5F3EE]">
                                        <Logo className="w-full h-full" />
                                    </div>
                                    <span className="font-oswald font-bold text-lg tracking-widest text-[#F5F3EE] uppercase">
                                        Luma<span className="text-[#FF4D00]">Lab</span>
                                    </span>
                                </div>

                                {/* Close button (SVG) */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-[#FF4D00] transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Links in drawer */}
                            <div className="flex flex-col p-8 gap-6 overflow-y-auto">
                                <MobileNavLink href="/oferta">Oferta</MobileNavLink>
                                
                                <div className=" pt-8 border-t border-white/10">
                                    <MobileNavLink href="/technologia">Technologia</MobileNavLink>
                                </div>

                                
                                <div className=" pt-8 border-t border-white/10">
                                    <MobileNavLink href="/realizacje">Realizacje</MobileNavLink>
                                </div>

                                <div className=" pt-8 border-t border-white/10">
                                    <MobileNavLink href="/kontakt">Kontakt</MobileNavLink>
                                </div>

                                <div className="pt-16 border-t border-white/10">
                                    <Link
                                        href="/wycena"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full block text-center px-6 py-4 bg-[#FF4D00] text-white font-oswald font-bold text-lg uppercase tracking-widest rounded-sm shadow-lg active:scale-95 transition-transform"
                                    >
                                        Darmowa wycena
                                    </Link>
                                </div>
                            </div>

                            {/* Drawer's footer - for future use */}
                            {/* 
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#151617]/90 backdrop-blur-md border-t border-white/10 z-20">
                                <p className="text-white/20 text-xs uppercase tracking-widest font-oswald">
                                    © 2026 Luma Lab
                                </p>
                            </div>
                            */}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

// Helper components for links

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

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group flex items-center justify-between w-full"
        >
            {/* Link text */}
            <span className="text-lg font-oswald font-bold uppercase tracking-widest text-[#F5F3EE] group-hover:text-[#FF4D00] transition-colors border-l-2 border-transparent group-hover:border-[#FF4D00] pl-3 -ml-3">
                {children}
            </span>

            {/* Chevron (arrow) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white/10 group-hover:text-[#FF4D00] transition-colors transform group-hover:translate-x-1 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    );
}