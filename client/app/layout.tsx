import type { Metadata, Viewport } from "next";
import { Archivo, Sometype_Mono } from "next/font/google";
import ScrollReveal from "./components/ui/ScrollReveal";
import { CONTENT_WIDTH } from "./lib/container";
import { SITE, SITE_URL } from "./lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const DEFAULT_TITLE =
  "Servicios Nuñez — Electricista, plomero y gasista matriculado en CABA y GBA";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Servicios Nuñez",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#12233d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${archivo.variable} ${sometypeMono.variable} antialiased`}
    >
      <body className="font-sans text-ink">
        <ScrollReveal />
        <div className="min-h-screen w-full bg-paper">
          <div className={`mx-auto flex min-h-screen w-full flex-col pb-[118px] lg:pb-[96px] xl:pb-[104px] ${CONTENT_WIDTH}`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
