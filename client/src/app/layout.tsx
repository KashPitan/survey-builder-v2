'use client';
import './globals.css';
import { Providers } from '@/redux/Provider';
import { GlobalStyles } from 'twin.macro';

export const metadata = {
  title: 'Survey Builder',
  description: 'Create your own surveys!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
