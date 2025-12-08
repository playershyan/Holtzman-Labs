import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const BRAND = "Holtzman Labs";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Fast, modern websites delivered quickly by Shyan Akarsha. Most projects delivered in 1-2 weeks.";

export const metadata: Metadata = {
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL &&
    new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: `${BRAND} | Fast, modern websites in Sri Lanka`,
  description: siteDescription,
  keywords: ["Shyan Akarsha", "Holtzman Labs", "web developer", "Next.js", "fast websites"],
  openGraph: {
    title: `${BRAND} | Fast, modern websites`,
    description: siteDescription,
    locale: "en",
    type: "website",
    siteName: BRAND,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Fast, modern websites`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shyan Akarsha",
    jobTitle: "Founder, Akarsha Labs",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Sri Lanka",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sand text-slate-900`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
