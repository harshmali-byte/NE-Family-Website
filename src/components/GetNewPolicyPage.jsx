import { useEffect, useState } from 'react'
import getNewPolicy0 from '../assets/getnewpolicy0.png'
import getNewPolicy1 from '../assets/getnewpolicy1.png'
import { useI18n } from '../i18n.jsx'
import { useTilt } from '../hooks/useTilt.js'

function GetNewPolicyPage() {
  const { t } = useI18n()
  const cardData = t.getNewPolicy.cards
  const policyImages = [getNewPolicy0, getNewPolicy1]
  const [activeImage, setActiveImage] = useState(0)
const tilt = useTilt()
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % policyImages.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [policyImages.length])
const [activeIndex, setActiveIndex] = useState(1);

const prev = () => {
  setActiveIndex((prev) =>
    prev === 0 ? cardData.length - 1 : prev - 1
  );
};

const next = () => {
  setActiveIndex((prev) =>
    prev === cardData.length - 1 ? 0 : prev + 1
  );
};

// get 3 visible cards
const leftIndex =
  activeIndex === 0 ? cardData.length - 1 : activeIndex - 1;
                                                                                                                       
const rightIndex =
  activeIndex === cardData.length - 1 ? 0 : activeIndex + 1;

const leftCard = cardData[leftIndex];
const centerCard = cardData[activeIndex];
const rightCard = cardData[rightIndex];
  return (
    <section className="bg-[var(--color-page-bg)] py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 md:px-10">
        <article className="card-surface-dark interactive-card interactive-card-dark grid items-center gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <h2 className="card-heading card-text-dark md:text-4xl">{t.getNewPolicy.howItWorks}</h2>
            <ul className="card-body card-text-muted-dark mt-5 space-y-3">
              {t.getNewPolicy.steps.map((step) => (
                <li key={step}>✔ {step}</li>
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

        <article className="card-surface-dark interactive-card interactive-card-dark relative px-8 py-10 md:px-14">

    {/* ARROWS */}
    <button
      onClick={prev}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl text-white/80 transition hover:text-[var(--color-accent)]"
      type="button"
    >
      ‹
    </button>

    <button
      onClick={next}
      className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl text-white/80 transition hover:text-[var(--color-accent)]"
      type="button"
    >
      ›
    </button>

    <div className="flex justify-center items-center gap-6">

      {/* LEFT */}
      <div
        className="interactive-card interactive-card-dark card-surface-elevated w-[300px] rounded-[var(--radius-card)] border border-white/10 p-6 text-center text-white transition duration-300 hover:border-[var(--color-accent)]"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 92%, 0% 100%)",
        }}
      >
        <h4 className="card-subheading card-text-dark">
          {leftCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
        <p className="card-body card-text-muted-dark mt-4">
          {leftCard.text}
        </p>
      </div>

      {/* CENTER
      <div className="interactive-card interactive-card-dark card-surface-elevated w-[340px] rounded-[var(--radius-card)] border border-[var(--color-accent)]/50 p-8 text-center text-white shadow-md shadow-[var(--shadow-accent)] transition duration-300">
        <h4 className="card-heading card-text-dark">
          {centerCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-28 bg-[var(--color-accent)]" />
        <p className="card-body card-text-muted-dark mt-4">
          {centerCard.text}
        </p>
      </div> */}


          <div
  ref={tilt.ref}
  {...tilt.handlers}
  className="
    card-3d
    interactive-card interactive-card-dark
    card-surface-elevated
    relative
    w-[340px]
    rounded-[var(--radius-card)]
    border border-[var(--color-accent)]/50
    p-8
    text-center
    text-white
    shadow-md
    transition duration-300
  "
>
  {/* HOLO EFFECT */}
  <div className="card-holo-bg" />
  <div className="card-glow" />

  {/* CONTENT */}
  <div className="relative z-10">
    <h4 className="card-heading card-text-dark">
      {centerCard.title}
    </h4>

    <div className="mx-auto mt-3 h-1 w-28 bg-[var(--color-accent)]" />

    <p className="card-body card-text-muted-dark mt-4">
      {centerCard.text}
    </p>
  </div>
</div>

      {/* RIGHT */}
      <div
        className="interactive-card interactive-card-dark card-surface-elevated w-[300px] rounded-[var(--radius-card)] border border-white/10 p-6 text-center text-white transition duration-300 hover:border-[var(--color-accent)]"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
        }}
      >
        <h4 className="card-subheading card-text-dark">
          {rightCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
        <p className="card-body card-text-muted-dark mt-4">
          {rightCard.text}
        </p>
      </div>

    </div>
  </article>



       
      </div>
    </section>
  )
}

export default GetNewPolicyPage
