"use client";
import React from "react";

export default function PhotoSlider() {
  const logos = [
    { id: 1, src: "/brand/1 (1).jpg" },
    { id: 2, src: "/brand/1 (1).PNG" },
    { id: 3, src: "/brand/1 (2).jpg" },
    { id: 4, src: "/brand/1 (2).PNG" },
    { id: 5, src: "/brand/1 (3).jpg" },
    { id: 6, src: "/brand/1 (3).PNG" },
    { id: 7, src: "/brand/1 (4).jpg" },
    { id: 8, src: "/brand/1 (4).PNG" },
    { id: 9, src: "/brand/1 (5).jpg" },
    { id: 10, src: "/brand/1 (5).PNG" },
    { id: 11, src: "/brand/1 (6).PNG" },
    { id: 12, src: "/brand/1 (6).jpg" },
    { id: 13, src: "/brand/1 (7).PNG" },
    { id: 14, src: "/brand/1 (7).jpg" },
    { id: 15, src: "/brand/1 (8).PNG" },
    { id: 16, src: "/brand/1 (8).jpg" },
    { id: 17, src: "/brand/1 (9).PNG" },
    { id: 18, src: "/brand/1 (9).jpg" },
    { id: 19, src: "/brand/1 (10).PNG" },
    { id: 20, src: "/brand/1 (10).jpg" },
    { id: 21, src: "/brand/1 (11).PNG" },
    { id: 22, src: "/brand/1 (11).JPG" },
    { id: 23, src: "/brand/1 (12).PNG" },
    { id: 24, src: "/brand/1 (13).PNG" },
    { id: 25, src: "/brand/1 (14).PNG" },
    { id: 26, src: "/brand/1 (15).PNG" },
    { id: 27, src: "/brand/1 (16).PNG" },

  
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-transparent w-full overflow-hidden select-none">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            Collaborate by 
          </span>
        </div>

        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-slate-950 after:to-transparent">
          
          <div className="flex w-max animate-marquee gap-8 items-center py-4">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 group"
              >
                {/* Frame Lingkaran */}
                <div className="absolute inset-0 rounded-full border-[5px] border-[#06373a] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#00f7a7] z-10"></div>
                
                <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt="Partner" 
                    // PERBAIKAN: Menghapus class 'grayscale' agar warna asli langsung muncul
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Logo";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
