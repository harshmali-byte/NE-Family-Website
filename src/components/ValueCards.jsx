import { useState } from 'react'

function ValueCards({ valueCards }) {
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpanded = (title) => {
    setExpandedCards((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <section className="pb-16" id="services">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10">

        {valueCards.map((card, index) => {
          const isReverse = index % 2 !== 0
          const isLongContent = card.text.length > 700
          const isExpanded = Boolean(expandedCards[card.title])
          const previewText = isLongContent ? `${card.text.slice(0, 450)}...` : card.text

          return (
            <article
              key={card.title}
              className={`
                card-surface-dark
                interactive-card interactive-card-dark
                group
                grid items-center gap-8
                p-6 md:p-10
                text-white
                md:grid-cols-[1fr_auto]
                ${isReverse ? 'md:grid-cols-[auto_1fr]' : ''}
              `}
            >

              {/* TEXT */}
              <div
                className={`inline-block
                  ${isReverse ? 'md:order-2 md:text-right md:items-end' : ''}
                  flex flex-col justify-center
                `}
              >
                <div className={`w-fit ${isReverse ? 'ml-auto' : ''}`}>
                  <h3 className="card-heading card-text-dark">
                    {card.title}
                  </h3>

                  {/* Accent Line */}
                  <div
                    className="
                      mt-2 h-[3px] w-full rounded-full
                      bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-primary)]
                      shadow-[0_0_14px_rgba(34,211,238,0.35)]
                    "
                  />
                </div>

                <p
                  className={`
                    mt-4
                    card-body card-text-muted-dark
                    max-w-2xl
                    ${isReverse ? 'ml-auto' : ''}
                  `}
                >
                  {isLongContent && !isExpanded ? previewText : card.text}
                </p>

                {isLongContent && (
                  <button
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:text-white ${
                      isReverse ? 'ml-auto' : ''
                    }`}
                    onClick={() => toggleExpanded(card.title)}
                    type="button"
                  >
                    <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-accent)] transition ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                )}
              </div>

              {/* ICON */}
              <div
                className={`
                  flex items-center justify-center
                  ${isReverse ? 'md:order-1' : ''}
                `}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="
                    h-24 w-24
                    md:h-32 md:w-32
                    lg:h-36 lg:w-36
                    object-contain
                    opacity-90
                    transition duration-300 group-hover:scale-105
                  "
                />
              </div>

            </article>
          )
        })}

      </div>
    </section>
  )
}

export default ValueCards

