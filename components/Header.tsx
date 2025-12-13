import Link from "next/link";

const links = [
  { href: "#why-website", label: "Why Website?" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Examples" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Get Quote", highlight: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="container flex items-center justify-between py-5 md:py-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Holtzman Labs
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((item) =>
            item.highlight ? (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-accent text-white shadow-sm transition hover:brightness-110"
              >
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

