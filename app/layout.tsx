import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Senappe Software - Healthcare, PropTech & Enterprise AI Solutions',
  description:
    'Senappe Software builds AI-powered, blockchain-secured enterprise platforms for healthcare, property management, and digital transformation. Headquartered in Ethiopia, serving global markets.',
  icons: { icon: 'https://senappe.com/senappe.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme="dark">{children}</body>
    </html>
  );
}
