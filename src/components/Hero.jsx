import { useEffect, useState } from 'react'
import bestPriceGuarantee from '../assets/Best-Price-Guarantee-Final-2.png'
import familyPolicy from '../assets/Get-A-New-Policy-Final-2.webp'
import myPolicy from '../assets/My-Policy-Image-Final-2.webp'
import { useI18n } from '../i18n.jsx'

function Hero() {
  const { t } = useI18n()
  const rotatingWords = t.hero.rotatingWords
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => window.clearInterval(timer)
  }, [rotatingWords.length])
  return (
    <section id="home">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <div className="space-y-6">
          <p className="inline-flex rounded-[var(--radius-pill)] bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] ring-1 ring-white/10">
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            {t.hero.headingStart}
            <span className="text-[var(--color-secondary)]"> {rotatingWords[activeWordIndex]}</span>.

            <br />
            {t.hero.headingEnd}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {t.hero.subtext}
          </p>
          <div className="grid w-full max-w-2xl grid-cols-3 gap-5 pt-2 text-center text-[var(--color-accent)]">
            <div>
              <img
                alt="Best price guarantee"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={bestPriceGuarantee}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                {t.hero.bestPrice}
              </p>
            </div>
            <div>
              <img
                alt="Get a new policy"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={familyPolicy}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                {t.hero.getPolicy}
              </p>
            </div>
            <div>
              <img
                alt="My policy"
                className="mx-auto h-24 w-24 object-contain md:h-36 md:w-36"
                src={myPolicy}
              />
              <p className="mt-3 text-base font-bold md:text-[1rem] md:leading-[2.2rem] lg:text-[1.05rem]">
                {t.hero.myPolicy}
              </p>
            </div>
          </div>
        </div>

        <div className="  p-3 shadow-[var(--shadow-strong)] backdrop-blur md:p-4">
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
