import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProgressBar from '@/components/ProgressBar';
import 'tw-elements/dist/css/tw-elements.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vision Creations',
  description: 'Vision Creations, we design your dream',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
