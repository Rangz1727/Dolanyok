"use client";
import { useEffect } from "react";
import dynamic from 'next/dynamic';
import AOS from "aos";
import "aos/dist/aos.css"; // Pastikan CSS AOS terimpor
import { motion } from "framer-motion"; // Impor Framer Motion
import Navbar from "../components/ui/Navbar";
import Portfolio from "../components/sections/Portfolio";

const PhotoSlider = dynamic(() => import('../components/sections/PhotoSlider'), { ssr: false });

export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-quad' });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-[#00f7a7] selection:text-black">
      <Navbar />
      
      {/* --- HEADER PORTFOLIO --- */}
      <section className="relative pt-48 pb-24 px-6 bg-[#06373a] overflow-hidden">
        {/* Animasi Background Pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0" 
          style={{ backgroundImage: `radial-gradient(#00f7a7 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6">
              OUR <span className="text-slate-400 italic font-serif opacity-80">ARCHIVE.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-emerald-50 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide"
          >
            Kumpulan cerita dan dokumentasi perjalanan Dolan Yok dalam mengeksplorasi Jawa Timur.
          </motion.p>

          {/* Garis Dekoratif Animasi */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-[#00f7a7] mx-auto mt-10 rounded-full"
          />
        </div>

        {/* Glow Effect Elegan */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00f7a7]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* --- ISI PORTFOLIO --- */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-10"
      >
        <Portfolio />
      </motion.div>

      {/* --- PHOTO SLIDER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-slate-800 bg-slate-900/30 backdrop-blur-sm p-4 md:p-8 shadow-2xl"
        >
          <PhotoSlider />
        </motion.div>
      </div>

      {/* --- FOOTER --- */}
      <footer id="kontak" className="w-full bg-[#020617] pt-24 pb-10 px-6 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00f7a7]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-3xl font-black text-white mb-6">Dolan Yok<span className="text-[#00f7a7]">.</span></div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Platform media gaya hidup terdepan di Jawa Timur. Menghubungkan brand dengan audiens lewat kurasi pengalaman terbaik.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="/" className="hover:text-[#00f7a7] transition-colors">About Us</a></li>
                <li><a href="/portfolio" className="hover:text-[#00f7a7] transition-colors">Portfolio</a></li>
                <li><a href="/layanan" className="hover:text-[#00f7a7] transition-colors">Layanan</a></li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Layanan</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>Video Production</li>
                <li>Media Placement</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Collaborate</h4>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 backdrop-blur-md">
                <a href="https://wa.me/6285173341917" className="w-full block py-3 bg-[#00f7a7] text-[#06373a] font-black text-xs text-center rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#00f7a7]/10">SEND MESSAGE</a>
              </div>
            </motion.div>
          </div>
          
          <div className="pt-10 border-t border-slate-900 text-center text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase">
            © 2026 DOLAN YOK GROUP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}