import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layoutShell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default:
      "False Ceiling, Insulation & Acoustic Solutions in Nepal | FalseCeilingNepal.shop",
    template: "%s | FalseCeilingNepal.shop",
  },
  description:
    "Premium false ceilings, acoustic panels, and thermal insulation with expert installation in Nepal. Free site visit—call +977 9851187267.",
  keywords: [
    "false ceiling Nepal",
    "gypsum ceiling price",
    "acoustic panels Nepal",
    "Rockwool insulation",
    "aluminum foil insulation",
    "T-grid ceiling",
    "studio acoustic Nepal",
  ],
  openGraph: {
    type: "website",
    url: "https://falseceilingnepal.shop",
    title: "False Ceiling, Insulation & Acoustic Solutions in Nepal",
    description:
      "Premium false ceilings, acoustic panels, and thermal insulation with expert installation in Nepal.",
    siteName: "FalseCeilingNepal.shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "False Ceiling, Insulation & Acoustic Solutions in Nepal",
    description:
      "Premium false ceilings, acoustic panels, and thermal insulation with expert installation in Nepal.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
