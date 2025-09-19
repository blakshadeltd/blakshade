// app/components/SSRNav.tsx
import Link from 'next/link';
import { menuData } from './menuData';
import { infoMenuData } from './infoMenuData';

export default function SSRNav() {
  return (
    <nav className="sr-only">
      <ul>
        {/* Generators */}
        {Object.entries(menuData.Generators).map(([category, items]) =>
          items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))
        )}

        {/* Info */}
        {infoMenuData.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}

        {/* Other pages */}
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/build-genset">Build Genset</Link></li>
      </ul>
    </nav>
  );
}
