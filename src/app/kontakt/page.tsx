import { Metadata } from "next";
import OfertaView from "./kontaktView";

export const metadata: Metadata = {
    title: 'Kontakt',
    description: 'Skontaktuj się z nami. Masz pytanie techniczne? Potrzebujesz konsultacji? Jesteśmy do Twojej dyspozycji.',
};

export default function OfertaPage() {
    return <OfertaView />;
}