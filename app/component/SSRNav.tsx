import Link from "next/link";

export default function SSRNav() {
  return (
    <nav className="sr-only" aria-label="Site Navigation (SEO)">
      <ul>
        {/* Main Pages */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/generators/cummins">Cummins Generators</Link></li>
        <li><Link href="/generators/cat">CAT Generators</Link></li>
        <li><Link href="/generators/silent">Silent Generators</Link></li>
        <li><Link href="/generators/open">Open Generators</Link></li>
                <li><Link href="/generators/50Hz">50Hz Generators</Link></li>
        <li><Link href="/generators/60Hz">60Hz Generators</Link></li>

        {/* Info Pages */}
        <li><Link href="/info/about-us">About Us</Link></li>
        <li><Link href="/info/glossary">Power Generation Glossary</Link></li>
        <li><Link href="/info/payment-and-shipment">Payment and Shipment</Link></li>
        <li><Link href="/info/worldwide-voltage-frequency">Voltages and Frequencies</Link></li>

        {/* Utility Pages */}
        <li><Link href="/build-genset">Build Genset</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
