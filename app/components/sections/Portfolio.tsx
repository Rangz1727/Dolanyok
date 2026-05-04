"use client";
import React, { useState, useRef } from "react";

// --- DATABASE PORTFOLIO ---
const PORTFOLIO_DATA = [
  { 
    id: 1, 
    category: "Kuliner", 
    title: "Rumah Produksi Pie Nikmat di Surabaya", 
    img: "/porto/pie.png", 
    video: "/porto/hightlight/pie.mp4", // Path ke file video .mp4
    stats: "450k Views",
    link: "https://www.instagram.com/reel/DV-pVD8CWgx/" 
  },
  { 
    id: 4, 
    category: "Kuliner", 
    title: "PABRIK TANGO", 
    img: "/porto/tango.png", 
    video: "/porto/hightlight/PabrikOT.mp4", 
    stats: "63,9k Likes",
    link: "https://www.instagram.com/reel/DT4KdtsktBw/" 
  },
  { 
    id: 5, 
    category: "Kuliner", 
    title: "nyami cakeand dessert", 
    img: "/porto/cake.png", 
    video: "/porto/hightlight/dessert.mp4",
    stats: "63,9k Likes",
    link: "https://www.instagram.com/reel/DU9xX6gEr8X/" 
  },
  { 
    id: 6, 
    category: "Kuliner", 
    title: "Stepup Donut", 
    img: "/porto/donut.png", 
    video: "/porto/hightlight/donat.mp4",
    stats: "120k Shares",
    link: "https://www.instagram.com/reel/DT0FCk6kpwK/" 
  },
  { 
    id: 7, 
    category: "Kuliner", 
    title: "Bakso gerobakan pinggir jalan tapi yang beli sampek antri antri", 
    img: "/porto/bakso.png", 
    video: "/porto/hightlight/bakso.mp4",
    stats: "85k Likes",
    link: "https://www.instagram.com/reel/DWVScftTXxn/" 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

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
              {/* Image & Video Container */}
              <div className="relative overflow-hidden aspect-auto">
                {/* Static Image (Tampil awal) */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  loading="lazy"
                />

                {/* Video Spoiler (Play saat hover di Desktop) */}
                <video 
                  src={item.video} 
                  muted 
                  loop 
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                />

                {/* Overlay Dark Gradation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-500 font-medium">
            Belum ada cerita di kategori ini.
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Di mobile, video akan otomatis muncul saat ditekan (tap) */
          .group:active video {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}