function ValueCards({ valueCards }) {
  return (
    <section className="bg-[var(--color-page-bg)] pb-16" id="services">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10">

        {valueCards.map((card, index) => {
          const isReverse = index % 2 !== 0

          return (
            <article
              key={card.title}
              className={`
                dark-card
                grid items-center gap-8
                p-6 md:p-10
                text-white
                md:grid-cols-[1fr_auto]
                ${isReverse ? 'md:grid-cols-[auto_1fr]' : ''}
              `}
            >

              {/* TEXT */}
              <div
                className={`
                  ${isReverse ? 'md:order-2 md:text-right md:items-end' : ''}
                  flex flex-col justify-center
                `}
              >
                <h3 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h3>

                {/* Accent Line */}
                <div
                  className={`
                    mt-2 h-1 w-20 bg-[var(--color-accent)]
                    ${isReverse ? 'ml-auto' : ''}
                  `}
                />

                <p
                  className={`
                    mt-4
                    text-sm md:text-base
                    leading-7 md:leading-8
                    text-slate-300
                    max-w-2xl
                    ${isReverse ? 'ml-auto' : ''}
                  `}
                >
                  {card.text}
                </p>
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