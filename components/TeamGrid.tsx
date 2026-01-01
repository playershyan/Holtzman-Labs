export default function TeamGrid(){
  const team = [
    {name: 'riley', role: 'engineer', bio: 'loves small infra and big memos'},
    {name: 'sam', role: 'designer', bio: 'makes pixels smell nice'},
    {name: 'jas', role: 'product', bio: 'asks dangerous questions'},
  ]

  return (
    <div className="team-grid">
      <h4 className="text-sm font-semibold mb-3">The crew</h4>
      <div className="mt-2">
        {team.map((t)=> (
          <div key={t.name} className="terminal-line py-1 text-slate-300"><span className="font-semibold text-slate-200">{t.name}</span> · <span className="text-xs">{t.role} — {t.bio}</span></div>
        ))}
      </div>
    </div>
  )
}
