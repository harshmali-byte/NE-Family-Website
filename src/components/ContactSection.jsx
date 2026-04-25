import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots, faEnvelope, faFax, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useI18n } from '../i18n.jsx'

function ContactSection() {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    try {
      await fetch('https://formsubmit.co/ajax/harsh@asquarify.com', {
        method: 'POST',
        body: formData,
      })

      setSuccess(true)
      e.target.reset()

      // optional: hide success after few seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[var(--color-page-bg)] py-16" id="contact">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-10">

        {/* LEFT */}
        <div className="text-black">
          <h3 className="text-3xl font-semibold tracking-wide md:text-4xl">
            {t.contact.title}
          </h3>

          <ul className="mt-8 space-y-4 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCommentDots} />
              <a className="hover:text-[var(--color-primary)]" href="sms:+918120270109?body=Hi%2C%20I%20need%20insurance%20help.">
                {t.contact.text}: +91 8120270109
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faWhatsapp} />
              <a
                className="hover:text-[var(--color-primary)]"
                href="https://wa.me/918120270109?text=Hi%2C%20I%20need%20insurance%20help."
                rel="noreferrer"
                target="_blank"
              >
                {t.contact.whatsapp}: +91 8120270109
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{t.contact.email}: service@nefamily4me.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} />
              <a className="hover:text-[var(--color-primary)]" href="tel:+918120270109">
                {t.contact.call}: +91 8120270109
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faFax} />
              <span>{t.contact.fax}: 508.677.3058</span>
            </li>
          </ul>
        </div>

        {/* FORM */}
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-softer)] bg-[var(--color-dark-elevated)] p-5 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input name="_subject" type="hidden" value="New contact inquiry" />
            <input name="_captcha" type="hidden" value="false" />

            <input
              className="w-full border-b border-white/20 bg-transparent px-2 py-3 text-white"
              name="name"
              placeholder={t.contact.fullName}
              required
            />

            <input
              className="w-full border-b border-white/20 bg-transparent px-2 py-3 text-white"
              name="email"
              placeholder={t.contact.emailAddress}
              required
              type="email"
            />

            <textarea
              className="w-full border-b border-white/20 bg-transparent px-2 py-3 text-white"
              name="message"
              placeholder={t.contact.message}
              required
            />

            <label className="flex items-center gap-3 text-white">
              <input className="form-checkbox h-5 w-5 text-[var(--color-primary)]" type="checkbox" required />
              <span>{t.contact.robot}</span>
            </label>

            {success && (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <FontAwesomeIcon icon={faCheckCircle} />
                {t.contact.success}
              </div>
            )}

            <button
              disabled={loading}
              className="w-full rounded-[var(--radius-card)] bg-[var(--color-secondary)] py-3 text-white"
              type="submit"
            >
              {loading ? t.contact.submitting : t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection