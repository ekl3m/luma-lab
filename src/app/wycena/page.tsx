import { Metadata } from "next";
import OfertaView from "./wycenaView";

export const metadata: Metadata = {
    title: 'Wycena',
    description: 'Prześlij nam swój projekt lub opisz pomysł. Otrzymaj darmową wycenę druku 3D lub usługi projektowej w ciągu 24h.',
};

export default function OfertaPage() {
    return <OfertaView />;
}