"use client";

import { useState } from "react";
import ProductEnquiryModal from "./ProductEnquiryModal";
import Link from "next/link";
import { CatProduct } from "@/data/generators/cat/catProducts";

interface ProductPageClientProps {
  product: CatProduct;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  return (
    <>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setShowEnquiryModal(true)}
          className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-5 text-left btn-primary shine-effect cursor-pointer"
        >
          Enquiry
        </button>
        <Link
          href={product.fullspec}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-5 text-left btn-second shine-effect inline-block text-center"
        >
          Full Specification
        </Link>
      </div>

      {/* Modal */}
      <ProductEnquiryModal 
        isOpen={showEnquiryModal} 
        onClose={() => setShowEnquiryModal(false)} 
        productTitle={product.title} 
      />
    </>
  );
}