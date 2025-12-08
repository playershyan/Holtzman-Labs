'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Something went wrong!</h2>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold gradient-cta shadow-md transition hover:brightness-110"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

