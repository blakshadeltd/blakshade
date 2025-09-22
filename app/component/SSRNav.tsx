import Link from "next/link";
import { menuData } from "./menuData";
import { infoMenuData } from "./infoMenuData";

export default function SSRNav() {
  return (
    <nav className="sr-only" aria-label="Site Navigation (SEO)">
      <ul>
        {/* Generator Categories from menuData */}
        {Object.values(menuData.Generators).flat().map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}

        {/* Info Pages */}
        {infoMenuData.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}

        {/* Utility Pages */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/build-genset">Build Genset</Link>
        </li>
      </ul>
    </nav>
  );
}
