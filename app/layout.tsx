import './global.scss';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';


export const metadata: Metadata = {
  title: 'Stories Unpacked- Ananya Singh',
  description: 'Army life blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#4B5320", color: "#ffffff" }}>
        {children}
      </body>
    </html>
  );
}