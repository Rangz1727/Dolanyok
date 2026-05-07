import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti URL ini dengan domain asli kamu jika nanti sudah pakai .com atau .id
  const baseUrl = 'https://dolanyok.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
