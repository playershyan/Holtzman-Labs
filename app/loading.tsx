export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-200"></div>
          <div className="absolute inset-0 border-4 border-[#8B5CF6] border-t-transparent animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
