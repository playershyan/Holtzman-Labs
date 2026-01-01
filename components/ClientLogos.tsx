import Image from 'next/image'

export default function ClientLogos(){
  const logos = ['/logos/logo-nova.svg','/logos/logo-acme.svg','/logos/logo-pix.svg']
  return (
    <div className="client-logos">
      {logos.map((src) => (
        <div key={src} className="logo">
          <Image src={src} alt="client logo" width={96} height={36} />
        </div>
      ))}
    </div>
  )
}
