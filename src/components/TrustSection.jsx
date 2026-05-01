function TrustSection({ trustMetrics }) {
  return (
    <section className="border-t border-app-border bg-app-card py-12 md:py-14" id="reviews">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <article className="card-surface-light interactive-card interactive-card-light p-6 md:p-10">
          <h3 className="card-heading card-text-light text-center md:text-3xl">
            Why Work with N.E. Family?
          </h3>
          <div className="mx-auto mt-2 h-[3px] w-full max-w-3xl rounded-full bg-app-primary" />

          <p className="card-body card-text-muted-light mx-auto mt-4 max-w-2xl text-center">
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
                  flex flex-col items-center
                  rounded-card
                  border border-app-border
                  bg-app-muted
                  p-4
                  text-center
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
                  "
                />
                <p className="card-body card-text-muted-light mt-3 text-[10px] font-semibold uppercase tracking-wider sm:text-xs md:text-sm">
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
