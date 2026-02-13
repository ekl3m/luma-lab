'use server'

import { Resend } from 'resend';

function generateTicketId() {
    const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
    const random = Math.random().toString(36).toUpperCase().slice(-2);
    return `#LL-${timestamp}${random}`;
}

export async function sendEmail(prevState: any, formData: FormData) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { success: false, error: 'Błąd konfiguracji API.' };

    const resend = new Resend(apiKey);
    const ticketId = generateTicketId();

    const email = formData.get('email') as string;
    const name = formData.get('name') as string || "Klient";
    const subject = formData.get('subject') as string || "Zgłoszenie";
    const message = formData.get('message') as string;

    // Extended form fields (optional)
    const technology = formData.get('technology') as string || "Nie dotyczy";
    const fileLink = formData.get('fileLink') as string || "Brak";

    if (!email || !message) return { success: false, error: 'Wypełnij pola.' };

    try {
        // ADMIN EMAIL HTML
        const adminHtml = `
            <!DOCTYPE html>
            <html lang="pl">
            <head><meta charset="UTF-8"></head>
            <body style="background-color: #000000; font-family: monospace, sans-serif; color: #eee; margin: 0; padding: 0;">
                <div style="margin: 0 auto; padding: 40px 20px; max-width: 600px; border-left: 1px solid #333; border-right: 1px solid #333;">
                    <h1 style="color: #FF4D00; font-size: 20px; font-weight: bold; letter-spacing: 4px; margin: 0 0 20px;">NOWE ZGŁOSZENIE</h1>
                    
                    <div style="background: #111; padding: 20px; border-left: 4px solid #FF4D00; margin-bottom: 30px;">
                        <p style="font-size: 24px; font-weight: bold; color: #fff; margin: 0;">${ticketId}</p>
                        <p style="font-size: 14px; color: #888; margin: 5px 0 0; text-transform: uppercase;">${subject}</p>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="border-bottom: 1px solid #222; padding: 10px 0; display: flex;">
                            <span style="width: 30%; color: #888; font-size: 12px; text-transform: uppercase;">Klient:</span>
                            <span style="width: 70%; color: #fff; font-size: 14px;">${name}</span>
                        </div>
                        <div style="border-bottom: 1px solid #222; padding: 10px 0; display: flex;">
                            <span style="width: 30%; color: #888; font-size: 12px; text-transform: uppercase;">Email:</span>
                            <span style="width: 70%; font-size: 14px;"><a href="mailto:${email}" style="color: #FF4D00; text-decoration: none;">${email}</a></span>
                        </div>
                        <div style="border-bottom: 1px solid #222; padding: 10px 0; display: flex;">
                            <span style="width: 30%; color: #888; font-size: 12px; text-transform: uppercase;">Technologia:</span>
                            <span style="width: 70%; color: #fff; font-size: 14px;">${technology}</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <span style="color: #FF4D00; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: block;">WIADOMOŚĆ:</span>
                        <div style="background: #111; padding: 15px; color: #ccc; font-size: 14px; line-height: 24px; border-radius: 4px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <span style="color: #FF4D00; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: block;">PLIKI:</span>
                        <div style="padding: 10px 0;">
                            ${(fileLink && fileLink.length > 5 && fileLink !== "Brak")
                ? `<a href="${fileLink}" style="background: #FF4D00; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 4px; display: inline-block;">OTWÓRZ PLIKI 📂</a>`
                : `<span style="color: #666;">Brak załączonego linku</span>`}
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // --- CLIENT EMAIL HTML ---
        const clientHtml = `
            <!DOCTYPE html>
            <html lang="pl">
            <head><meta charset="UTF-8"></head>
            <body style="background-color: #1E2022; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; margin: 0; padding: 0;">
                <div style="margin: 0 auto; padding: 40px 20px; max-width: 560px;">
                    <div style="padding: 30px 0; text-align: center;">
                        <a href="https://lumalab.pl" target="_blank" style="text-decoration: none;">
                            <img
                                src="https://lumalab.pl/logoBanner.png"
                                width="280"
                                alt="Luma Lab Logo"
                                style="display: inline-block; border: 0; outline: none; text-decoration: none; margin: 0 auto;"
                            />
                        </a>
                    </div>
                    <h1 style="color: #F5F3EE; font-size: 24px; font-weight: bold; text-align: center; margin: 30px 0; text-transform: uppercase; letter-spacing: 2px;">Zgłoszenie Przyjęte</h1>
                    <p style="color: #cccccc; font-size: 16px; line-height: 26px;">Cześć <strong>${name}</strong>,</p>
                    <p style="color: #cccccc; font-size: 16px; line-height: 26px;">Dziękujemy za kontakt. Twoje zapytanie trafiło do naszego systemu i otrzymało numer:</p>
                    <div style="background: rgba(255, 77, 0, 0.1); border-radius: 4px; border: 1px solid #FF4D00; padding: 10px; text-align: center; margin: 20px 0;">
                        <p style="color: #FF4D00; font-size: 24px; font-weight: bold; font-family: monospace; margin: 0; letter-spacing: 2px;">${ticketId}</p>
                    </div>
                    <p style="color: #cccccc; font-size: 16px; line-height: 26px;">Nasz zespół inżynierów właśnie analizuje Twoje zgłoszenie. Wstępną wycenę lub pytania techniczne otrzymasz zazwyczaj w ciągu <strong>24 godzin</strong>.</p>
                    <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
                    <p style="color: #8898aa; font-size: 12px; line-height: 16px; text-align: center;">
                        Luma Lab - Precision Engineering<br />
                        Ul. Rzgowska 109, Łódź, 93-153, Polska | <a href="https://lumalab.pl" style="color: #FF4D00; text-decoration: none;">lumalab.pl</a>
                    </p>
                </div>
            </body>
            </html>
        `;

        // Sending email to Admin
        await resend.emails.send({
            from: 'Luma Lab System <kontakt@lumalab.pl>',
            to: ['info@sportekspert.com.pl'],
            replyTo: email,
            subject: `[${ticketId}] LUMA LAB: ${subject}`,
            html: adminHtml,
        });

        // Sending confirmation email to Client
        await resend.emails.send({
            from: 'Luma Lab <kontakt@lumalab.pl>',
            to: [email],
            subject: `Otrzymaliśmy Twoją wiadomość: ${ticketId}`,
            html: clientHtml,
        });

        return { success: true, message: 'Wysłano!', ticketId };
    } catch (e: any) {
        return { success: false, error: 'Błąd: ' + e.message };
    }
}