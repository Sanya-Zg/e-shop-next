import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

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
      <body className="font-poppins antialiased">
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
