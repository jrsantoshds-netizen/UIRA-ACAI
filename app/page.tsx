"use client";

import { motion } from "motion/react";
import {
  MessageCircle,
  Leaf,
  Zap,
  Award,
  Star,
  Clock,
  ShieldCheck,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const UiraRune = () => (
  <svg 
    viewBox="0 0 210 110" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="11" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-[12vw] sm:h-16 md:h-20 lg:h-[6.5rem] w-auto drop-shadow-md text-white/90 shrink-0"
  >
    {/* U */}
    <path d="M 22 18 L 20 75 Q 31 78 43 78 L 45 20" />
    {/* I */}
    <path d="M 64 22 L 61 76" />
    {/* UI Dash */}
    <path d="M 20 96 L 68 94" />
    
    {/* R */}
    <path d="M 95 18 L 92 88" />
    <path d="M 95 18 L 122 48 L 94 68" />
    <path d="M 122 48 L 128 90" />
    
    {/* A */}
    <path d="M 155 85 L 175 22 L 195 85" />
    {/* A Dash */}
    <path d="M 152 98 L 198 96" />
    {/* A Accent */}
    <path d="M 188 5 L 172 13" />
  </svg>
);

export default function AcaiViralPage() {
  const WHATSAPP_NUMBER = "+559292869888";
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Olá! Vim pela página e quero garantir meu Uirá Açaí Premium de Anori (R$ 20,00). 💜",
  );
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-[100dvh] bg-[#1e0521] text-white overflow-x-hidden font-sans relative flex flex-col">
      {/* Background Graphic Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#1e0521]">
        {/* Imagem de Fundo inserida pelo usuário */}
        <div className="absolute inset-0">
          <Image
            src="/fundo.jpg"
            alt="Fundo do Açaí"
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110113]/90 via-[#1e0521]/70 to-[#110113]/95" />
        </div>

        <div className="absolute top-[-10%] sm:top-[-20%] right-[-10%] sm:right-[-20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#4a0e4e] rounded-full blur-[100px] sm:blur-[140px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-[-10%] sm:bottom-[-20%] left-[-10%] sm:left-[-20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#7e22ce] rounded-full blur-[120px] sm:blur-[160px] opacity-30 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 pb-40">
        {/* Header Hook */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 pb-4 text-center"
        >
          
          <p className="text-white/60 text-base md:text-lg font-light tracking-wide mx-auto mt-4">
           
          </p>
        </motion.div>

        {/* Product Card + CTA Combined */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="relative w-full my-10 rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm"
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/5] md:aspect-square bg-black/20 overflow-hidden isolate group">
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 bg-[#1e0521]">
              <Leaf className="w-12 h-12 text-[#a3e635] mb-4 opacity-50" />
              <p className="text-sm text-white/50">
                A imagem do seu Açaí aparecerá aqui.
                <br />
                (Para testar, faça upload e renomeie para <span className="font-mono text-[#a3e635]">fundo.jpg</span>)
              </p>
            </div>

            <Image
              src="/acai2-s-p.png"
              alt="Uirá Açaí Premium de Anori"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              quality={85}
              className="relative z-10 object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 opacity-80 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
          </div>

          {/* Info Banner Container */}
          <div className="w-full bg-[#110113]/90 backdrop-blur-md px-5 sm:px-8 py-6 relative z-30">
            <div className="flex flex-row justify-between items-center w-full gap-4">
              {/* Left Side: Price */}
              <div className="shrink-0">
                <div className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-1">
                  Premium Quality
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter leading-none group cursor-default">
                  R$ 20<span className="text-3xl sm:text-4xl text-[#a3e635]">,00</span>
                </div>
              </div>

              {/* Right Side: Tags */}
              <div className="flex flex-col gap-2.5 items-end shrink-0">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold text-white/90 tracking-wider">Orgânico</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span className="text-[10px] sm:text-xs uppercase font-semibold text-white/90 tracking-wider">S/ Aditivos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connected WhatsApp CTA Block */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block bg-[#a3e635] p-6 text-black hover:bg-[#b5f14a] transition-colors relative z-40"
          >
            <div className="flex justify-between items-center gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">
                  Peça pelo WhatsApp
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tighter">
                  (92) 99268-9888
                </div>
              </div>
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-7 h-7 text-[#a3e635] fill-current" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-16">
          {[
            {
              icon: Leaf,
              title: "100% Orgânico",
              desc: "Sabor puro da floresta",
            },
            {
              icon: ShieldCheck,
              title: "Zero Conservantes",
              desc: "Sua saúde em 1º lugar",
            },
            {
              icon: Award,
              title: "Açaí de Anori",
              desc: "A melhor procedência",
            },
            {
              icon: Star,
              title: "Premium",
              desc: "Corpo e espessura ideais",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:bg-white/10 cursor-default"
            >
              <div className="bg-[#110113] border border-white/5 p-3 rounded-full mb-3 shadow-inner">
                <benefit.icon className="w-5 h-5 text-[#a3e635]" />
              </div>
              <h3 className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-1.5">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-[10px] sm:text-xs font-light">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Text Behind Everything */}
      <div className="absolute bottom-40 -left-10 text-[160px] font-black italic opacity-5 pointer-events-none select-none text-white whitespace-nowrap z-0">
        VIRAL AÇAÍ
      </div>

      {/* Adding shimmer keyframes via inline style or it can be done in global CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
    </main>
  );
}
