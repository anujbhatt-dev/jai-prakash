import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Jai Prakash Navendu Maharshi Avtar | Literary Archive",
  description:
    "Explore the literary archive of Dr. Jai Prakash Navendu Maharshi Avtar: Hindi Dalit literature, books, biography and academic research.",
  applicationName: "Maharshi Navendu Literary Archive",
  keywords: [
    "Maharshi Navendu",
    "Dr. Jai Prakash Navendu",
    "Hindi literature",
    "Dalit literature",
    "poet",
    "writer",
  ],
  openGraph: {
    title: "Dr. Jai Prakash Navendu Maharshi Avtar | Literary Archive",
    description:
      "A literary archive of Hindi Dalit poet, writer and thinker Dr. Jai Prakash Navendu Maharshi Avtar.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
