import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App Site',
  description: 'App Site Resources',
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'twitter:image': 'https://www.shopify.com/stock-photos/village',
    'twitter:card': 'summary_large_image',
    'og:url': 'example.pro',
    'og:image': 'https://www.shopify.com/stock-photos/village',
    'og:type': 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  );
}
