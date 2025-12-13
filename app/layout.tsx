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
  "Professional websites for law firms, dental practices, restaurants, and local businesses in Sri Lanka. Build trust, reach more customers, and grow your business online. Delivered in 1-2 weeks.";

export const metadata: Metadata = {
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL &&
    new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: `${BRAND} | Professional Websites for Sri Lankan Businesses`,
  description: siteDescription,
  keywords: [
    "website design Sri Lanka",
    "web developer Sri Lanka",
    "business website",
    "law firm website",
    "dental practice website",
    "restaurant website",
    "local business website",
    "professional website",
    "Holtzman Labs",
  ],
  openGraph: {
    title: `${BRAND} | Professional Websites for Sri Lankan Businesses`,
    description: siteDescription,
    locale: "en",
    type: "website",
    siteName: BRAND,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Professional Websites for Sri Lankan Businesses`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Holtzman Labs",
    description: siteDescription,
    founder: {
      "@type": "Person",
      name: "Shyan Akarsha",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    serviceType: "Website Development",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
