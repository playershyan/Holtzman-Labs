export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="container flex flex-col gap-3 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2024 Holtzman Labs. Based in Sri Lanka, working nationwide.</p>
        <div className="flex gap-4">
          <a className="hover:text-slate-900" href="#work">
            Work
          </a>
          <a className="hover:text-slate-900" href="#services">
            Services
          </a>
          <a className="hover:text-slate-900" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

