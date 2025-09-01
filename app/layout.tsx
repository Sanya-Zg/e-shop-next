import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shopcart online store',
  description: 'Shopcart online store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-poppins antialiased'>
        {children}
        </body>
    </html>
  );
}
