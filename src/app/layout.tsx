import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Example Parallax',
  description: 'Example for Hello Again'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
