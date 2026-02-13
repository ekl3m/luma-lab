import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center flex-col bg-[#000000] text-[#F5F3EE] px-4 text-center">
            {/* Decorative background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D00] blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-2xl py-12">
                {/* Big 404 */}
                <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-[#FF4D00] select-none opacity-90 tracking-tighter pr-1">
                    404
                </h1>

                {/* Information */}
                <h2 className="mt-4 text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#F5F3EE]">
                    Zgubiono Sygnał
                </h2>

                <p className="mt-6 max-w-md text-[#8898aa] text-lg leading-relaxed">
                    Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona do innego wymiaru.
                </p>

                {/* Return button */}
                <Link
                    href="/"
                    className="mt-10 inline-flex items-center justify-center rounded-sm bg-[#FF4D00] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#cc3d00] hover:scale-105 active:scale-95 uppercase tracking-wider"
                >
                    Wróć na stronę główną
                </Link>
            </div>

            {/* Technical footer */}
            <div className="relative z-10 py-8 text-[#333] text-xs font-mono uppercase tracking-widest">
                Error Code: NOT_FOUND_EXCEPTION
            </div>
        </div>
    );
}