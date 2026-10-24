import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Talentsy Nexus — histórias que conectam",
    template: "%s | Talentsy Nexus",
  },
  description:
    "Webdramas verticais feitos para assistir em qualquer lugar. Histórias rápidas, novas perspectivas e o futuro da tecnologia.",
  openGraph: {
    title: "Talentsy Nexus — histórias que conectam",
    description: "Webdramas verticais. Histórias que conectam.",
    locale: "pt_BR",
    type: "website",
    siteName: "Talentsy Nexus",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
