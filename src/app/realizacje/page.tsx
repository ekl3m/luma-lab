import { Metadata } from "next";
import OfertaView from "./realizacjeView";

export const metadata: Metadata = {
    title: 'Realizacje',
    description: 'Galeria naszych projektów. Zobacz, co stworzyliśmy dla naszych klientów - od prototypów po gotowe części zamienne.',
};

export default function OfertaPage() {
    return <OfertaView />;
}