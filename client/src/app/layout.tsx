'use client';
import './globals.css';
// import { Inter } from 'next/font/google';
import { Providers } from './redux/Provider';
import { GlobalStyles } from 'twin.macro';

// const inter = Inter({ subsets: ['latin'] });

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
      {/* <body className={inter.className}> */}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
