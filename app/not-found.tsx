export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">404 - Page Not Found</h2>
        <p className="text-slate-700">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold gradient-cta shadow-md transition hover:brightness-110"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

