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
        <article className="card-surface-dark interactive-card interactive-card-dark grid overflow-hidden text-white md:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 md:p-9">
            <h2 className="card-heading card-text-dark md:text-5xl">
              {t.about.title}
            </h2>
            <p className="card-body card-text-muted-dark mt-5">
              {t.about.paragraphs[0]}
            </p>
            <p className="card-body card-text-muted-dark mt-4">
              {t.about.paragraphs[1]}
            </p>
            <p className="card-body card-text-muted-dark mt-4">
              {t.about.paragraphs[2]}
            </p>
            <p className="card-body card-text-muted-dark mt-4">
              {t.about.paragraphs[3]}
            </p>
          </div>

          <div className="card-surface-elevated flex min-h-[320px] items-center justify-center p-6 md:min-h-[430px]">
            <div className="h-full w-full rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-400 p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.45)]">
              <div className="h-full w-full rounded-[14px] bg-[#06122f] p-[4px]">
                <img
                  alt={t.about.teamImageAlt}
                  className="h-full w-full rounded-[12px] object-cover"
                  src={aboutMain}
                />
              </div>
            </div>
          </div>
        </article>

        <article className="card-surface-dark interactive-card interactive-card-dark grid overflow-hidden text-white md:grid-cols-2">
          <div className="card-surface-elevated relative flex min-h-[320px] items-center justify-center overflow-hidden p-6">
            {aboutSlides.map((slide, index) => (
              <div
                className={`absolute inset-6 rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-400 p-[2px] shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-opacity duration-700 ${
                  activeSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                key={slide}
              >
                <div className="h-full w-full rounded-[14px] bg-[#06122f] p-[4px]">
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
            <h3 className="card-heading card-text-dark md:text-4xl">
              {t.about.rightTitle}
            </h3>
            <p className="card-body card-text-muted-dark mt-5">
              {t.about.rightIntro}
            </p>
            <h4 className="card-subheading card-text-dark mt-6">{t.about.rightSections[0].heading}</h4>
            <p className="card-body card-text-muted-dark mt-3">
              {t.about.rightSections[0].text}
            </p>
            <h4 className="card-subheading card-text-dark mt-6">{t.about.rightSections[1].heading}</h4>
            <p className="card-body card-text-muted-dark mt-3">
              {t.about.rightSections[1].text}
            </p>
            <h4 className="card-subheading card-text-dark mt-6">{t.about.rightSections[2].heading}</h4>
            <p className="card-body card-text-muted-dark mt-3">
              {t.about.rightSections[2].text}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
