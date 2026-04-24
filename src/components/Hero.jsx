import { useEffect, useState } from 'react'
import bestPriceGuarantee from '../assets/Best-Price-Guarantee-Final-2.png'
import familyPolicy from '../assets/Get-A-New-Policy-Final-2.webp'
import myPolicy from '../assets/My-Policy-Image-Final-2.webp'

function Hero() {
  const rotatingWords = ['best price', 'best service']
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => window.clearInterval(timer)
  }, [rotatingWords.length])
  return (
    <section
      className="bg-gradient-to-br from-[#f3f9ff] via-[#f4fbff] to-[#d7f4f8]"
      id="home"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <div className="space-y-6">
          <p className="inline-flex rounded-[var(--radius-pill)] bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            Trusted Insurance Advisors
          </p>
          <h1 className="text-4xl font-black leading-tight text-[var(--color-text)] md:text-6xl">
            We&apos;re not just the
            <span className="text-[var(--color-secondary)]"> {rotatingWords[activeWordIndex]}</span>.

            <br />
            We&apos;re both in equal measures.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
            A redesigned, modern experience built around clarity, trust, and
            coverage confidence for every stage of life.
          </p>
          <div className="grid w-full max-w-2xl grid-cols-3 gap-5 pt-2 text-center text-[var(--color-primary)]">
            <div>
              <img
                alt="Best price guarantee"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={bestPriceGuarantee}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                Best Price Guarantee
              </p>
            </div>
            <div>
              <img
                alt="Get a new policy"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={familyPolicy}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                Get A New Policy
              </p>
            </div>
            <div>
              <img
                alt="My policy"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={myPolicy}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                My Policy
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/70  p-3 shadow-[var(--shadow-strong)] backdrop-blur md:p-4">
          <div className="overflow-hidden rounded-xl">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full min-h-[220px] md:min-h-[300px]"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/L9GTenl7X5U"
              title="New England Family video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
