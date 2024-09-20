import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cristianjariaso.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cristianjariaso.vercel.app/sobremi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cristianjariaso.vercel.app/contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cristianjariaso.vercel.app/documents/CV%20Cristian%20Javier%20Arias%20Ordo%C3%B1ez.pdf',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.64,
    },
  ];
}
