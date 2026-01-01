import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20">
        {/* Logo and Tagline */}
        <div className="mb-10 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
            <svg className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 22H2L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="miter" strokeLinecap="butt" />
            </svg>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Holtzman Labs
            </span>
          </Link>
          <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl text-gray-600 max-w-xl">
            Engineering, shipped fast.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-10 md:mb-12 space-y-3 md:space-y-4">
          <div>
            <a
              href="mailto:hello@holtzmanlabs.com"
              className="text-base md:text-lg lg:text-xl text-black hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              hello@holtzmanlabs.com
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com/search?gs_ssp=eJzj4tDP1TdIyzMvMmD0Yk_Oz8nPTcoHADd7Bfg&q=colombo&rlz=1C1CHBF_en-GBLK1178LK1178&oq=col&gs_lcrp=EgZjaHJvbWUqDwgBEC4YFBiHAhixAxiABDIMCAAQIxgnGIAEGIoFMg8IARAuGBQYhwIYsQMYgAQyBggCECMYJzIGCAMQRRg7MgYIBBBFGD0yBggFEEUYPTIGCAYQRRhBMgYIBxBFGEHSAQgxNjA4ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg text-gray-600 hover:text-[#8B5CF6] transition-colors"
            >
              Colombo 6.9271° N, 79.8612° E
            </a>
            <p className="text-base md:text-lg text-black font-bold mt-1.5 md:mt-2">
              අපි කොළඹ යකෝ!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-xs md:text-sm text-gray-500">
            © {currentYear} Holtzman Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
