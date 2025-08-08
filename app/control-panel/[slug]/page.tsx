import { notFound } from "next/navigation";
import { ControlPanelProduct, controlpanels } from "@/data/control-panel/controlPanelProducts";
import Image from "next/image";
import SpecItem from "@/app/component/SpecItem";
import Link from "next/link";
import AddToBuildButton from "@/app/component/AddToBuildButton";
import { use } from "react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = controlpanels.find((p) => p.slug === resolvedParams.slug);

  if (!product) return notFound();

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://blakshade.com/control-panel/${product.slug}`,
      siteName: "BlakShade Ltd",
      images: [
        {
          url: `https://blakshade.com${product.image}`,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [`https://blakshade.com${product.image}`],
    },
  };
}

export default function ControlPanelSpecPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = use(props.params);
    const product: ControlPanelProduct | undefined = controlpanels.find((p) => p.slug === slug);

    if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="w-full h-auto object-contain rounded-xl shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-6 text-gray-700">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {product.shortSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-lg">
                <div className="text-sm text-gray-500">{spec.label}</div>
                <div className="font-semibold">{spec.value}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <AddToBuildButton
              id={product.slug}
              name={product.title}
              category="control-panel"
            />
            <Link
              href="#specifications"
              className="btn-second"
            >
              Full Specification
            </Link>
          </div>
        </div>
      </div>

      <div id="specifications" className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
        {product.specs.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{group.group}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item, idx) => (
                <SpecItem key={idx} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
