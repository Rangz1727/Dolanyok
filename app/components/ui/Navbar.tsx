"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Portofolio", href: "/portfolio" },
    { name: "Layanan", href: "/layanan" },
  ];

  return (
    <>
      {/* OVERLAY BLUR */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-700 backdrop-blur-2xl bg-slate-950/60 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      />

      <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        isScrolled && !isOpen ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO - Menggunakan Gambar */}
          <a href="/" className="relative z-[110] block group">
            <img 
              src="/mainlgo.PNG" 
              alt="Dolan Yok Logo" 
              className={`transition-all duration-300 object-contain rounded-full ${
                isScrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-12 w-12 md:h-16 md:w-16"
              }`} 
            />
            {/* Efek Glow Tipis di sekeliling logo */}
            <div className="absolute inset-0 bg-[#f3b34c]/20 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xs font-bold text-slate-300 hover:text-[#00f7a7] transition-all tracking-[0.2em] uppercase"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6285173341917" 
              className="bg-white/5 border border-white/10 hover:bg-[#00f7a7] hover:text-black px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all"
            >
              Collaborate
            </a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] text-[#00f7a7] p-2 transition-transform active:scale-90"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
              <span className={`w-8 h-1 bg-[#00f7a7] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`w-8 h-1 bg-[#00f7a7] rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-8 h-1 bg-[#00f7a7] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>
          </button>

          {/* MOBILE CONTENT */}
          <div className={`fixed inset-0 z-[100] md:hidden flex flex-col items-center justify-center transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}>
            <div className="flex flex-col items-center gap-10">
              {/* Logo Besar saat menu mobile terbuka */}
              <img src="/mainlgo.PNG" className="w-24 h-24 rounded-full mb-6 border-2 border-[#f3b34c]/20 shadow-2xl shadow-[#f3b34c]/10" alt="Logo" />
              
              {menuItems.map((item, index) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white hover:text-[#00f7a7] transition-all transform tracking-tighter"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="/#kontak" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#00f7a7] text-black px-12 py-4 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(0,247,167,0.3)]"
              >
                COLLABORATE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
