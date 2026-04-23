"use client";
import React from "react";

export default function PhotoSlider() {
  // Daftar logo - Pastikan path src benar sesuai file di folder public/logos/
  const logos = [
    { id: 1, src: "/logos/fore.png" },
    { id: 2, src: "/logos/puyo.png" },
    { id: 3, src: "/logos/bangor.png" },
    { id: 4, src: "/logos/kfc.png" },
    { id: 5, src: "/logos/pakuwon.png" },
    { id: 6, src: "/logos/nutrisari.png" },
    { id: 7, src: "/logos/tango.png" },
    { id: 8, src: "/logos/almaz.png" },
  ];

  // Duplikasi logo agar animasi tidak putus
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-transparent w-full overflow-hidden select-none">
      <div className="flex flex-col gap-8">
        
        {/* Judul Kecil */}
        <div className="text-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            Collaborate by 
          </span>
        </div>

        {/* Outer Container: Memastikan tidak ada scrollbar manual */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950/50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-slate-950/50 after:to-transparent">
          
          {/* Track Animasi */}
          <div className="flex w-max animate-marquee gap-8 items-center py-4">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 group"
              >
                {/* Frame Lingkaran Hijau Tua */}
                <div className="absolute inset-0 rounded-full border-[5px] border-[#06373a] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#00f7a7]"></div>
                
                {/* Konten Logo */}
                <div className="absolute inset-1.5 rounded-full bg-white overflow-hidden flex items-center justify-center p-3">
                  <img 
                    src={logo.src} 
                    alt="Partner" 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    // Mencegah gambar pecah saat loading
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

      {/* CSS Langsung di dalam file agar aman */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        /* Mencegah scrollbar muncul di semua browser */
        .overflow-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .overflow-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}