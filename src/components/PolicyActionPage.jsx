import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CommonContactForm from './CommonContactForm'

function PolicyActionPage({ title, prompt, options }) {
  const neonVariants = [
    {
      border: 'border-cyan-300/35 hover:border-cyan-300/70',
      ring: 'border-cyan-300/75 text-cyan-300',
      text: 'text-cyan-300',
      button: 'border-cyan-300/65 text-cyan-300 hover:bg-cyan-300/15',
      glow: 'shadow-[0_0_22px_rgba(34,211,238,0.16)]',
      bg: 'bg-[linear-gradient(165deg,#04133a_0%,#061a48_75%,#082154_100%)]',
    },
    {
      border: 'border-emerald-300/35 hover:border-emerald-300/70',
      ring: 'border-emerald-300/75 text-emerald-300',
      text: 'text-emerald-300',
      button: 'border-emerald-300/65 text-emerald-300 hover:bg-emerald-300/15',
      glow: 'shadow-[0_0_22px_rgba(52,211,153,0.16)]',
      bg: 'bg-[linear-gradient(165deg,#06213f_0%,#072744_75%,#083048_100%)]',
    },
    {
      border: 'border-violet-300/35 hover:border-violet-300/70',
      ring: 'border-violet-300/75 text-violet-300',
      text: 'text-violet-300',
      button: 'border-violet-300/65 text-violet-300 hover:bg-violet-300/15',
      glow: 'shadow-[0_0_22px_rgba(196,181,253,0.16)]',
      bg: 'bg-[linear-gradient(165deg,#151247_0%,#1c1552_75%,#251d61_100%)]',
    },
    {
      border: 'border-amber-300/35 hover:border-amber-300/70',
      ring: 'border-amber-300/75 text-amber-300',
      text: 'text-amber-300',
      button: 'border-amber-300/65 text-amber-300 hover:bg-amber-300/15',
      glow: 'shadow-[0_0_22px_rgba(251,191,36,0.16)]',
      bg: 'bg-[linear-gradient(165deg,#21193d_0%,#2a1f46_75%,#342953_100%)]',
    },
  ]

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="text-center text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
          {title}
        </h1>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#040a24_0%,#0a1234_100%)] p-6 md:p-8">
            <h2 className="card-heading text-white md:text-3xl">{prompt}</h2>
            <div className="mt-2 h-[3px] w-44 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400" />

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {options.map((option, index) => {
                const variant = neonVariants[index % neonVariants.length]

                const cardClassName = `
                  group relative overflow-hidden rounded-[18px] border ${variant.border} ${variant.bg}
                  ${variant.glow} min-h-[170px] p-4 text-center transition duration-300
                  hover:-translate-y-1
                `

                const iconWrapClass = `mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${variant.ring} bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`
                const labelClass = `card-subheading mt-4 text-[1.1rem] ${variant.text}`
                const actionClass = `mt-4 inline-flex h-8 w-14 items-center justify-center rounded-full border ${variant.button} transition`

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
                      <FontAwesomeIcon className="text-2xl transition duration-300 group-hover:scale-110" icon={option.icon} />
                    </div>
                    <span className={labelClass}>{option.label}</span>
                    <span className={actionClass}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                  )
                }

                return (
                  <button
                    className={cardClassName}
                    key={option.label}
                    type="button"
                  >
                    <div className={iconWrapClass}>
                      <FontAwesomeIcon className="text-2xl transition duration-300 group-hover:scale-110" icon={option.icon} />
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

          <CommonContactForm subject={`${title} inquiry`} theme="dark" />
        </div>
      </div>
    </section>
  )
}

export default PolicyActionPage
