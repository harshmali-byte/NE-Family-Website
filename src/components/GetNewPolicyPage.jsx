import { useEffect, useState } from 'react'
import { faArrowRight, faCartShopping, faCheck, faHeart, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getNewPolicy0 from '../assets/getnewpolicy0.png'
import getNewPolicy1 from '../assets/getnewpolicy1.png'
import { useI18n } from '../i18n.jsx'

function GetNewPolicyPage() {
  const { t } = useI18n()
  const cardData = t.getNewPolicy.cards
  const policyImages = [getNewPolicy0, getNewPolicy1]
  const [activeImage, setActiveImage] = useState(0)
  const [activeIndex, setActiveIndex] = useState(1)

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
    'hidden h-[540px] w-[320px] shrink-0 flex-col justify-start overflow-hidden rounded-[22px] border border-app-border bg-app-muted p-6 text-center text-app-text xl:flex'
  const sideTitleClassName = 'mt-5 text-[1.7rem] font-bold leading-tight text-app-text'
  const sideTextClassName = 'mx-auto mt-5 max-w-[16.5rem] text-[0.96rem] leading-7 text-app-text-muted'
  const sideButtonClassName =
    'btn-outline btn-outline--pill mx-auto mt-auto inline-flex max-w-full items-center justify-center gap-2 px-7 py-2.5 text-sm font-semibold'

  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 md:px-10">

        {/* TOP SECTION */}
        <article className="card-surface-light interactive-card interactive-card-light grid items-center gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <h2 className="card-heading text-app-text md:text-4xl">{t.getNewPolicy.howItWorks}</h2>

            <ul className="mt-5 space-y-3">
              {t.getNewPolicy.steps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-app-text-muted">
                  <FontAwesomeIcon className="mt-1 text-app-accent" icon={faCheck} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://form.jotform.com/213495620282152"
              className="primary-btn mt-7 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-lg font-bold"
            >
              {t.getNewPolicy.getStarted}
            </a>
          </div>

          <img
            alt={t.getNewPolicy.imageAlt}
            className="h-72 w-full rounded-xl border border-app-border object-cover transition-opacity duration-700 md:h-80"
            src={policyImages[activeImage]}
          />
        </article>

        <article className="relative overflow-visible rounded-[28px] border border-app-border bg-app-card px-6 py-10 md:px-12">
          <button
            aria-label="Previous policy type"
            onClick={prev}
            className="btn-outline absolute left-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-2xl"
            type="button"
          >
            &lsaquo;
          </button>

          <button
            aria-label="Next policy type"
            onClick={next}
            className="btn-outline absolute right-3 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-2xl"
            type="button"
          >
            &rsaquo;
          </button>

          <div className="relative z-10 flex items-center justify-center gap-6 overflow-visible">
            <div className={`${sideCardClassName}`}>
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-app-border bg-app-card text-app-text">
                <FontAwesomeIcon className="text-xl" icon={getCardIcon(leftIndex)} />
              </div>
              <h4 className={sideTitleClassName}>{leftCard.title}</h4>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-app-primary" />
              <p className={sideTextClassName}>{leftCard.text}</p>
              <button className={sideButtonClassName} type="button">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="relative min-h-[520px] w-full max-w-[410px] shrink-0 rounded-[24px] border-2 border-app-border bg-app-muted p-8 text-center text-app-text md:p-9 xl:min-h-[560px] xl:max-w-[420px]">
              <div className="relative z-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-app-border bg-app-card text-app-text">
                  <FontAwesomeIcon className="text-2xl" icon={getCardIcon(activeIndex)} />
                </div>
                <h4 className="mt-7 text-[2.2rem] font-bold leading-tight">{centerCard.title}</h4>
                <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-app-primary" />
                <p className="mx-auto mt-7 max-w-[18rem] text-[1.1rem] leading-9 text-app-text-muted">{centerCard.text}</p>
                <button className="btn-outline btn-outline--pill mt-8 inline-flex items-center gap-2 px-7 py-2.5 text-base font-semibold" type="button">
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-7 flex justify-center gap-2">
                  {cardData.map((_, index) => (
                    <span
                      key={`dot-${index}`}
                      className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-app-primary' : 'w-2.5 bg-app-muted-ui'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={`${sideCardClassName}`}>
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-app-border bg-app-card text-app-text">
                <FontAwesomeIcon className="text-xl" icon={getCardIcon(rightIndex)} />
              </div>
              <h4 className={sideTitleClassName}>{rightCard.title}</h4>
              <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-app-primary" />
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
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-app-primary' : 'w-2.5 bg-app-muted-ui'}`}
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
