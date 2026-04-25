import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n.jsx'

const reviewImages = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
]

function ReviewsPage() {
  const { t } = useI18n()
  const reviewCards = useMemo(
    () =>
      t.reviews.cards.map((card, index) => ({
        ...card,
        image: reviewImages[index % reviewImages.length],
      })),
    [t.reviews.cards],
  )
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === 'undefined') return 4
    if (window.innerWidth >= 1024) return 4
    if (window.innerWidth >= 768) return 2
    return 1
  })
  const duplicatedCards = useMemo(() => [...reviewCards, ...reviewCards], [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4)
        return
      }
      if (window.innerWidth >= 768) {
        setVisibleCount(2)
        return
      }
      setVisibleCount(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isTransitionEnabled) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isTransitionEnabled])

  const handleTrackTransitionEnd = () => {
    if (activeIndex < reviewCards.length) {
      return
    }

    setIsTransitionEnabled(false)
    setActiveIndex(0)
  }

  const slidePercent = 100 / visibleCount
  const translatedX = activeIndex * slidePercent
  const currentAutoHighlight = activeIndex % reviewCards.length

  return (
    <section className="overflow-hidden bg-[var(--color-page-bg)] py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
        <article className="surface-card bg-gradient-to-r from-white to-[var(--color-surface-muted)] p-7 text-center md:p-9">
          <p className="text-3xl tracking-wide text-amber-400">★★★★★</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-text)] md:text-4xl">{t.reviews.title}</h2>
          <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{t.reviews.basedOn}</p>
          <p className="mt-4 text-4xl font-semibold tracking-wide">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#db4437]">o</span>
            <span className="text-[#f4b400]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#0f9d58]">l</span>
            <span className="text-[#db4437]">e</span>
          </p>
        </article>

        <div className="overflow-hidden rounded-[var(--radius-card)]">
          <div
            className="flex"
            onTransitionEnd={handleTrackTransitionEnd}
            style={{
              transform: `translateX(-${translatedX}%)`,
              transition: isTransitionEnabled ? 'transform 700ms ease' : 'none',
              width: `${(duplicatedCards.length * 100) / visibleCount}%`,
            }}
          >
            {duplicatedCards.map((card, index) => {
              const originalIndex = index % reviewCards.length
              const isSelected = selectedIndex === originalIndex
              const isAutoActive = selectedIndex === null && originalIndex === currentAutoHighlight
              const isHighlighted = isSelected || isAutoActive

              return (
                <article
                  key={`${card.name}-${index}`}
                  className={`group relative m-2 cursor-pointer overflow-hidden rounded-[var(--radius-card)] border p-5 transition-all duration-300 ${
                    isHighlighted
                      ? 'dark-card scale-[1.01] border-[var(--color-accent)] shadow-[var(--shadow-accent)]'
                      : 'dark-card border-white/10'
                  } hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent)]`}
                  onClick={() => setSelectedIndex(originalIndex)}
                  onMouseEnter={() => setSelectedIndex(originalIndex)}
                  style={{ width: `${100 / duplicatedCards.length}%` }}
                >
                  <span
                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="h-11 w-11 rounded-full border border-white/20 object-cover"
                      />
                      <div>
                        <p className="text-sm font-bold text-white">{card.name}</p>
                        <p className="text-xs text-white/70">{card.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[var(--color-accent)]">G</span>
                  </div>

                  <p className="relative z-10 mt-4 text-base leading-none tracking-wide text-amber-400">★★★★★</p>
                  <p className="relative z-10 mt-3 line-clamp-4 text-sm leading-6 text-white/85">{card.text}</p>

                  
                </article>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {reviewCards.map((card, index) => {
            const isSelected = selectedIndex === index
            const isAutoActive = selectedIndex === null && currentAutoHighlight === index
            const isActive = isSelected || isAutoActive

            return (
              <button
                key={card.name}
                type="button"
                aria-label={`${t.reviews.goToReview} ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-[var(--color-secondary)]' : 'w-2.5 bg-slate-300'
                }`}
                onClick={() => {
                  setSelectedIndex(index)
                  setActiveIndex(index)
                }}
              />
            )
          })}
        </div>

        <div className=" px-5 py-3 text-right md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/75">{t.reviews.verifiedBy}</p>
        </div>
      </div>
    </section>
  )
}

export default ReviewsPage