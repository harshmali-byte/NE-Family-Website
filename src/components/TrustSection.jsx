import { useRef } from 'react'

function TrustSection({ trustMetrics }) {
  return (
    <section className="py-12 md:py-14" id="reviews">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <article className="card-surface-dark interactive-card interactive-card-dark p-6 md:p-10">
          <h3 className="card-heading card-text-dark text-center md:text-3xl">
            Why Work with N.E. Family?
          </h3>
          <div className="mx-auto mt-2 h-[3px] w-full max-w-3xl rounded-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-secondary)] to-[var(--color-primary)] shadow-[0_0_14px_rgba(34,211,238,0.35)]" />

          <p className="card-body card-text-muted-dark mx-auto mt-4 max-w-2xl text-center">
            Trusted by our customers across platforms.
          </p>

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
            "
          >
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  card-surface-elevated interactive-card interactive-card-dark group
                  flex flex-col items-center
                  rounded-[var(--radius-card)]
                  border border-white/10
                  p-4
                  text-center
                  transition duration-300
                "
              >
                <img
                  src={metric.icon}
                  alt={metric.label}
                  className="
                    h-16 w-16
                    sm:h-20 sm:w-20
                    md:h-24 md:w-24
                    lg:h-28 lg:w-28
                    object-contain
                    transition duration-300
                    group-hover:scale-110
                  "
                />
                <p className="card-body card-text-muted-dark mt-3 text-[10px] font-semibold uppercase tracking-wider sm:text-xs md:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}


export default TrustSection
