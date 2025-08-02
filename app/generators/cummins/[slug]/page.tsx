import { notFound } from "next/navigation";
import { cummins, CumminsProduct } from "@/data/generators/cummins/cumminsProducts";
import type { Metadata } from "next";
import ProductClientView from "@/app/generators/cummins/[slug]/ProductClientView";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product: CumminsProduct | undefined = cummins.find((p) => p.slug === params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
  };
}

export default function GeneratorSpecPage({ params }: { params: { slug: string } }) {
    const product: CumminsProduct | undefined = cummins.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return <ProductClientView product={product} />;
}

