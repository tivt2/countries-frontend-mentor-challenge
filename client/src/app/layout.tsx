import '../styles/main.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
