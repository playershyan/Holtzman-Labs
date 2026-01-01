import EditorPoll from './EditorPoll'

export default function AboutHero(){
  return (
    <section className="bg-gradient-to-b from-[#050319] to-[#071026] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="ascii mb-4">{`  _   _   _   _  _   _  __    `}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">We ship, we screw up, we ship better.</h1>
          <p className="text-slate-300 max-w-xl">Not corporate. Not boring. Curious kids with too much rizz and too little sleep. Prototype fast, measure, then meme. <strong>And we don't ask for advance payment. We are that confident!</strong></p>

          <div className="mt-6 flex gap-3">
            <a className="gradient-cta px-4 py-2 rounded-md font-semibold" href="#stats">See the nerdy receipts</a>
            <a className="px-4 py-2 border border-white/10 rounded-md text-sm" href="/contact">Work with us</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="case-card p-4">
            <div className="font-mono text-xs text-slate-300"><span className="text-slate-200">terminal@holtzman:~$</span> <span className="text-slate-300">echo "rizz++"</span></div>
            <div className="mt-3 text-sm text-slate-400">P.S. skibidi toilet fandom is strong here.</div>
            <div className="mt-4">
              <div className="mt-3"><EditorPoll /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
