import type { Metadata, Viewport } from "next";
import { Archivo, Sometype_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Servicios Nuñez — Electricista, plomero y gasista matriculado",
  description:
    "Electricidad, plomería y gas en CABA y GBA. Urgencias 24 hs, presupuesto sin cargo y garantía por escrito. Escribinos por WhatsApp.",
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
      lang="es"
      className={`${archivo.variable} ${sometypeMono.variable} antialiased`}
    >
      <body className="font-sans text-ink">
        <div className="mx-auto flex min-h-screen w-full max-w-[520px] flex-col border-x border-line bg-paper pb-[118px] lg:max-w-none lg:border-x-0 lg:pb-0">
          {children}
        </div>
      </body>
    </html>
  );
}
