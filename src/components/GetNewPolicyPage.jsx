import { useEffect, useState } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 md:px-10">
        <article className="card-surface-dark interactive-card interactive-card-dark grid items-center gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <h2 className="card-heading card-text-dark md:text-4xl">{t.getNewPolicy.howItWorks}</h2>
            <ul className="card-body card-text-muted-dark mt-5 space-y-3">
              {t.getNewPolicy.steps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    aria-hidden="true"
                    className="mt-1 w-4 shrink-0 text-[var(--color-accent)]"
                    icon={faCheck}
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <a
              className="mt-7 inline-flex w-full items-center justify-center rounded-[var(--radius-card)] bg-[var(--color-secondary)] px-6 py-4 text-xl font-bold text-white shadow-[var(--shadow-secondary)] transition hover:brightness-110 md:max-w-xl"
              href="https://form.jotform.com/213495620282152"
            >
              {t.getNewPolicy.getStarted}
            </a>
          </div>

          <img
            alt={t.getNewPolicy.imageAlt}
            className="h-72 w-full rounded-lg object-cover transition-opacity duration-700 md:h-80"
            src={policyImages[activeImage]}
          />
        </article>

        <article className="card-surface-dark relative px-12 py-10 md:px-16">
          <button
            aria-label="Previous policy type"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 text-4xl leading-none text-white/80 transition hover:text-[var(--color-accent)] md:left-5"
            onClick={prev}
            type="button"
          >
            &lsaquo;
          </button>

          <button
            aria-label="Next policy type"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 text-4xl leading-none text-white/80 transition hover:text-[var(--color-accent)] md:right-5"
            onClick={next}
            type="button"
          >
            &rsaquo;
          </button>

          <div className="flex items-stretch justify-center gap-6">
            <div
              className="policy-card-gradient interactive-card interactive-card-dark hidden w-[300px] rounded-[var(--radius-card)] border border-white/20 p-6 text-center text-white transition duration-300 hover:border-[var(--color-accent)] lg:block"
              style={{
                clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0% 100%)',
              }}
            >
              <h4 className="card-subheading card-text-dark">{leftCard.title}</h4>
              <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
              <p className="card-body card-text-muted-dark mt-4">{leftCard.text}</p>
            </div>

            <div
              ref={tiltRef}
              {...tiltHandlers}
              className="card-3d policy-card-gradient relative min-h-[260px] w-full max-w-[360px] rounded-[var(--radius-card)] border border-white/40 p-7 text-center text-white shadow-md md:p-8"
            >
              <div className="card-holo-bg" />
              <div className="card-glow" />

              <div className="relative z-10">
                <h4 className="card-heading card-text-dark">{centerCard.title}</h4>
                <div className="mx-auto mt-3 h-1 w-28 bg-[var(--color-accent)]" />
                <p className="card-body card-text-muted-dark mt-4">{centerCard.text}</p>
              </div>
            </div>

            <div
              className="policy-card-gradient interactive-card interactive-card-dark hidden w-[300px] rounded-[var(--radius-card)] border border-white/20 p-6 text-center text-white transition duration-300 hover:border-[var(--color-accent)] lg:block"
              style={{
                clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 92%)',
              }}
            >
              <h4 className="card-subheading card-text-dark">{rightCard.title}</h4>
              <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
              <p className="card-body card-text-muted-dark mt-4">{rightCard.text}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default GetNewPolicyPage
