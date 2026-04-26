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
    <section className="overflow-hidden bg-[image:var(--color-page-bg)] py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
        <article className="card-surface-dark interactive-card  p-7 text-center md:p-9">
          <p className="text-3xl tracking-wide text-amber-400">★★★★★</p>
          <h2 className="text-white mt-2 tracking-tight md:text-4xl">{t.reviews.title}</h2>
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
                  className={`interactive-card interactive-card-dark group relative m-2 cursor-pointer overflow-hidden rounded-[var(--radius-card)] border p-5 transition-all duration-300 ${
                    isHighlighted
                      ? 'card-surface-dark scale-[1.01] border-[var(--color-accent)] shadow-[var(--shadow-accent)]'
                      : 'card-surface-dark border-white/10'
                  } hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent)]`}
                  onClick={() => setSelectedIndex(originalIndex)}
                  onMouseEnter={() => setSelectedIndex(originalIndex)}
                  style={{ width: `${100 / duplicatedCards.length}%` }}
                >
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="h-11 w-11 rounded-full border border-white/20 object-cover"
                      />
                      <div>
                        <p className="card-subheading card-text-dark text-sm">{card.name}</p>
                        <p className="text-xs text-white/70">{card.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[var(--color-accent)]">G</span>
                  </div>

                  <p className="relative z-10 mt-4 text-base leading-none tracking-wide text-amber-400">★★★★★</p>
                  <p className="card-body card-text-muted-dark relative z-10 mt-3 line-clamp-4">{card.text}</p>

                  
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

      </div>
    </section>
  )
}

export default ReviewsPage
