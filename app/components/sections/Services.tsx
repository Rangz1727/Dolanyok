"use client";
import React from "react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Social Media Placement",
      desc: "Promosikan brand Anda melalui jaringan media Dolan Yok (TikTok, Instagram, YouTube) dengan jangkauan audiens yang luas dan tertarget di Jawa Timur.",
      features: ["Review Autentik", "Link Bio Integration"],
      icon: "📣"
    },
    {
      id: "02",
      title: "Creative Video Production",
      desc: "Produksi konten visual berkualitas tinggi mulai dari Cinematic Reels, hingga Short Movie branding yang menggugah emosi.",
      features: ["Professional Equipment", "Storytelling Script"],
      icon: "🎬"
    },
        {
      id: "03",
      title: "Event & Activation",
      desc: "Kami meliput aktivasi offline untuk brand Anda, mulai dari Grand Opening, Gathering Komunitas, hingga City Activation.",
      features: ["Live Coverage", "Influencer Gathering"],
      icon: "📍"
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="max-w-xl text-center md:text-left" data-aos="fade-right">
            <span className="text-[#00f7a7] font-bold text-sm tracking-[0.4em] uppercase mb-4 block">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Grow Your Brand <br /> 
              <span className="text-slate-500 font-serif italic">With Creativity.</span>
            </h2>
          </div>
          <div className="hidden md:block" data-aos="fade-left">
            <div className="w-24 h-24 rounded-full border border-slate-800 flex items-center justify-center animate-spin-slow">
               <svg className="w-10 h-10 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v1m6 1.5l-1 1m3.5 5.5h-1m-1.5 6l-1-1m-5.5 3.5v-1m-6-1.5l1-1m-3.5-5.5h1m1.5-6l1 1" />
               </svg>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-[#00f7a7]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Number (Watermark) */}
              <span className="absolute top-10 right-10 text-8xl font-black text-white/[0.03] group-hover:text-[#00f7a7]/5 transition-colors">
                {service.id}
              </span>

              <div className="relative z-10">
                <div className="text-5xl mb-8 transform transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00f7a7] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Tags Layanan */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feat, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#00f7a7]/10 group-hover:text-[#00f7a7] transition-all"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00f7a7]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-1 bg-gradient-to-r from-slate-900 via-[#06373a] to-slate-900 rounded-[3rem]" data-aos="zoom-in">
           <div className="bg-slate-950 rounded-[2.9rem] px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">Interested in working together??</h4>
                <p className="text-slate-400">Mari kolaborasikan visi Anda dengan kreativitas media kami.</p>
              </div>
              <a href="#kontak" className="px-10 py-4 bg-[#00f7a7] text-[#06373a] font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,247,167,0.3)]">
                SEND MASSAGE
              </a>
           </div>
        </div>

      </div>
      
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
