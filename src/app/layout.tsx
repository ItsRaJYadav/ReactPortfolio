import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Navbar';

// import WhatsAppChatButton from '@/components/layout/WhatsApp';
import { siteConfig } from '@/constant/config';
import { ThemeProvider } from '@/utils/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '@RajYada74748169',
  },
  authors: [
    {
      name: 'Raj Yadav',
      url: 'https://www.instagram.com/its_raj_ydv',
    },
  ],
};
const GTM_ID = process.env.NEXT_PUBLIC_GTM !== undefined ? process.env.NEXT_PUBLIC_GTM : '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        
        <body>
          {/* <StarBackground /> */}
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            {children}
            <Footer />
            <Analytics mode='production' />
          </ThemeProvider>
          <GoogleTagManager gtmId={GTM_ID} />
        </body>
      </html>
    </>
  );
}
