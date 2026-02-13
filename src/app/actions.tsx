'use server'

import { Resend } from 'resend';
import { ClientEmail } from '@/components/email/ClientEmail';
import { AdminEmail } from '@/components/email/AdminEmail';

function generateTicketId() {
    return `LUMA-${Date.now().toString(36).toUpperCase().slice(-4)}`;
}

export async function sendEmail(prevState: any, formData: FormData) {
    console.log("🚀 Server Action: Start (wersja React)...");

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("❌ CRITICAL: Brak klucza API!");
        return { success: false, error: 'Błąd serwera: Brak konfiguracji API.' };
    }

    const resend = new Resend(apiKey);
    const ticketId = generateTicketId();

    // Pobieranie danych
    const email = formData.get('email') as string;
    const name = formData.get('name') as string || "Klient";
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const technology = formData.get('technology') as string || "Nie dotyczy";
    const fileLink = formData.get('fileLink') as string || "Brak";

    if (!email || !message) {
        return { success: false, error: 'Wypełnij wymagane pola.' };
    }

    try {
        console.log(`📨 Wysyłam do admina (Ticket: ${ticketId})...`);

        // 1. Mail do Admina (ŁADNY REACT) 🎨
        const adminResult = await resend.emails.send({
            from: 'Luma Lab System <kontakt@lumalab.pl>',
            to: ['sq.programs@gmail.com'],
            replyTo: email,
            subject: `[${ticketId}] ${subject}`,
        
            react: <AdminEmail
                name={name}
                email={email}
                ticketId={ticketId}
                subject={subject}
                technology={technology}
                fileLink={fileLink}
                message={message}
            />,
        });

        if (adminResult.error) {
            console.error("❌ Błąd wysyłki do Admina:", adminResult.error);
            // Nie przerywamy, próbujemy wysłać do klienta, ale logujemy błąd
        }

        console.log(`📨 Wysyłam do klienta: ${email}...`);

        // 2. Mail do Klienta (ŁADNY REACT) 🎨
        const clientResult = await resend.emails.send({
            from: 'Luma Lab <kontakt@lumalab.pl>',
            to: [email],
            subject: `Przyjęliśmy zgłoszenie: ${ticketId}`,
            react: <ClientEmail
                name={name}
                ticketId={ticketId}
            />,
        });

        if (clientResult.error) {
            console.error("⚠️ Błąd wysyłki do Klienta:", clientResult.error);
        }

        console.log("✅ Sukces! Maile wysłane.");
        return { success: true, message: 'Wysłano pomyślnie!', ticketId };

    } catch (error: any) {
        console.error("🔥 Błąd wysyłki:", error);
        return { success: false, error: `Błąd wysyłki: ${error.message}` };
    }
}