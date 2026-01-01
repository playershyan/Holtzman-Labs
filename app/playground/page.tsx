import TerminalPlayground from '../../components/TerminalPlayground'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Playground — Holtzman Labs',
}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 px-6 lg:px-12 bg-[radial-gradient(ellipse_at_top_right,_var(--color-bg)_0%,_rgba(0,0,0,0)_40%)]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">Terminal Playground</h1>
          <p className="text-lg text-gray-500 mb-8">A small, interactive CLI-style demo to showcase Holtzman Labs' engineering grammar.</p>

          <TerminalPlayground />

          <section className="mt-12 text-sm text-gray-500">
            <p className="mb-2">Notes: this is an MVP — commands are simulated and run locally in the browser. Use the demo buttons or type into the input to explore.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
