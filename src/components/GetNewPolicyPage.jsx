import { useEffect, useState } from 'react'
import getNewPolicy0 from '../assets/getnewpolicy0.png'
import getNewPolicy1 from '../assets/getnewpolicy1.png'

const insuranceAreas = [
  'Home and Auto Insurance',
  'Car Insurance',
  'Truck Insurance',
  'Business Insurance',
  'Business Liability Insurance',
  'Ecommerce Business Insurance',
  'Life Insurance',
  'Life Insurance for Children',
  'Life Insurance for Parents',
  'Accidental Life Insurance',
  'Insurance Binder',
  'Certificate of Insurance',
  'Workers Compensation Insurance',
]

const cardData = [
  {
    title: 'Ecommerce Business Insurance:',
    text: 'Insurance providers cover your whole process of ecommerce business procedures from manufacturer to end-user. In case of any uncertainties, ecommerce business insurance provides you an instant backup plan.',
  },
  {
    title: 'Life Insurance:',
    text: 'Life insurance, also referred to as basic life insurance, ensures a nominee receives a particular amount of money upon the insured person’s death or when the policy gets matured.',
  },
  {
    title: 'Life Insurance for Children:',
    text: 'Life insurance for children provides long-term financial support and helps with studies and major life expenses with future planning confidence.',
  },
]

function GetNewPolicyPage() {
  const policyImages = [getNewPolicy0, getNewPolicy1]
  const [activeImage, setActiveImage] = useState(0)

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
        <article className="dark-card grid items-center gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <h2 className="text-4xl font-bold text-white">How It Works</h2>
            <ul className="mt-5 space-y-3 text-lg text-white/90">
              <li>✔ Choose the type of policy you want</li>
              <li>✔ Answer a few questions or attach a picture</li>
              <li>✔ Save, sign & never get screwed by insurance companies again</li>
            </ul>
            <a
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[var(--color-secondary)] px-6 py-4 text-xl font-bold text-white shadow-[var(--shadow-secondary)] transition hover:brightness-110 md:max-w-xl"
              href="https://form.jotform.com/213495620282152"
            >
              GET STARTED
            </a>
          </div>

          <img
            alt="Office and policy support"
            className="h-72 w-full rounded-lg object-cover transition-opacity duration-700 md:h-80"
            src={policyImages[activeImage]}
          />
        </article>

        <article className="dark-card relative px-8 py-10 md:px-14">

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
        className="w-[300px] rounded-md border border-white/10 bg-[var(--color-dark-soft)] p-6 text-center text-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 92%, 0% 100%)",
        }}
      >
        <h4 className="text-xl font-bold text-white">
          {leftCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
        <p className="mt-4 text-sm leading-7 text-slate-300">
          {leftCard.text}
        </p>
      </div>

      {/* CENTER */}
      <div className="w-[340px] rounded-md border border-[var(--color-accent)]/50 bg-[var(--color-dark-soft)] p-8 text-center text-white shadow-md shadow-[var(--shadow-accent)] transition duration-300 hover:-translate-y-1">
        <h4 className="text-2xl font-bold text-white">
          {centerCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-28 bg-[var(--color-accent)]" />
        <p className="mt-4 text-base leading-8 text-slate-300">
          {centerCard.text}
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="w-[300px] rounded-md border border-white/10 bg-[var(--color-dark-soft)] p-6 text-center text-white transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
        }}
      >
        <h4 className="text-xl font-bold text-white">
          {rightCard.title}
        </h4>
        <div className="mx-auto mt-3 h-1 w-24 bg-[var(--color-accent)]/70" />
        <p className="mt-4 text-sm leading-7 text-slate-300">
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
