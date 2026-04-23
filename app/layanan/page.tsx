"use client";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/ui/Navbar";
import Services from "../components/sections/Services";

export default function LayananPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      
      {/* Header Halaman Layanan */}
      <section className="relative pt-40 pb-20 px-6 bg-[#06373a] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#00f7a7 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6" data-aos="zoom-in">
            OUR <span className="text-slate-400 italic font-serif">SOLUTIONS.</span>
          </h1>
          <p className="text-emerald-50/60 max-w-2xl mx-auto text-lg" data-aos="fade-up">
            Solusi pemasaran kreatif dan media placement untuk mengakselerasi pertumbuhan brand Anda.
          </p>
        </div>
      </section>

      <div className="py-10">
        <Services />
      </div>

      {/* Footer Manual (Sesuai request kamu sebelumnya yang nggak mau pisah file) */}
      <footer className="w-full bg-[#020617] pt-24 pb-10 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto text-center">
           <div className="text-2xl font-black text-white mb-4">Dolan Yok Group<span className="text-[#00f7a7]">.</span></div>
           <p className="text-slate-500 text-[10px] tracking-[0.3em]">© 2026 DOLAN YOK GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
