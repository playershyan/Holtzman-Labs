import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'

export const metadata = {
  title: 'Site Stats — Holtzman Labs',
}

export default function SiteStatsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">Site Stats</h1>

          <div className="max-w-2xl mx-auto">
            <PerformanceMonitor />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
