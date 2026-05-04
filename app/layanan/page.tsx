"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Pastikan CSS AOS terimpor
import { motion } from "framer-motion"; // Impor Framer Motion
import Navbar from "../components/ui/Navbar";
import Services from "../components/sections/Services";

export default function LayananPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-quad' });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-[#00f7a7] selection:text-black">
      <Navbar />
      
      {/* --- HEADER LAYANAN --- */}
      <section className="relative pt-48 pb-24 px-6 bg-[#06373a] overflow-hidden flex items-center justify-center">
        {/* Animasi Background Pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0" 
          style={{ backgroundImage: `radial-gradient(#00f7a7 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
        ></motion.div>
        
        {/* Glow Effect Elegan */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00f7a7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-[#00f7a7] text-[10px] font-bold uppercase mb-6 block"
            >
              Strategic Partnerships
            </motion.span>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              OUR <span className="text-slate-400 italic font-serif opacity-80">SOLUTIONS.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-emerald-50 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            Solusi pemasaran kreatif dan media placement untuk mengakselerasi pertumbuhan brand Anda.
          </motion.p>

          {/* Garis Dekoratif Animasi */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] w-24 bg-[#00f7a7]/50 mx-auto mt-12"
          />
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#00f7a7] to-transparent"></div>
        </motion.div>
      </section>

      {/* --- ISI SERVICES --- */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-10 relative z-10"
      >
        <Services />
      </motion.div>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-[#020617] pt-32 pb-12 px-6 border-t border-slate-900 relative">
        {/* Glow Footer Halus */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[200px] bg-[#00f7a7]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <div className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">
               Dolan Yok Group<span className="text-[#00f7a7]">.</span>
             </div>
             <p className="text-slate-600 text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
               © 2026 DOLAN YOK GROUP. ALL RIGHTS RESERVED.
             </p>
           </motion.div>
        </div>
      </footer>
    </main>
  );
}