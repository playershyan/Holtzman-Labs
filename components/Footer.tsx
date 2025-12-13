export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Holtzman Labs</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Professional websites for businesses worldwide. Fast delivery, clear pricing, no technical jargon.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#why-website">
                Why You Need a Website
              </a>
              <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">
                Services & Pricing
              </a>
              <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#work">
                Example Work
              </a>
              <a className="text-slate-600 hover:text-slate-900 transition-colors" href="#about">
                About
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="mailto:playershyan@gmail.com" className="hover:text-slate-900 transition-colors">
                playershyan@gmail.com
              </a>
              <a href="tel:0783607777" className="hover:text-slate-900 transition-colors">
                078 360 7777
              </a>
              <p className="text-xs mt-2">Response within 1 business day</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-600 text-center">
            © {currentYear} Holtzman Labs. Building trust through professional websites.
          </p>
        </div>
      </div>
    </footer>
  );
}

