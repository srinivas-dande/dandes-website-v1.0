import { Geist, Geist_Mono } from 'next/font/google'
import Script from "next/script";
import './globals.css'

import LeadSourceProvider from "@/components/LeadSourceProvider";

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Dandes Academy | AI/ML, System Design & DSA Courses',
  description:
    'Learn AI/ML, System Design, and DSA with live online classes, projects, practice, and interview prep. Build job-ready skills with Dandes Academy.',
  keywords: [
  'online tech courses',
  'live online tech courses',
  'AI and machine learning course',
  'system design course',
  'DSA course',
  'coding interview preparation',
  'software engineering courses',
  'AI courses online',
  'machine learning course',
  'artificial intelligence course',
  'online coding courses',
  'technical interview preparation',
  'software developer training',
  'career transition tech courses',
  'full stack software engineering',
  'live AI classes',
  'live DSA classes',
  'live system design classes',
  'Dandes Academy',
],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W865WG7N');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${geist.className} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W865WG7N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LeadSourceProvider>
          {children}
        </LeadSourceProvider>
      </body>
    </html>
  )
}