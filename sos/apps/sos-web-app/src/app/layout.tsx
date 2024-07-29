import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SOS Web App',
  description: 'SOS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
