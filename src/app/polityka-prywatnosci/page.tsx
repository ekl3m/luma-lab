import Link from "next/link";
import { Metadata } from "next";

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Polityka Prywatności',
    description: 'Zasady przetwarzania danych osobowych w Luma Lab. Dowiedz się, jak dbamy o Twoje bezpieczeństwo i prywatność zgodnie z RODO.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#000000] text-[#cccccc] py-24 px-6 font-sans">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold text-[#F5F3EE] uppercase tracking-wide mb-12 mt-8 text-center">
                    <span>Polityka</span>
                    <span className="text-[#FF4D00]">Prywatności</span>
                </h1>

                <div className="space-y-8 text-sm md:text-base leading-relaxed">

                    <section>
                        <h2 className="text-xl text-[#F5F3EE] font-bold mb-3">1. Administrator Danych</h2>
                        <p>
                            Właścicielem marki <strong>LUMA<span className="text-[#FF4D00] ml-1">LAB</span></strong> i Administratorem Twoich danych osobowych jest firma:
                            <br /><br />
                            <strong>Sport Ekspert ELŻBIETA KLEMENCKA</strong>
                            <br />
                            NIP: 7291945050
                            <br />
                            ul. Rzgowska 109, 93-153 Łódź
                            <br /><br />
                            W sprawach dotyczących danych osobowych możesz skontaktować się z nami pisząc na adres: <a href="mailto:kontakt@lumalab.pl" className="text-[#FF4D00] hover:underline">kontakt@lumalab.pl</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-[#F5F3EE] font-bold mb-3">2. Jakie dane zbieramy i po co?</h2>
                        <p>
                            Nie zbieramy danych na zapas. Przetwarzamy tylko to, co sam nam podasz w formularzu kontaktowym:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8898aa]">
                            <li>Adres e-mail (żebyśmy mogli odpisać),</li>
                            <li>Imię (żebyśmy wiedzieli, jak się do Ciebie zwracać),</li>
                            <li>Treść wiadomości (żebyśmy mogli przygotować wycenę lub odpowiedź).</li>
                        </ul>
                        <p className="mt-2">
                            Podstawą prawną jest nasz prawnie uzasadniony interes (udzielenie odpowiedzi na Twoje zapytanie).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-[#F5F3EE] font-bold mb-3">3. Analityka i Pliki Cookies</h2>
                        <p>
                            Szanujemy Twoją prywatność, dlatego nasza strona korzysta z <strong>Cloudflare Web Analytics</strong>.
                            Jest to rozwiązanie pro-prywatne, które nie używa plików cookies („ciasteczek”) do śledzenia użytkowników
                            i nie zbiera danych osobowych. Widzimy tylko ogólne statystyki (np. liczba odwiedzin), które pomagają nam ulepszać stronę.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-[#F5F3EE] font-bold mb-3">4. Twoje Prawa</h2>
                        <p>
                            Ponieważ przetwarzamy Twoje dane, masz prawo do:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-[#8898aa]">
                            <li>Dostępu do swoich danych,</li>
                            <li>Ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
                            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
                        </ul>
                        <p className="mt-2">
                            Wystarczy, że napiszesz do nas maila. Jeśli uznasz, że łamiemy prawo, możesz wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-[#F5F3EE] font-bold mb-3">5. Bezpieczeństwo</h2>
                        <p>
                            Twoje dane są bezpieczne. Strona jest szyfrowana certyfikatem SSL (kłódka w pasku adresu), a obsługa poczty odbywa się przez bezpieczne serwery.
                            Nie sprzedajemy i nie udostępniamy Twoich danych nikomu z zewnątrz, chyba że wymagają tego przepisy prawa.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-[#333] mt-12">
                        <Link href="/" className="inline-flex items-center text-[#FF4D00] hover:text-white transition-colors font-bold uppercase text-sm tracking-widest">
                            ← Wróć do strony głównej
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}