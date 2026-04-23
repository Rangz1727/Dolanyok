"use client";
import React, { useState } from "react";

// --- DATABASE PORTFOLIO (Tambahkan data baru di sini untuk jangka panjang) ---
const PORTFOLIO_DATA = [
  { 
    id: 1, 
    category: "Kuliner", 
    title: "Viral: Bebek Madura Hidden Gem di Surabaya", 
    img: "/profileabt.jpeg", 
    stats: "450k Views",
    link: "https://tiktok.com/..." 
  },
  { 
    id: 2, 
    category: "Travel", 
    title: "Panduan Lengkap Eksplorasi Bromo 2026", 
    img: "/porto/bromo.jpg", 
    stats: "120k Shares",
    link: "#" 
  },
  { 
    id: 3, 
    category: "Lifestyle", 
    title: "Spot Ngopi Estetik di Tengah Kota Malang", 
    img: "/porto/coffee.jpg", 
    stats: "85k Likes",
    link: "#" 
  },
  // Tinggal Copas objek di atas untuk nambah porto ke-5, ke-6, dst...
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  // Otomatis mengambil kategori unik dari data di atas
  const categories = ["All", ...Array.from(new Set(PORTFOLIO_DATA.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div data-aos="fade-right">
            <span className="text-[#00f7a7] font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Archive</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Selected <br /> <span className="text-slate-500 italic font-serif">Stories.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" data-aos="fade-left">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                  filter === cat 
                  ? "bg-[#00f7a7] border-[#00f7a7] text-[#06373a] shadow-[0_0_20px_rgba(0,247,167,0.3)]" 
                  : "bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((item) => (
            <a 
              href={item.link}
              key={item.id}
              target="_blank"
              className="relative group block overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 break-inside-avoid shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-auto">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay Dark Gradation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#00f7a7] text-[10px] font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">
                    {item.stats}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#00f7a7] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white/0 group-hover:text-[#00f7a7]/100 transition-all duration-500 mt-4 text-xs font-bold uppercase tracking-tighter">
                  View Content Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State (Jika filter kosong) */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-500 font-medium">
            Belum ada cerita di kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
