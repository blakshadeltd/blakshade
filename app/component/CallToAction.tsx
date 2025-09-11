import Link from "next/link"

export default function CallToAction() {
    return (
        <section className="py-12 md:py-15 bg-gradient-to-br from-[var(--foreground)] to-[var(--hover)] text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl mb-4">
              Ready to Power Your World?
            </h2>
            <p className="md:text-md mb-8 md:mb-10">
              Whether you need a standard solution or a custom-built generator, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link
                href="/build-genset"
                className="px-6 py-2 md:px-8 md:py-3 bg-white text-[var(--foreground)] rounded-[8px] md:rounded-[10px] hover:rounded-[12px] md:hover:rounded-[15px] transition-all duration-300 text-sm md:text-base"
              >
                Design Your Generator
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 md:px-8 md:py-3 bg-transparent border-2 border-white text-white rounded-[8px] md:rounded-[10px] hover:rounded-[12px] md:hover:rounded-[15px] transition-all duration-300 text-sm md:text-base"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
    );
}