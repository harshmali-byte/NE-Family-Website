import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CommonContactForm from './CommonContactForm'

function PolicyActionPage({ title, prompt, options }) {
  const cardClassName = `
    group relative overflow-hidden rounded-[18px] border border-app-border
    bg-app-muted min-h-[170px] p-4 text-center transition
    hover:border-app-border-hover
  `

  const iconWrapClass =
    'mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-app-border bg-app-card text-app-text'
  const labelClass = 'card-subheading mt-4 text-[1.1rem] text-app-text'
  const actionClass =
    'mt-4 inline-flex h-8 w-14 items-center justify-center rounded-full border border-app-border text-app-text-muted transition hover:border-app-text-muted hover:text-app-text'

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="text-center text-4xl font-black uppercase tracking-wide text-app-text md:text-5xl">
          {title}
        </h1>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[24px] border border-app-border bg-app-card p-6 shadow-app-soft md:p-8">
            <h2 className="card-heading text-app-text md:text-3xl">{prompt}</h2>
            <div className="mt-2 h-[3px] w-44 rounded-full bg-app-primary" />

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {options.map((option) => {
                if (option.href) {
                  return (
                    <a
                      className={cardClassName}
                      href={option.href}
                      key={option.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className={iconWrapClass}>
                        <FontAwesomeIcon className="text-2xl" icon={option.icon} />
                      </div>
                      <span className={labelClass}>{option.label}</span>
                      <span className={actionClass}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </a>
                  )
                }

                return (
                  <button className={cardClassName} key={option.label} type="button">
                    <div className={iconWrapClass}>
                      <FontAwesomeIcon className="text-2xl" icon={option.icon} />
                    </div>
                    <span className={labelClass}>{option.label}</span>
                    <span className={actionClass}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <CommonContactForm subject={`${title} inquiry`} />
        </div>
      </div>
    </section>
  )
}

export default PolicyActionPage
