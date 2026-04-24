import { useRef } from 'react'

function TrustSection({ trustMetrics }) {
  return (
    <section className="border-t border-white/10 bg-[var(--color-dark)]" id="reviews">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-14">

        {/* HEADING */}
        <h3 className="text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
          REVIEWS
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-center text-xs text-slate-400 sm:text-sm">
          Trusted by our customers across platforms.
        </p>

        {/* GRID (NO SCROLL) */}
        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-6
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="
                group
                flex flex-col items-center
                text-center
                transition duration-300
                hover:-translate-y-1
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

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs md:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default TrustSection