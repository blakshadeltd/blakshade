import { MetadataRoute } from "next";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import { cats } from "@/data/generators/cat/catProducts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    { url: "/", lastModified: new Date() },
    { url: "/contact", lastModified: new Date() },
    { url: "/build-genset", lastModified: new Date() },
    { url: "/info", lastModified: new Date() },
    { url: "/info/about-us", lastModified: new Date() },
    { url: "/info/glossary", lastModified: new Date() },
    { url: "/info/payment-and-shipment", lastModified: new Date() },
    { url: "/info/worldwide-voltage-frequency", lastModified: new Date() },
    { url: "/generators/", lastModified: new Date() },
    { url: "/generators/50Hz", lastModified: new Date() },
    { url: "/generators/60Hz", lastModified: new Date() },
    { url: "/generators/cat", lastModified: new Date() },
    { url: "/generators/cummins", lastModified: new Date() },
    { url: "/generators/home", lastModified: new Date() },
    { url: "/generators/open", lastModified: new Date() },
    { url: "/generators/silent", lastModified: new Date() },
  ];

  // Cummins generator product pages
  const cumminsPages = cummins.map((p) => ({
    url: `/generators/cummins/${p.slug}`,
    lastModified: new Date(),
  }));

  // CAT generator product pages
  const catPages = cats.map((p) => ({
    url: `/generators/cat/${p.slug}`,
    lastModified: new Date(),
  }));

  // Merge all pages
  const allPages = [...staticPages, ...cumminsPages, ...catPages];

  // Prepend production domain
  return allPages.map((page) => ({
    url: `https://blakshade.com${page.url}`,
    lastModified: page.lastModified,
  }));
}
