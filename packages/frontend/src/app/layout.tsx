import type { Metadata } from 'next';

import '@/styles/globals.css';
import { Providers } from '@/lib/providers';

export const metadata: Metadata = {
  title: 'World Artificer',
  description: 'AI-powered worldbuilding assistant that builds creative confidence and prevents creative paralysis',
  keywords: ['worldbuilding', 'creative writing', 'AI assistant', 'storytelling'],
  authors: [{ name: 'Jimmy McBride' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'World Artificer',
    description: 'AI-powered worldbuilding assistant that builds creative confidence',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Artificer',
    description: 'AI-powered worldbuilding assistant that builds creative confidence',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-sans antialiased">
        <Providers>
          <div className="min-h-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}