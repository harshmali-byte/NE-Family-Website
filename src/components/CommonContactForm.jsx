import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useI18n } from '../i18n.jsx'

function CommonContactForm({ subject = 'New contact inquiry', className = '' }) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const containerClass = 'card-surface-light interactive-card interactive-card-light p-5 md:p-6'

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
          className="form-field-inline"
          name="name"
          placeholder={t.contact.fullName}
          required
        />

        <input
          className="form-field-inline"
          name="email"
          placeholder={t.contact.emailAddress}
          required
          type="email"
        />

        <textarea
          className="form-field-inline min-h-[100px] resize-y"
          name="message"
          placeholder={t.contact.message}
          required
        />

        <label className="form-label-inline">
          <input className="form-checkbox h-5 w-5 accent-app-accent" required type="checkbox" />
          <span>{t.contact.robot}</span>
        </label>

        {success && (
          <div className="form-message--inline-success">
            <FontAwesomeIcon icon={faCheckCircle} />
            {t.contact.success}
          </div>
        )}

        <button
          className="primary-btn w-full rounded-card py-3 font-semibold"
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
