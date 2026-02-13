import { Metadata } from "next";
import OfertaView from "./ofertaView";

export const metadata: Metadata = {
    title: 'Oferta',
    description: 'Sprawdź naszą ofertę: Druk 3D (FDM), usługi CNC i projektowanie CAD. Kompleksowe wsparcie inżynierskie.',
};

export default function OfertaPage() {
    return <OfertaView />;
}