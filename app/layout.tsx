import Navbar from '@/components/Navbar';
import './globals.css';
import Providers from '@/components/Providers';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mayur Lalwani',
  description: 'Full-stack developer and indie builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          defer
          src='https://eu.umami.is/script.js'
          data-website-id='0bd010de-069e-437a-8c2a-e739e0eb5583'
        />
      </head>
      <body className='bg-white dark:bg-stone-900 text-neutral-900 dark:text-neutral-100'>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
