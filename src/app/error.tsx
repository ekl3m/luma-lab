'use client';

import { useEffect } from 'react';
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service, e.g. Sentry, LogRocket, etc. - TODO 
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center flex-col bg-[#000000] text-[#F5F3EE] px-4 text-center">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-2xl py-12">
                <h1 className="text-[80px] md:text-[120px] font-bold leading-none text-red-600 select-none opacity-90 tracking-tighter">
                    500
                </h1>

                <h2 className="mt-4 text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#F5F3EE]">
                    Awaria Systemu
                </h2>

                <p className="mt-6 max-w-md text-[#8898aa] text-lg leading-relaxed">
                    Coś poszło nie tak po naszej stronie. Silnik się przegrzał. Nasi inżynierowie już biegną z gaśnicą.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-10 w-full md:w-auto">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center rounded-sm border border-[#FF4D00] px-6 py-3 text-sm font-bold text-[#FF4D00] transition-all hover:bg-[#FF4D00] hover:text-white uppercase tracking-wider w-full md:w-auto"
                    >
                        Spróbuj ponownie ⟳
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-sm bg-[#333] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#444] uppercase tracking-wider w-full md:w-auto"
                    >
                        Wróć na stronę główną
                    </Link>
                </div>
            </div>
            {/* Error Code */}
            <div className="relative z-10 py-8 text-[#333] text-xs font-mono uppercase tracking-widest">
                Error Digest: {error.digest || "UNKNOWN_CRITICAL_FAILURE"}
            </div>
        </div>
    );
}