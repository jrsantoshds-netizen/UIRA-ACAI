"use client";

import { motion } from "motion/react";
import { MessageCircle, Leaf, Zap, Award, Star, Clock, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AcaiViralPage() {
  const WHATSAPP_NUMBER = "5592992689888";
  const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vim pela página e quero garantir meu Uirá Açaí Premium de Anori (R$ 20,00). 💜");
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  // Fake viral scarcity countdown
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 35); // 14 mins 35 secs
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
            className="object-cover object-center opacity-40 mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e0521]/80 via-[#1e0521]/50 to-[#1e0521]/90" />
        </div>
        
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#4a0e4e] rounded-full blur-[100px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-[#7e22ce] rounded-full blur-[120px] opacity-30 mix-blend-screen" />
        
        {/* Floating magical particles */}
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#a3e635] rounded-full blur-[1px]"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              boxShadow: "0 0 10px 2px rgba(163, 230, 53, 0.4)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 pb-40">
        
        {/* Header Hook */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 pb-4 text-center"
        >
          <div className="inline-block bg-[#a3e635]/10 border border-[#a3e635]/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-[#a3e635] mb-6 flex items-center justify-center gap-2 mx-auto w-max shadow-[0_0_15px_rgba(163,230,53,0.2)]">
            <Zap className="w-4 h-4 text-[#a3e635] fill-[#a3e635]" />
            Lote Exclusivo
          </div>
          
          <h1 className="font-sans text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-2 drop-shadow-lg">
            Uirá Açaí
            <span className="block text-[#a3e635] text-4xl md:text-5xl mt-1 tracking-tight">Da Amazônia</span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl font-medium border-t border-[#4a0e4e] pt-4 mt-4 w-max mx-auto">
            O Verdadeiro Açaí de Anori
          </p>
        </motion.div>

        {/* Product Card + CTA Combined */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="relative w-full my-12"
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-square md:aspect-[4/5] max-h-[500px] rounded-t-[32px] overflow-hidden z-10 border-x border-t border-[#4a0e4e]">
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 bg-[#1e0521]">
              <Leaf className="w-12 h-12 text-[#a3e635] mb-4 opacity-50" />
              <p className="text-sm text-purple-300">A imagem do seu Açaí aparecerá aqui.<br/>(Para testar, faça upload e renomeie para <span className="font-mono text-[#a3e635]">fundo.jpg</span>)</p>
            </div>
            
            <div className="relative w-full h-full bg-[#1e0521] isolate">
              <Image
                src="/acai2.png"
                alt="Uirá Açaí Premium de Anori"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                quality={85}
                className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110113] via-[#110113]/40 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#110113] via-[#110113]/10 to-transparent"></div>
            </div>
          </div>

          {/* Info Banner Container (Directly Above WhatsApp) */}
          <div className="w-full bg-gradient-to-b from-[#110113] to-[#1e0521] px-5 sm:px-8 py-6 relative z-10 border-x border-[#4a0e4e]">
             <div className="flex flex-row justify-between items-end w-full">
                {/* Left Side: Price */}
                <div>
                  <div className="bg-[#4a0e4e] text-white text-[10px] sm:text-xs font-bold uppercase px-3 py-1.5 mb-3 w-max tracking-[0.3em]">
                    Premium Quality
                  </div>
                  <div className="text-6xl sm:text-7xl font-black text-[#a3e635] drop-shadow-2xl tracking-tighter flex items-start leading-none">
                    R$ 20<span className="text-4xl sm:text-5xl leading-none mt-2">,00</span>
                  </div>
                </div>
                
                {/* Right Side: Tags */}
                <div className="flex flex-col gap-3 items-end">
                  <span className="bg-[#0b0113] text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] px-4 py-2.5 sm:py-3 text-white border border-white/5 shadow-xl flex items-center gap-3 w-max">
                    <div className="rounded-full border border-[#a3e635] p-0.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" /></div>
                    Orgânico
                  </span>
                  <span className="bg-[#0b0113] text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] px-4 py-2.5 sm:py-3 text-white border border-white/5 shadow-xl flex items-center gap-3 w-max">
                    <div className="rounded-full border border-[#a3e635] p-0.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" /></div>
                    S/ Aditivos
                  </span>
                </div>
             </div>
          </div>

          {/* Connected WhatsApp CTA Block */}
          <div className="w-full bg-[#a3e635] rounded-b-[32px] pt-8 pb-6 px-6 sm:px-8 text-black shadow-[0_20px_50px_rgba(74,14,78,0.3)] relative z-20">
             <div className="flex justify-between items-center">
               <div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">Peça pelo WhatsApp</div>
                 <div className="text-3xl font-black tracking-tighter">(92) 99268-9888</div>
               </div>
               <a 
                 href={WHATSAPP_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
               >
                 <MessageCircle className="w-7 h-7 text-[#a3e635] fill-current" />
               </a>
             </div>
          </div>
        </motion.div>

        {/* Scarcity Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#4a0e4e] to-[#1e0521] border border-purple-500/30 rounded-tl-[40px] rounded-br-[40px] p-4 flex items-center justify-between shadow-2xl mb-12 relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 pl-2">
            <div className="bg-[#a3e635]/20 p-3 rounded-full">
              <Clock className="w-6 h-6 text-[#a3e635] animate-pulse" />
            </div>
            <div>
              <p className="text-[#a3e635] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Demanda Alta</p>
              <p className="text-purple-200 text-sm opacity-90 font-medium">O lote atual esgota em:</p>
            </div>
          </div>
          <div className="bg-[#1e0521] px-5 py-3 rounded-tl-[20px] rounded-br-[20px] shadow-inner text-[#a3e635] text-2xl font-black font-sans tracking-widest relative overflow-hidden">
             {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          {[
            { icon: Leaf, title: "100% Orgânico", desc: "Sabor puro da floresta" },
            { icon: ShieldCheck, title: "Zero Conservantes", desc: "Sua saúde em 1º lugar" },
            { icon: Award, title: "Açaí de Anori", desc: "A melhor procedência" },
            { icon: Star, title: "Qualidade Premium", desc: "Corpo e espessura ideais" }
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (idx * 0.1) }}
              className="bg-[#1e0521] border border-purple-500/20 p-6 flex flex-col items-center text-center shadow-[-8px_8px_0px_0px_rgba(74,14,78,0.5)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[-12px_12px_0px_0px_rgba(163,230,53,0.3)] cursor-default rounded-tl-[30px] rounded-br-[30px]"
            >
              <div className="bg-[#4a0e4e] p-3 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-[#a3e635]" />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-2">{benefit.title}</h3>
              <p className="text-purple-300 text-xs font-medium">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews Hook */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mb-8"
        >
           <div className="flex items-center space-x-6 justify-center mb-8 opacity-80">
             <div className="h-px w-12 bg-[#a3e635]"></div>
             <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#a3e635]">Falam do Nosso Açaí</span>
             <div className="h-px w-12 bg-[#a3e635]"></div>
           </div>
           {/* Review Card */}
           <div className="bg-[#4a0e4e]/20 border border-[#a3e635]/30 rounded-tl-[40px] rounded-br-[40px] p-6 text-left relative shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#a3e635] text-[#a3e635]" />)}
              </div>
              <p className="text-purple-100 text-base italic mb-6">"O melhor açaí que já provei! Literalmente não tem mistura, é grosso e o sabor é impressionante. Sou cliente fixo agora."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#a3e635] overflow-hidden">
                  <Image src="https://picsum.photos/100/100?random=88" alt="Cliente" width={48} height={48} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-white text-sm font-black uppercase tracking-widest">Mateus S.</p>
                  <p className="text-[#a3e635] text-[10px] font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Comprador Verificado
                  </p>
                </div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Decorative Text Behind Everything */}
      <div className="absolute bottom-40 -left-10 text-[160px] font-black italic opacity-5 pointer-events-none select-none text-white whitespace-nowrap z-0">
        VIRAL AÇAÍ
      </div>

      {/* Adding shimmer keyframes via inline style or it can be done in global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </main>
  );
}
