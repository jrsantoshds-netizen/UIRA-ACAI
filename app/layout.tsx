import type {Metadata} from 'next';
import { Outfit, Space_Grotesk, Piedra, Bebas_Neue } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const piedra = Piedra({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-piedra',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'Uirá Açaí da Amazônia | O Melhor Açaí de Anori',
  description: 'Açaí Premium Orgânico. Sem Aditivos, Sem Conservantes. Peça já o seu!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${spaceGrotesk.variable} ${piedra.variable} ${bebasNeue.variable}`}>
      <body className="font-outfit antialiased bg-purple-950 text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
