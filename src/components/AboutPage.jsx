import { useEffect, useState } from 'react'
import aboutMain from '../assets/about-section-img.webp'
import aboutSlideOne from '../assets/about-section-img1.webp'
import aboutSlideTwo from '../assets/about-section-img2.webp'

const aboutSlides = [aboutSlideOne, aboutSlideTwo, aboutMain]

function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutSlides.length)
    }, 4000)
    return () => window.clearInterval(slideTimer)
  }, [])

  return (
    <section className="bg-[var(--color-page-bg)] py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
        <article className="surface-card dark-card text-white grid overflow-hidden md:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 md:p-9">
            <h2 className="text-3xl font-white leading-tight text-white md:text-5xl">
              Insurance Solutions for Your Family and Business Needs
            </h2>
            <p className="mt-5 text-sm leading-7 text-white md:text-base">
              At New England Family Insurance, we are experts in offering the best insurance capacity
              to fulfill the individual requirements of individuals, families, and companies in the
              region. If you are looking for house insurance to cover your home or family insurance to
              help ensure the well-being of your loved ones, our team of insurance professionals is
              here to help. We realize that insurance is not a one-size-fits-all solution, so we work
              closely with you to specify the appropriate range.
            </p>
            <p className="mt-4 text-sm leading-7 text-white md:text-base">
              With years of experience as Massachusetts insurance consultants, we provide a selection
              of policies ranging from simple insurance to thorough, full-coverage choices. To provide
              you access to the best policies, our insurance agency works with major insurance
              carriers. Whether your business requires general contractor insurance or vehicle
              inspections for your automobile, we walk you through the procedure that can help ensure
              you have the necessary protection.
            </p>
            <p className="mt-4 text-sm leading-7 text-white md:text-base">
              We also provide specific products to protect your priceless items, including estate
              plans, inland marine coverage, and art insurance. Our staff can help with certificate of
              insurance writing, subrogation waivers, and adding extra insured parties to your policy.
            </p>
            <p className="mt-4 text-sm leading-7 text-white md:text-base">
              Trust our staff of insurance professionals to assist you in spotting possible hazards and
              provide solutions for risk management and prevention. Dedicated to being your go-to
              insurance provider for all your personal and business needs, we service areas throughout
              Insurance MA and Insurance RI.
            </p>
          </div>

          <div className="flex min-h-[320px] items-center justify-center bg-[var(--color-surface-muted)] p-6 md:min-h-[430px]">
            <img
              alt="New England Family team"
              className="h-full w-full rounded-xl border border-[var(--color-border)] object-contain bg-white p-2"
              src={aboutMain}
            />
          </div>
        </article>

        <article className="surface-card grid overflow-hidden md:grid-cols-2">
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[var(--color-surface-muted)] p-6">
            {aboutSlides.map((slide, index) => (
              <img
                alt={`About slide ${index + 1}`}
                className={`absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-xl border border-[var(--color-border)] object-cover transition-opacity duration-700 ${
                  activeSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                key={slide}
                src={slide}
              />
            ))}
          </div>

          <div className="p-6 md:p-9">
            <h3 className="text-3xl font-black text-[var(--color-text)] md:text-4xl">
              Raising the Bar. Breaking the Mold
            </h3>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
              Our primary goal is to treat our clients better than any of our competitors so they
              never leave. We raise their expectations for service to a level so high if they ever have
              temporary amnesia and test the grass on the other side, they are quickly disappointed and
              come right back.
            </p>
            <h4 className="mt-6 text-2xl font-bold text-[var(--color-text)]">Stop fighting with robots</h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
              Stop fighting with robots for 10 mins yelling representative. Text, WhatsApp, or call a
              real person and get clear simple answers to all your questions.
            </p>
            <h4 className="mt-6 text-2xl font-bold text-[var(--color-text)]">The Inflation Excuse</h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
              Ah I bet your company loooves to use this excuse on you. Inflation does not mean there
              are not companies willing to save you money for the right coverage.
            </p>
            <h4 className="mt-6 text-2xl font-bold text-[var(--color-text)]">Claims</h4>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
              When you need insurance most we are there every step of the way. We hate when companies
              say they appreciate you, take your money, and then tell you to call an 800 number when
              you need help.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
