import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function PolicyActionPage({ title, prompt, options }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)

    try {
      await fetch('https://formsubmit.co/ajax/harsh@asquarify.com', {
        method: 'POST',
        body: formData,
      })
      setSuccess(true)
      event.target.reset()
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[var(--color-page-bg)] py-14">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="text-center text-4xl font-black uppercase tracking-wide text-[var(--color-text)] md:text-5xl">
          {title}
        </h1>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-text)]">{prompt}</h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {options.map((option) => (
                option.href ? (
                  <a
                    className="surface-card group flex min-h-[122px] flex-col items-center justify-center p-4 text-[var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                    href={option.href}
                    key={option.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon className="text-4xl transition duration-300 group-hover:scale-110" icon={option.icon} />
                    <span className="mt-3 text-lg font-bold text-[var(--color-primary)]">{option.label}</span>
                  </a>
                ) : (
                  <button
                    className="surface-card group flex min-h-[122px] flex-col items-center justify-center p-4 text-[var(--color-primary)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]"
                    key={option.label}
                    type="button"
                  >
                    <FontAwesomeIcon className="text-4xl transition duration-300 group-hover:scale-110" icon={option.icon} />
                    <span className="mt-3 text-lg font-bold text-[var(--color-primary)]">{option.label}</span>
                  </button>
                )
              ))}
            </div>
          </div>

          <div className="surface-card p-5 md:p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="_subject" type="hidden" value={`${title} inquiry`} />
              <input name="_captcha" type="hidden" value="false" />

              <input
                className="w-full border-b border-[var(--color-border)] bg-transparent px-2 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                className="w-full border-b border-[var(--color-border)] bg-transparent px-2 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
                name="email"
                placeholder="Email address"
                required
                type="email"
              />

              <textarea
                className="w-full border-b border-[var(--color-border)] bg-transparent px-2 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
                name="message"
                placeholder="Message"
                required
              />

              <label className="flex items-center gap-3 text-[var(--color-text)]">
                <input className="form-checkbox h-5 w-5 text-[var(--color-primary)]" required type="checkbox" />
                <span>I&apos;m not a robot</span>
              </label>

              {success && (
                <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Form submitted successfully
                </div>
              )}

              <button
                className="w-full rounded-[var(--radius-card)] bg-[var(--color-secondary)] py-3 font-semibold text-white shadow-[var(--shadow-secondary)]"
                disabled={loading}
                type="submit"
              >
                {loading ? 'Submitting...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PolicyActionPage
