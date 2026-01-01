export default function ValuesBand(){
  const items = [
    'Prototype fast — if it compiles, ship.',
    'Taste & craft over process & bureaucracy.',
    'Measure, iterate, meme.',
    'Make things people actually use.'
  ]

  return (
    <div className="values-band">
      <h4 className="text-sm font-semibold">Values</h4>
      <div className="mt-3">
        {items.map((it, i) => (
          <div key={i} className="terminal-line py-1 text-slate-300">• {it}</div>
        ))}
      </div>
    </div>
  )
}
