import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommonContactForm from './CommonContactForm'

function PolicyActionPage({ title, prompt, options }) {
  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="text-center text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
          {title}
        </h1>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="card-heading text-white md:text-3xl">{prompt}</h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {options.map((option) => (
                option.href ? (
                  <a
                    className="card-surface-light interactive-card interactive-card-light group flex min-h-[122px] flex-col items-center justify-center p-4 text-[var(--color-primary)] transition duration-300 hover:shadow-[var(--shadow-strong)]"
                    href={option.href}
                    key={option.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon className="text-4xl transition duration-300 group-hover:scale-110" icon={option.icon} />
                    <span className="card-subheading mt-3 text-[var(--color-primary)]">{option.label}</span>
                  </a>
                ) : (
                  <button
                    className="card-surface-light interactive-card interactive-card-light group flex min-h-[122px] flex-col items-center justify-center p-4 text-[var(--color-primary)] transition duration-300 hover:shadow-[var(--shadow-strong)]"
                    key={option.label}
                    type="button"
                  >
                    <FontAwesomeIcon className="text-4xl transition duration-300 group-hover:scale-110" icon={option.icon} />
                    <span className="card-subheading mt-3 text-[var(--color-primary)]">{option.label}</span>
                  </button>
                )
              ))}
            </div>
          </div>

          <CommonContactForm subject={`${title} inquiry`} theme="dark" />
        </div>
      </div>
    </section>
  )
}

export default PolicyActionPage
