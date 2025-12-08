import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-lg bg-white/70 border-b border-slate-200">
      <div className="container flex items-center justify-between py-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Holtzman Labs
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

