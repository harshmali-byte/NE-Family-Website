import { useMemo, useState } from 'react'

const policies = [
  'General Liability',
  'Workers Comp',
  'Commercial Auto',
  'Commercial Umbrella',
]

const initialForm = {
  fullName: '',
  streetAddress: '',
  state: '',
  city: '',
  zip: '',
  email: '',
  includePolicies: '',
  selectedPolicies: [],
  acceptedTerms: false,
  captchaAnswer: '',
}

function CertificatePage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const captcha = useMemo(() => ({ left: 4, right: 7, answer: 11 }), [])
  const progress = step * 20
  const shouldShowPolicyOptions = form.includePolicies === 'Yes'

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setError('')
  }

  const togglePolicy = (policy) => {
    setForm((current) => ({
      ...current,
      selectedPolicies: current.selectedPolicies.includes(policy)
        ? current.selectedPolicies.filter((item) => item !== policy)
        : [...current.selectedPolicies, policy],
    }))
    setError('')
  }

  const validateStep = (currentStep = step) => {
    if (currentStep === 1 && !form.fullName.trim()) {
      return 'Please enter the certificate holder name.'
    }

    if (
      currentStep === 2 &&
      (!form.streetAddress.trim() || !form.state.trim() || !form.city.trim() || !form.zip.trim())
    ) {
      return 'Please complete the certificate holder address.'
    }

    if (currentStep === 3) {
      if (!form.email.trim()) return 'Please enter the email address.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.'
    }

    if (currentStep === 4 && !form.includePolicies) {
      return 'Please select Yes or No.'
    }

    if (currentStep === 5) {
      if (shouldShowPolicyOptions && form.selectedPolicies.length === 0) {
        return 'Please select at least one policy.'
      }
      if (!form.acceptedTerms) return 'Please agree to the terms & conditions.'
      if (Number(form.captchaAnswer) !== captcha.answer) return 'Please complete the captcha correctly.'
    }

    return ''
  }

  const next = () => {
    const validationError = validateStep()
    if (validationError) {
      setError(validationError)
      return
    }

    setStep((current) => Math.min(current + 1, 5))
    setError('')
  }

  const prev = () => {
    setStep((current) => Math.max(current - 1, 1))
    setError('')
    setSubmitted(false)
  }

  const submit = () => {
    const validationError = validateStep(5)
    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitted(true)
    setError('')
  }

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <h1 className="text-center text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
          CERTIFICATE
        </h1>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-xs text-white/70">
            <span>Step {step} of 5</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <article className="card-surface-dark interactive-card interactive-card-dark mt-8 p-6 md:p-8">
          {step === 1 && (
            <>
              <h2 className="card-subheading card-text-dark">Certificate Holder Name *</h2>
              <FloatingInput label="Full Name" onChange={(value) => updateField('fullName', value)} value={form.fullName} />
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="card-subheading card-text-dark">Certificate Holder Address *</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <FloatingInput label="Street Address" onChange={(value) => updateField('streetAddress', value)} spacing="mt-0" value={form.streetAddress} />
                <FloatingInput label="State / Province" onChange={(value) => updateField('state', value)} spacing="mt-0" value={form.state} />
                <FloatingInput label="City" onChange={(value) => updateField('city', value)} spacing="mt-0" value={form.city} />
                <FloatingInput label="ZIP / Postal Code" onChange={(value) => updateField('zip', value)} spacing="mt-0" value={form.zip} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="card-subheading card-text-dark">Where should we send it? *</h2>
              <FloatingInput label="Email Address" onChange={(value) => updateField('email', value)} type="email" value={form.email} />
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="card-subheading card-text-dark">Include all policies?</h2>
              <div className="mt-4 space-y-3">
                {['Yes', 'No'].map((option) => (
                  <label className="flex cursor-pointer items-center gap-3" key={option}>
                    <input
                      checked={form.includePolicies === option}
                      className="accent-[var(--color-accent)]"
                      name="includePolicies"
                      onChange={() => {
                        updateField('includePolicies', option)
                        if (option === 'No') updateField('selectedPolicies', [])
                      }}
                      type="radio"
                    />
                    <span className="card-body card-text-muted-dark">{option}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              {shouldShowPolicyOptions && (
                <>
                  <h2 className="card-subheading card-text-dark">Select Policies *</h2>
                  <div className="mt-4 space-y-3">
                    {policies.map((policy) => (
                      <label className="flex cursor-pointer items-center gap-3" key={policy}>
                        <input
                          checked={form.selectedPolicies.includes(policy)}
                          className="accent-[var(--color-accent)]"
                          onChange={() => togglePolicy(policy)}
                          type="checkbox"
                        />
                        <span className="card-body card-text-muted-dark">{policy}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}

              <div className={shouldShowPolicyOptions ? 'mt-6' : ''}>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    checked={form.acceptedTerms}
                    className="accent-[var(--color-accent)]"
                    onChange={(event) => updateField('acceptedTerms', event.target.checked)}
                    type="checkbox"
                  />
                  <span className="card-body card-text-muted-dark">
                    I agree to terms & conditions *
                  </span>
                </label>
              </div>

              <div className="mt-6 rounded-[var(--radius-card)] border border-white/15 bg-white/5 p-4">
                <p className="card-body card-text-muted-dark">
                  Captcha verification: What is {captcha.left} + {captcha.right}?
                </p>
                <input
                  className="mt-3 w-full rounded-[var(--radius-card)] border border-white/20 bg-[#0d1b3d] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(34,211,238,0.25)]"
                  onChange={(event) => updateField('captchaAnswer', event.target.value)}
                  placeholder="Enter answer"
                  type="number"
                  value={form.captchaAnswer}
                />
              </div>
            </>
          )}

          {error && (
            <p className="mt-6 rounded-[var(--radius-card)] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300">
              {error}
            </p>
          )}

          {submitted && (
            <p className="mt-6 rounded-[var(--radius-card)] border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300">
              Certificate request is ready to submit.
            </p>
          )}

          <div className="mt-8 flex justify-between">
            <button
              className="rounded-[var(--radius-card)] border border-white/20 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={step === 1}
              onClick={prev}
              type="button"
            >
              Previous
            </button>

            {step < 5 ? (
              <button
                className="rounded-[var(--radius-card)] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.35)] transition hover:opacity-90"
                onClick={next}
                type="button"
              >
                Next
              </button>
            ) : (
              <button
                className="rounded-[var(--radius-card)] bg-gradient-to-r from-emerald-400 to-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(52,211,153,0.35)] transition hover:opacity-90"
                onClick={submit}
                type="button"
              >
                Submit
              </button>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

function FloatingInput({ label, onChange, spacing = 'mt-6', type = 'text', value }) {
  return (
    <div className={`relative ${spacing}`}>
      <input
        className="peer w-full rounded-[var(--radius-card)] border border-white/20 bg-[#0d1b3d] px-4 pb-2 pt-5 text-sm text-white outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(34,211,238,0.25)]"
        onChange={(event) => onChange(event.target.value)}
        placeholder=" "
        type={type}
        value={value}
      />
      <label className="absolute left-4 top-2 text-xs text-white/65 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--color-accent)]">
        {label}
      </label>
    </div>
  )
}

export default CertificatePage
