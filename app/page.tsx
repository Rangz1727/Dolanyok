"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/ui/Navbar";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";

// Import Swiper components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const PhotoSlider = dynamic(() => import('./components/sections/PhotoSlider'), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // List foto untuk slider
  const heroImages = [
    "/DOLANYOKGROUP.PNG",
    "/footage/ft1.jpg", 
    "/footage/ft2.jpeg",
    "/footage/ft5.jpg",      
  ];

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-quad'
    });

    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!isMounted) return <div className="bg-slate-950 min-h-screen" />;

  const fadeInVariant: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <main id="home" className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative font-sans">
      <Navbar />
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 bg-[#06373a] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f7a7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-3/5 text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/10 text-xs text-emerald-300 mb-6 font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00f7a7] animate-pulse"></span>
              Come grow with us
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-[1.1] tracking-tighter">
              Welcome to <br />
              <span className="text-white">Dolan Yok Group</span>
            </h1>
            
            <div className="flex gap-4 mb-8 opacity-60 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-400 rounded-full"></span> Surabaya Since 2022</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#00f7a7] rounded-full"></span> Malang Since 2024</span>
            </div>

            <p className="text-emerald-50/70 text-lg leading-relaxed mb-10 max-w-xl">
              Halo, perkenalkan kami Dolan Yok. Kami adalah media Lifestyle & City Guide. Melalui platform Instagram, TikTok, dan YouTube, kami menghadirkan konten video yang informatif, jujur, dan relevan dengan tren audiens saat ini.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/portfolio" className="bg-black/30 hover:bg-black/50 border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all text-white flex items-center gap-2 tracking-widest text-xs uppercase">
                🚀 View Our Work
              </a>
              <a href="https://wa.me/6285173341917" className="bg-[#00f7a7] hover:bg-emerald-400 text-[#06373a] px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#00f7a7]/20 flex items-center gap-2 tracking-widest text-xs uppercase">
                📩 Collaborate
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-2/5 order-1 lg:order-2 relative group flex justify-center w-full"
          >
            <div className="absolute -inset-10 bg-[#00f7a7] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative border-4 border-white rounded-[3rem] overflow-hidden shadow-2xl bg-slate-800 w-full max-w-[380px] aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={heroImages[currentImg]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
              </AnimatePresence>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? "w-6 bg-[#00f7a7]" : "w-2 bg-white/30"}`} />
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#00f7a7] p-4 rounded-full shadow-xl text-[#06373a] z-20 animate-bounce">
               <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION ABOUT US --- */}
      <section className="bg-[#f5f5f5] py-24 px-6 overflow-hidden relative">
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-9xl font-bold text-black opacity-[0.03] absolute left-0 right-0 -mt-16 pointer-events-none uppercase tracking-tighter font-sans">About Us</h2>
            <div className="relative">
               <span className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#06373a]">about</span>
               <span className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#06373a] ml-2">us</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-6 text-justify">
              <p>Kami adalah media Lifestyle & City Guide berbasis konten digital yang berfokus pada eksplorasi dan rekomendasi kuliner, wisata, dan gaya hidup di Surabaya, Malang, dan sekitarnya.</p>
              <p>Kami percaya setiap brand memiliki cerita unik. Kami membuka kerja sama kolaborasi kreatif sebagai bentuk dukungan terhadap pertumbuhan ekosistem UMKM dan brand lokal.</p>
            </div>
            <div className="flex justify-center relative">
               <div className="w-full max-w-[300px] aspect-square rounded-full bg-[#06373a]/5 absolute blur-3xl -z-10"></div>
               <img src="/aifto.png" alt="Team Dolan Yok" className="w-full max-w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"/>
            </div>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-6 lg:text-right text-justify">
              <p>Dengan pendekatan visual menarik dan storytelling autentik, kami membantu brand menjangkau audiens lebih luas, meningkatkan awareness, dan membangun kepercayaan konsumen secara natural.</p>
              <div className="pt-6 border-t border-slate-300">
                <p className="font-bold text-[#06373a] mb-2 text-lg uppercase tracking-wider">Misi kami sederhana:</p>
                <p className="text-slate-700">Menghubungkan brand dengan audiens yang tepat lewat kurasi pengalaman kota yang tak terlupakan.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION STATS --- */}
      <motion.section 
        className="relative py-20 px-6 overflow-hidden bg-slate-950/20 backdrop-blur-3xl border-y border-white/[0.05] z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto relative z-10" id="tentang">
          <Stats />
        </div>
      </motion.section>

      {/* --- SECTION FEATURES --- */}
      <motion.div 
        className="bg-slate-950 pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Features />
      </motion.div>

      {/* --- FOOTER --- */}
      <footer id="kontak" className="w-full bg-[#020617] pt-24 pb-10 px-6 overflow-hidden relative border-t border-slate-900 font-sans">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-left">
            <div className="lg:col-span-1">
              <div className="text-3xl font-black text-white mb-6 uppercase tracking-tighter font-sans">Dolan Yok Group<span className="text-[#00f7a7]">.</span></div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Platform media gaya hidup terdepan di Jawa Timur. Menghubungkan brand dengan audiens lewat kurasi pengalaman terbaik.</p>
              
              <div className="mb-8 p-4 bg-red-600/5 rounded-2xl border border-red-600/20 group hover:bg-red-600/10 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-[0.2em] block mb-1 font-sans">Production Hub</span>
                    <h5 className="text-white font-bold text-xs uppercase tracking-wider font-sans">Dolan Yok Nusantara</h5>
                  </div>
                  <a href="https://youtube.com/@dolanyoknusantara" target="_blank" className="p-2 bg-red-600 rounded-lg text-white hover:scale-110 transition-transform flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block font-sans">Surabaya</span>
                  <div className="flex gap-2 font-sans">
                    <a href="https://www.instagram.com/dolanyok.sub/" target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-500 hover:text-white transition-all flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.tiktok.com/@dolanyok.sub" target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-500 hover:text-white transition-all flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#00f7a7] uppercase tracking-widest block font-sans">Malang</span>
                  <div className="flex gap-2 font-sans">
                    <a href="https://www.instagram.com/dolanyok.malang/" target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-500 hover:text-white transition-all flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.tiktok.com/@dolanyok.malang" target="_blank" className="p-2 bg-slate-900 rounded-lg text-slate-500 hover:text-white transition-all flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs font-sans">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-widest font-sans">
                <li><a href="#home" className="hover:text-[#00f7a7]">Beranda</a></li>
                <li><a href="/portfolio" className="hover:text-[#00f7a7]">Portofolio</a></li>
                <li><a href="/layanan" className="hover:text-[#00f7a7]">Layanan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs font-sans">Layanan</h4>
              <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-widest font-sans">
                <li>Video Production</li>
                <li>Media Placement</li>                
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs font-sans">Collaborate</h4>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider font-sans">Interested in working together?</p>
                <a href="https://wa.me/6285173341917" className="w-full block py-3 bg-[#00f7a7] text-[#06373a] font-black text-xs text-center rounded-xl hover:scale-105 transition-all tracking-[0.2em] font-sans uppercase flex items-center justify-center gap-2">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                   SEND MESSAGE
                </a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-900 text-center text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase font-sans">© 2026 DOLAN YOK GROUP. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </main>
  );
}
