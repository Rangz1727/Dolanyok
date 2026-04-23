"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Counter({ value, duration = 2.5 }: { value: number; duration?: number }) {
  // Menggunakan string agar bisa menampung format desimal ".0" jika diperlukan
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        import("framer-motion").then(m => {
          m.animate(0, value, {
            duration: duration,
            onUpdate: (latest) => {
              // Jika angka aslinya punya desimal (seperti 1.6 atau 30.5)
              if (value % 1 !== 0) {
                setDisplayValue(latest.toFixed(1));
              } else {
                // Jika angka bulat (seperti 15 atau 500)
                setDisplayValue(Math.round(latest).toString());
              }
            },
            ease: [0.16, 1, 0.3, 1],
          });
        });
      }}
    >
      {displayValue}
    </motion.span>
  );
}

export default function Stats() {
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const regions = [
    {
      id: "sub",
      city: "Surabaya",
      totalReach: 1.5,
      ig: "67k",
      tt: "70k",
      views: 9,
      brands: 500,
      igUrl: "https://www.instagram.com/dolanyok.sub/",
      ttUrl: "https://www.tiktok.com/@dolanyok.sub",
      accent: "text-blue-400",
      bgAccent: "bg-blue-400/10",
      border: "border-blue-500/20"
    },
    {
      id: "mlg",
      city: "Malang",
      totalReach: 1.6,
      ig: "15k",
      tt: "17k",
      views: 30.5,
      brands: 100,
      igUrl: "https://www.instagram.com/dolanyok.malang/",
      ttUrl: "https://www.tiktok.com/@dolanyok.malang",
      accent: "text-[#00f7a7]",
      bgAccent: "bg-[#00f7a7]/10",
      border: "border-[#00f7a7]/20"
    }
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-20 font-sans px-4">
      {/* HEADER */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
          Insight & <span className="text-gray-600 italic">Audience.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* REGIONAL CARDS */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`group relative z-10 bg-white/[0.03] backdrop-blur-3xl border ${region.border} p-8 md:p-10 rounded-[3rem] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl overflow-hidden h-fit cursor-default
                         lg:hover:scale-[1.03] 
                         lg:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)]
                         lg:hover:z-50`}
            >
              <div className="flex flex-col relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <h4 className={`text-4xl font-black tracking-tighter ${region.accent}`}>{region.city}</h4>
                  <div className={`w-2 h-2 rounded-full ${region.bgAccent.replace('/10', '')} animate-ping`}></div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                    <span className="text-white font-black text-lg">{region.ig}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">TikTok</span>
                    <span className="text-white font-black text-lg">{region.tt}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-white text-7xl font-black block tracking-tighter leading-none">
                    <Counter value={region.totalReach} />m<span className={region.accent}>+</span>
                  </span>
                  <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-2 block tracking-[0.3em]">Total Reach</span>
                </div>

                {/* EXPANDABLE SECTION */}
                <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
                  ${expandedMobile === region.id ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} 
                  lg:group-hover:max-h-[800px] lg:group-hover:opacity-100`}
                >
                  <div className="pt-10 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-6 rounded-[2rem] ${region.bgAccent} border border-white/5`}>
                        <span className="text-white text-4xl font-black block leading-none tracking-tighter">
                          <Counter value={region.views} />M+
                        </span>
                        <span className="text-slate-500 text-[8px] font-bold uppercase mt-2 block tracking-widest">Views</span>
                      </div>
                      <div className={`p-6 rounded-[2rem] ${region.bgAccent} border border-white/5`}>
                        <span className="text-white text-4xl font-black block leading-none tracking-tighter">
                          <Counter value={region.brands} />+
                        </span>
                        <span className="text-slate-500 text-[8px] font-bold uppercase mt-2 block tracking-widest">Partner Brands</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={region.igUrl} 
                        target="_blank" 
                        className="py-4 bg-white/5 border border-white/10 text-white/40 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center transition-all duration-300
                                   hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105"
                      >
                        Instagram
                      </a>
                      <a 
                        href={region.ttUrl} 
                        target="_blank" 
                        className="py-4 bg-white/5 border border-white/10 text-white/40 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center transition-all duration-300
                                   hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setExpandedMobile(expandedMobile === region.id ? null : region.id)}
                  className="lg:hidden mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 border-b border-white/10 pb-1 w-fit"
                >
                  {expandedMobile === region.id ? "Close" : "Insight Details"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* YOUTUBE HUB */}
        <div 
          className="lg:col-span-4 group relative z-10 bg-red-600/5 backdrop-blur-2xl border border-red-600/10 p-8 md:p-10 rounded-[3rem] h-fit self-start shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default
                     lg:hover:scale-[1.03] 
                     lg:hover:shadow-[0_40px_80px_-15px_rgba(220,38,38,0.4)]
                     lg:hover:z-50"
        >
           <div className="space-y-2 mb-12 relative z-10">
            <span className="text-red-500 font-black text-[10px] uppercase tracking-widest block">Youtube</span>
            <h3 className="text-white text-5xl font-black tracking-tighter leading-none uppercase">Dolan Yok <br/><span className="text-slate-700 italic">Nusantara.</span></h3>
          </div>
          
          <div className="mt-auto relative z-10">
            <div className="flex items-end gap-2 mb-8">
              <span className="text-white text-8xl font-black leading-none tracking-tighter">10K</span>
              <span className="text-red-500 font-bold text-xs uppercase tracking-widest mb-4">Subs</span>
            </div>
            <a 
              href="https://youtube.com/@dolanyoknusantara" 
              target="_blank" 
              className="block w-full py-5 bg-white/5 border border-white/10 text-white/40 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center transition-all duration-300 shadow-lg
                         hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105"
            >
                Visit Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
