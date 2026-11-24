import type { Metadata } from "next";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.jaiprakashnavendu.com").replace(/\/$/, "");
const title = "Dr. Jai Prakash Navendu | Hindi Poet & Author";
const description =
  "Explore the life and work of Dr. Jai Prakash Navendu Maharshi Avtar, Hindi Dalit poet and author. Browse 133 listed works, 114 catalogued book covers, biography, research and awards.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  applicationName: "Maharshi Navendu Literary Archive",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  creator: "Maharshi Navendu Literary Archive",
  publisher: "Maharshi Navendu Literary Archive",
  category: "Literature",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Dr. Jai Prakash Navendu Maharshi Avtar" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Maharshi Navendu Literary Archive",
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [{ url: "/author/maharshi-navendu.webp", alt: "Portrait of Hindi author Maharshi Navendu" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/author/maharshi-navendu.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
