import TerminalShell from '../../components/TerminalShell'

export const metadata = {
  title: 'About — Holtzman Labs',
  description: 'We prototype fast, ship faster, and keep all the weird jokes. Nerdy, Gen-Z engineers building small beautiful things.'
}

export default function AboutPage(){
  return (
    <main className="py-12 bg-black min-h-screen">
      <div className="px-6">
        <TerminalShell />
      </div>
    </main>
  )
}
