"use client";

export default function Features() {
  const highlights = [
    { title: "90M+", desc: "Digital Impressions", color: "text-blue-500" },
    { title: "Multi", desc: "Category Platform", color: "text-[#00f7a7]" },
    { title: "City", desc: "Trendsetter", color: "text-orange-500" },
  ];

  const points = [
    {
      icon: "🍽️",
      title: "Culinary Hub",
      desc: "Menjelajahi destinasi kuliner di setiap sudut kota mulai dari kuliner viral & hiden gem yang belum terjamah"
    },

    {
      icon: "🌆",
      title: "City Exploration",
      desc: "Menjelajahi setiap sudut kota, mulai dari destinasi wisata hits hingga hidden gem yang belum terjamah."
    },
    {
      icon: "🎭",
      title: "Lifestyle",
      desc: "Liputan tren lifestyle anak muda terkini."
    },
    {
      icon: "📈",
      title: "Brand Awareness",
      desc: "Membantu berbagai lini bisnis (F&B, Fashion, Hospitality) untuk terkoneksi dengan audiens yang tepat."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Kolom Kiri: Media Positioning */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <span className="text-[#00f7a7] font-semibold text-sm tracking-[0.3em] uppercase">The Ultimate Guide</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-white leading-tight">
            Napas Kota dalam <br /> 
            <span className="bg-gradient-to-r from-[#00f7a7] to-cyan-400 bg-clip-text text-transparent">Satu Platform</span>
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed text-lg text-justify">
            Dolan Yok hadir sebagai wadah eksplorasi tanpa batas. Kami mengkurasi pengalaman terbaik mulai dari "wisata, gaya hidup, hingga kuliner" untuk menginspirasi masyarakat Indonesia setiap harinya.
          </p>

          <div className="space-y-8">
            {points.map((point, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl group-hover:border-[#00f7a7] group-hover:bg-[#00f7a7]/10 transition-all duration-300">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-[#00f7a7] transition-colors">{point.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Grid Impact Kartu Putih */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full relative" data-aos="fade-left">
          <div className="absolute inset-0 bg-[#00f7a7]/10 blur-[100px] -z-10"></div>
          
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[2.5rem] bg-white flex flex-col justify-center items-start shadow-2xl transform transition-transform hover:-translate-y-2 duration-300 ${i % 2 === 1 ? 'mt-10' : ''}`}
            >
              <span className={`text-4xl md:text-5xl font-black ${item.color} tracking-tighter`}>{item.title}</span>
              <span className="text-slate-500 font-bold mt-3 text-xs uppercase tracking-widest">{item.desc}</span>
              
              <div className="w-10 h-1 bg-slate-100 mt-4 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
