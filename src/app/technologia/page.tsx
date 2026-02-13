import { Metadata } from "next";
import OfertaView from "./technologiaView";

export const metadata: Metadata = {
    title: 'Technologia',
    description: 'Zobacz nasz park maszynowy. Laser CO2 100W, drukarki Bambu Lab oraz stacje robocze CAD. Najwyższa jakość wydruków i precyzja.',
};

export default function OfertaPage() {
    return <OfertaView />;
}