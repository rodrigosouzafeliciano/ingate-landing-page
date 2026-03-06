import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InGate | A conexão inteligente",
  description: "A InGate é a plataforma definitiva para a gestão e intermediação tecnológica de resgates veiculares, conectando Seguradoras e Especialistas em Guincho.",
  openGraph: {
    title: "InGate | A conexão inteligente",
    description: "Plataforma definitiva para gestão de resgates veiculares",
    url: "https://ingate.com.br",
    siteName: "InGate",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InGate | A conexão inteligente",
    description: "Plataforma definitiva para gestão de resgates veiculares",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} font-display bg-background-light text-ingate-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
