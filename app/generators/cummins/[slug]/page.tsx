import { notFound } from "next/navigation";
import { cummins } from "@/data/generators/cummins/cumminsProducts";
import ProductClientView from "./ProductClientView";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = cummins.find((p) => p.slug === params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
  };
}

export default async function GeneratorSpecPage({ params }: { params: { slug: string } }) {
  const product = cummins.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return <ProductClientView product={product} />;
}
