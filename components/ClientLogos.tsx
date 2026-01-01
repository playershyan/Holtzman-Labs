export default function ClientLogos(){
  const logos = ['NOVA','ACME','PIX','LYFT','ORBIT']
  return (
    <div className="client-logos">
      {logos.map((l) => (
        <div key={l} className="logo">{l}</div>
      ))}
    </div>
  )
}
