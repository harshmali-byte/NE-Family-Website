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
  const duplicatedCards = useMemo(() => [...reviewCards, ...reviewCards], [reviewCards])

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
    <section className="overflow-hidden py-12 md:py-14">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 md:px-10">
        <article className="relative flex justify-center overflow-visible py-2">
          <div className="relative w-full max-w-xl rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-7 text-center shadow-[var(--shadow-soft)]">
            <p className="text-3xl tracking-wide text-amber-600">★★★★★</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[var(--color-text)]">{t.reviews.title}</h2>
            <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)]">{t.reviews.basedOn}</p>
            <p className="mt-3 text-4xl font-semibold tracking-wide">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#db4437]">o</span>
              <span className="text-[#f4b400]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#0f9d58]">l</span>
              <span className="text-[#db4437]">e</span>
            </p>
          </div>
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
                  className={`interactive-card interactive-card-light group relative m-2 cursor-pointer overflow-hidden rounded-[var(--radius-card)] border p-5 transition-colors duration-300 ${
                    isHighlighted
                      ? 'card-surface-light border-[var(--color-primary)]'
                      : 'card-surface-light border-[var(--color-border)]'
                  } hover:border-slate-400`}
                  onClick={() => setSelectedIndex(originalIndex)}
                  onMouseEnter={() => setSelectedIndex(originalIndex)}
                  style={{ width: `${100 / duplicatedCards.length}%` }}
                >
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="h-11 w-11 rounded-full border border-[var(--color-border)] object-cover"
                      />
                      <div>
                        <p className="card-subheading text-sm text-[var(--color-text)]">{card.name}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">{card.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[var(--color-accent)]">G</span>
                  </div>

                  <p className="relative z-10 mt-4 text-base leading-none tracking-wide text-amber-600">★★★★★</p>
                  <p className="card-body card-text-muted-light relative z-10 mt-3 line-clamp-4">{card.text}</p>


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
                  isActive ? 'w-8 bg-[var(--color-primary)]' : 'w-2.5 bg-slate-300'
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
