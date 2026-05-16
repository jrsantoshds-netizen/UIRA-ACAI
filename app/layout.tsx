import type {Metadata} from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Uirá Açaí da Amazônia | O Melhor Açaí de Anori',
  description: 'Açaí Premium Orgânico. Sem Aditivos, Sem Conservantes. Peça já o seu!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-outfit antialiased bg-purple-950 text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
