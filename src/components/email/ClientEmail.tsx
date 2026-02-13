import * as React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Img,
    Row,
    Column,
} from '@react-email/components';

interface ClientEmailProps {
    name: string;
    ticketId: string;
}

export const ClientEmail = ({ name, ticketId }: ClientEmailProps) => (
    <Html>
        <Head />
        <Preview>Potwierdzenie zgłoszenia w Luma Lab</Preview>
        <Body style={main}>
            <Container style={container}>
                {/* LOGO + COMPANY NAME */}
                <Section style={logoContainer}>
                    <Row style={{ width: 'auto', display: 'inline-block' }}>
                        {/* Column 1: Picture */}
                        <Column style={{ width: '45px', paddingRight: '8px' }}>
                            <Img
                                src={`lumalab.pl/logoWhite.png`}
                                width="45"
                                height="45"
                                alt="Logo"
                                style={{ display: 'block' }}
                            />
                        </Column>

                        {/* Column 2: Text */}
                        <Column style={{ verticalAlign: 'middle' }}>
                            <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#F5F3EE', fontFamily: 'sans-serif', letterSpacing: '1px', lineHeight: '1' }}>
                                LUMA <span style={{ color: '#FF4D00' }}>LAB</span>
                            </span>
                        </Column>
                    </Row>
                </Section>

                <Heading style={h1}>Zgłoszenie Przyjęte</Heading>

                <Text style={text}>
                    Cześć <strong>{name}</strong>,
                </Text>

                <Text style={text}>
                    Dziękujemy za kontakt. Twoje zapytanie trafiło do naszego systemu i otrzymało numer:
                </Text>

                <Section style={codeBox}>
                    <Text style={codeText}>{ticketId}</Text>
                </Section>

                <Text style={text}>
                    Nasz zespół inżynierów właśnie analizuje Twoje zgłoszenie. Wstępną wycenę lub pytania techniczne otrzymasz zazwyczaj w ciągu <strong>24 godzin</strong>.
                </Text>

                <Hr style={hr} />

                <Text style={footer}>
                    Luma Lab - Precision Engineering<br />
                    Ul. Rzgowska 109, Łódź, 93-153, Polska | <a href="https://lumalab.pl" style={link}>lumalab.pl</a>
                </Text>
            </Container>
        </Body>
    </Html>
);

// Styles
const main = {
    backgroundColor: '#1E2022',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '560px',
};

const logoContainer = {
    padding: '20px 0',
    textAlign: 'center' as const,
};

const h1 = {
    color: '#F5F3EE',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '30px 0',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
};

const text = {
    color: '#cccccc',
    fontSize: '16px',
    lineHeight: '26px',
};

const codeBox = {
    background: 'rgba(255, 77, 0, 0.1)',
    borderRadius: '4px',
    border: '1px solid #FF4D00',
    padding: '10px',
    textAlign: 'center' as const,
    margin: '20px 0',
};

const codeText = {
    color: '#FF4D00',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    margin: '0',
    letterSpacing: '2px',
};

const hr = {
    borderColor: '#333',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
};

const link = {
    color: '#FF4D00',
};