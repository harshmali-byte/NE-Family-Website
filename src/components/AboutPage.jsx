import { useEffect, useState } from 'react'
import aboutMain from '../assets/about-section-img.webp'
import aboutSlideOne from '../assets/about-section-img1.webp'
import aboutSlideTwo from '../assets/about-section-img2.webp'
import { useI18n } from '../i18n.jsx'

const aboutSlides = [aboutSlideOne, aboutSlideTwo, aboutMain]

function AboutPage() {
  const { t } = useI18n()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutSlides.length)
    }, 4000)
    return () => window.clearInterval(slideTimer)
  }, [])

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
        <article className="card-surface-light interactive-card interactive-card-light grid overflow-hidden md:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 md:p-9">
            <h2 className="card-heading card-text-light md:text-5xl">
              {t.about.title}
            </h2>
            <p className="card-body card-text-muted-light mt-5">
              {t.about.paragraphs[0]}
            </p>
            <p className="card-body card-text-muted-light mt-4">
              {t.about.paragraphs[1]}
            </p>
            <p className="card-body card-text-muted-light mt-4">
              {t.about.paragraphs[2]}
            </p>
            <p className="card-body card-text-muted-light mt-4">
              {t.about.paragraphs[3]}
            </p>
          </div>

          <div className="flex min-h-[320px] items-center justify-center border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 md:min-h-[430px] md:border-l md:border-t-0">
            <div className="h-full w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-[4px]">
              <div className="h-full w-full rounded-[14px] bg-[var(--color-surface-muted)] p-[2px]">
                <img
                  alt={t.about.teamImageAlt}
                  className="h-full w-full rounded-[12px] object-cover"
                  src={aboutMain}
                />
              </div>
            </div>
          </div>
        </article>

        <article className="card-surface-light interactive-card interactive-card-light grid overflow-hidden md:grid-cols-2">
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 md:border-b-0 md:border-r">
            {aboutSlides.map((slide, index) => (
              <div
                className={`absolute inset-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-[4px] transition-opacity duration-700 ${
                  activeSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                key={slide}
              >
                <div className="h-full w-full rounded-[14px] bg-[var(--color-surface-muted)] p-[2px]">
                  <img
                    alt={`${t.about.slideImageAltPrefix} ${index + 1}`}
                    className="h-full w-full rounded-[12px] object-cover"
                    src={slide}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-9">
            <h3 className="card-heading card-text-light md:text-4xl">
              {t.about.rightTitle}
            </h3>
            <p className="card-body card-text-muted-light mt-5">
              {t.about.rightIntro}
            </p>
            <h4 className="card-subheading card-text-light mt-6">{t.about.rightSections[0].heading}</h4>
            <p className="card-body card-text-muted-light mt-3">
              {t.about.rightSections[0].text}
            </p>
            <h4 className="card-subheading card-text-light mt-6">{t.about.rightSections[1].heading}</h4>
            <p className="card-body card-text-muted-light mt-3">
              {t.about.rightSections[1].text}
            </p>
            <h4 className="card-subheading card-text-light mt-6">{t.about.rightSections[2].heading}</h4>
            <p className="card-body card-text-muted-light mt-3">
              {t.about.rightSections[2].text}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
