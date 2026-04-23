"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // CSS wajib AOS
import { useEffect } from "react";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      // Pengaturan animasi Global (Simple & Bagus)
      duration: 800, // Kecepatan animasi (milidetik)
      easing: "ease-out-cubic", // Efek pergerakan halus
      once: true, // Animasi hanya berjalan sekali saat di-scroll ke bawah
      offset: 50, // Mulai animasi 50px sebelum elemen terlihat di layar
      delay: 100, // Sedikit jeda agar tidak barengan dengan loading
    });
  }, []);

  return <>{children}</>;
}