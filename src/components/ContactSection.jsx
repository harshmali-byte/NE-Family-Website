import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots, faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useI18n } from '../i18n.jsx'
import CommonContactForm from './CommonContactForm'

function ContactSection() {
  const { t } = useI18n()

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
        <CommonContactForm subject="New contact inquiry" theme="dark" />
      </div>
    </section>
  )
}

export default ContactSection