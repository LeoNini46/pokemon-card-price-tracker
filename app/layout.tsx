import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "PokéPrice — Card Price Tracker", description: "Tieni d'occhio la tua collezione di carte Pokémon." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
