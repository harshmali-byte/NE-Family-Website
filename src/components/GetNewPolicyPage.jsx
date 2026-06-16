import { useEffect, useState } from 'react'
import { faArrowRight, faCartShopping, faCheck, faHeart, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getNewPolicy0 from '../assets/getnewpolicy0.png'
import getNewPolicy1 from '../assets/getnewpolicy1.png'
import { useTilt } from '../hooks/useTilt.js'
import { useI18n } from '../i18n.jsx'

function GetNewPolicyPage() {
  const { t } = useI18n()
  const cardData = t.getNewPolicy.cards
  const policyImages = [getNewPolicy0, getNewPolicy1]
  const [activeImage, setActiveImage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(1)
  const { tiltRef, tiltHandlers } = useTilt()

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % policyImages.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [policyImages.length])

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? cardData.length - 1 : current - 1))
  }

  const next = () => {
    setActiveIndex((current) => (current === cardData.length - 1 ? 0 : current + 1))
  }

  const leftIndex = activeIndex === 0 ? cardData.length - 1 : activeIndex - 1
  const rightIndex = activeIndex === cardData.length - 1 ? 0 : activeIndex + 1

  const leftCard = cardData[leftIndex]
  const centerCard = cardData[activeIndex]
  const rightCard = cardData[rightIndex]

  const cardIcons = [faCartShopping, faHeart, faUserShield]
  const getCardIcon = (index) => cardIcons[index % cardIcons.length]
  const sideCardClassName =
    'hidden h-[540px] w-[320px] shrink-0 flex-col justify-start overflow-hidden rounded-[22px] border border-cyan-300/30 p-6 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(34,211,238,0.08)] transition duration-300 hover:border-cyan-300/55 hover:shadow-[0_0_32px_rgba(34,211,238,0.22)] xl:flex'
  const sideTitleClassName = 'mt-5 text-[1.7rem] font-bold leading-tight'
  const sideTextClassName = 'mx-auto mt-5 max-w-[16.5rem] text-[0.96rem] leading-7 text-white/84'
  const sideButtonClassName =
    'mx-auto mt-auto inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-7 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-200 hover:text-white'

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 md:px-10">

        {/* TOP SECTION */}
        <article className="card-surface-dark interactive-card grid items-center gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <h2 className="card-heading text-white md:text-4xl">{t.getNewPolicy.howItWorks}</h2>

            <ul className="mt-5 space-y-3">
              {t.getNewPolicy.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-white/80">
                  <FontAwesomeIcon className="mt-1 text-cyan-400" icon={faCheck} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://form.jotform.com/213495620282152"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-secondary)] px-6 py-4 text-lg font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.6)] transition hover:scale-[1.03]"
            >
              {t.getNewPolicy.getStarted}
            </a>
          </div>

          <img
            alt={t.getNewPolicy.imageAlt}
            className="h-72 w-full rounded-xl object-cover transition-opacity duration-700 md:h-80"
            src={policyImages[activeImage]}
          />
        </article>

        <article className="relative overflow-visible rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#040a24_0%,#090d30_100%)] px-12 py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(20,184,166,0.14),transparent_34%)]" />

          <button
            aria-label="Previous policy type"
            onClick={prev}
            className="absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b1335]/80 text-3xl text-white/85 transition hover:border-[#8a9cff] hover:text-[#9eb0ff]"
            type="button"
          >
            &lsaquo;
          </button>

          <button
            aria-label="Next policy type"
            onClick={next}
            className="absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b1335]/80 text-3xl text-white/85 transition hover:border-[#8a9cff] hover:text-[#9eb0ff]"
            type="button"
          >
            &rsaquo;
          </button>

          <div className="relative z-10 flex items-center justify-center gap-6 overflow-visible">
            <div
              className={`${sideCardClassName} bg-[linear-gradient(170deg,#04133a_0%,#061a48_70%,#082154_100%)] [transform:perspective(1100px)_rotateY(9deg)]`}
            >
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                <FontAwesomeIcon className="text-xl" icon={getCardIcon(leftIndex)} />
              </div>
              <h4 className={sideTitleClassName}>{leftCard.title}</h4>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-cyan-300/95 shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
              <p className={sideTextClassName}>{leftCard.text}</p>
              <button className={sideButtonClassName} type="button">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div
              ref={tiltRef}
              {...tiltHandlers}
              className="card-3d relative min-h-[520px] w-full max-w-[410px] shrink-0 rounded-[24px] border border-violet-300/50 bg-[linear-gradient(170deg,#171046_0%,#21115d_50%,#2a1572_100%)] p-8 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_0_58px_rgba(147,51,234,0.42)] md:p-9 xl:min-h-[560px] xl:max-w-[420px]"
            >
              <div className="card-holo-bg" />
              <div className="card-glow" />
              <div className="relative z-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-300/45 bg-violet-300/15 text-violet-100 shadow-[0_0_24px_rgba(168,85,247,0.45)]">
                  <FontAwesomeIcon className="text-2xl" icon={getCardIcon(activeIndex)} />
                </div>
                <h4 className="mt-7 text-[2.2rem] font-bold leading-tight">{centerCard.title}</h4>
                <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-violet-300/95 shadow-[0_0_12px_rgba(196,181,253,0.85)]" />
                <p className="mx-auto mt-7 max-w-[18rem] text-[1.1rem] leading-9 text-white/86">{centerCard.text}</p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-300/55 bg-violet-300/20 px-7 py-2.5 text-base font-semibold text-violet-100 transition hover:border-violet-200 hover:text-white" type="button">
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-7 flex justify-center gap-2">
                  {cardData.map((_, index) => (
                    <span
                      key={`dot-${index}`}
                      className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-violet-300 shadow-[0_0_8px_rgba(196,181,253,0.9)]' : 'w-2.5 bg-violet-300/40'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`${sideCardClassName} bg-[linear-gradient(170deg,#052240_0%,#08324c_70%,#0a3b57_100%)] [transform:perspective(1100px)_rotateY(-9deg)]`}
            >
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                <FontAwesomeIcon className="text-xl" icon={getCardIcon(rightIndex)} />
              </div>
              <h4 className={sideTitleClassName}>{rightCard.title}</h4>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-cyan-300/95 shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
              <p className={sideTextClassName}>{rightCard.text}</p>
              <button className={sideButtonClassName} type="button">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-6 flex justify-center gap-2 lg:hidden">
            {cardData.map((_, index) => (
              <button
                key={`mobile-dot-${index}`}
                aria-label={`Show policy card ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-violet-300' : 'w-2.5 bg-white/35'}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default GetNewPolicyPage
