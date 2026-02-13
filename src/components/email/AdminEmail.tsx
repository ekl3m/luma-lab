import * as React from 'react';
import {
    Html, Body, Head, Heading, Container, Preview, Section, Text, Hr, Row, Column
} from '@react-email/components';

interface AdminEmailProps {
    name: string;
    email: string;
    ticketId: string;
    subject: string;
    technology: string;
    fileLink: string;
    message: string;
}

export const AdminEmail = ({
    name, email, ticketId, subject, technology, fileLink, message
}: AdminEmailProps) => (
    <Html>
        <Head />
        <Preview>Kontakt od klienta - {subject}</Preview>
        <Body style={main}>
            <Container style={container}>

                <Heading style={h1}>NOWE ZGŁOSZENIE</Heading>

                <Section style={headerBox}>
                    <Text style={headerId}>{ticketId}</Text>
                    <Text style={headerSub}>{subject}</Text>
                </Section>

                <Section style={section}>
                    <Row style={row}>
                        <Column style={columnLabel}>Klient:</Column>
                        <Column style={columnValue}>{name}</Column>
                    </Row>
                    <Row style={row}>
                        <Column style={columnLabel}>Email:</Column>
                        <Column style={columnValueLink}>
                            <a href={`mailto:${email}`} style={{ color: '#FF4D00' }}>{email}</a>
                        </Column>
                    </Row>
                    <Row style={row}>
                        <Column style={columnLabel}>Technologia:</Column>
                        <Column style={columnValue}>{technology}</Column>
                    </Row>
                </Section>

                <Section style={section}>
                    <Text style={label}>WIADOMOŚĆ:</Text>
                    <Text style={messageText}>{message}</Text>
                </Section>

                <Section style={section}>
                    <Text style={label}>PLIKI:</Text>
                    <div style={fileBox}>
                        {fileLink && fileLink.length > 5 && fileLink !== "Brak linku" && fileLink !== "Brak" ? (
                            <a href={fileLink} style={linkButton}>OTWÓRZ PLIKI 📂</a>
                        ) : (
                            <span style={{ color: '#666' }}>Brak załączonego linku</span>
                        )}
                    </div>
                </Section>

            </Container>
        </Body>
    </Html>
);

// Styles

const main = {
    backgroundColor: '#000000',
    fontFamily: 'monospace, sans-serif',
    color: '#eee',
};

const container = {
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '600px',
    borderLeft: '1px solid #333',
    borderRight: '1px solid #333',
};

const h1 = {
    color: '#FF4D00',
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '4px',
    margin: '0 0 20px',
};

const headerBox = {
    background: '#111',
    padding: '20px',
    borderLeft: '4px solid #FF4D00',
    marginBottom: '30px',
};

const headerId = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    margin: '0',
};

const headerSub = {
    fontSize: '14px',
    color: '#888',
    marginTop: '5px',
    textTransform: 'uppercase' as const,
};

const section = {
    marginBottom: '20px',
};

const row = {
    borderBottom: '1px solid #222',
    padding: '10px 0',
};

const columnLabel = {
    width: '30%',
    color: '#888',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    padding: '10px 0',
};

const columnValue = {
    width: '70%',
    color: '#fff',
    fontSize: '14px',
    padding: '10px 0',
};

const columnValueLink = {
    ...columnValue,
    color: '#FF4D00',
};

const hr = {
    borderColor: '#333',
    margin: '30px 0',
};

const label = {
    color: '#FF4D00',
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
};

const messageText = {
    background: '#111',
    padding: '15px',
    color: '#ccc',
    fontSize: '14px',
    lineHeight: '24px',
    borderRadius: '4px',
};

const fileBox = {
    padding: '10px 0',
};

const linkButton = {
    background: '#FF4D00',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    borderRadius: '4px',
    display: 'inline-block',
};

export default AdminEmail;