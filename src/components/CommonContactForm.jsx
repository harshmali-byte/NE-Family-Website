import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useI18n } from '../i18n.jsx'

function CommonContactForm({ subject = 'New contact inquiry', className = '', theme = 'dark' }) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const isDark = theme === 'dark'
  const containerClass = isDark
    ? 'card-surface-dark interactive-card interactive-card-dark p-5 md:p-6'
    : 'card-surface-light interactive-card interactive-card-light p-5 md:p-6'
  const fieldClass = isDark
    ? 'w-full border-b border-white/20 bg-transparent px-2 py-3 text-white placeholder:text-white/65'
    : 'w-full border-b border-[var(--color-border)] bg-transparent px-2 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]'
  const labelClass = isDark ? 'flex items-center gap-3 text-white' : 'flex items-center gap-3 text-[var(--color-text)]'
  const successClass = isDark ? 'flex items-center gap-2 text-green-400 text-sm font-medium' : 'flex items-center gap-2 text-sm font-medium text-green-600'

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
    <div className={`${containerClass} ${className}`.trim()}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="_subject" type="hidden" value={subject} />
        <input name="_captcha" type="hidden" value="false" />

        <input
          className={fieldClass}
          name="name"
          placeholder={t.contact.fullName}
          required
        />

        <input
          className={fieldClass}
          name="email"
          placeholder={t.contact.emailAddress}
          required
          type="email"
        />

        <textarea
          className={fieldClass}
          name="message"
          placeholder={t.contact.message}
          required
        />

        <label className={labelClass}>
          <input className="form-checkbox h-5 w-5 text-[var(--color-primary)]" required type="checkbox" />
          <span>{t.contact.robot}</span>
        </label>

        {success && (
          <div className={successClass}>
            <FontAwesomeIcon icon={faCheckCircle} />
            {t.contact.success}
          </div>
        )}

        <button
          className="w-full rounded-[var(--radius-card)] bg-[var(--color-secondary)] py-3 text-white shadow-[var(--shadow-secondary)] transition hover:brightness-110"
          disabled={loading}
          type="submit"
        >
          {loading ? t.contact.submitting : t.contact.submit}
        </button>
      </form>
    </div>
  )
}

export default CommonContactForm
