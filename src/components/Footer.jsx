import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCommentSms,
  faFax,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

import bbbBadge from '../assets/bbbb-300x209.webp'
import logo from '../assets/New-England-Family-Logo.webp'
import trustpilotBadge from '../assets/trust-300x300.webp'

const socialLinks = {
  facebook: 'https://www.facebook.com/newenglandfam',
  instagram: 'https://www.instagram.com/nefamilyinsurance/',
}

function Footer() {
  const quickLinks = [
    { label: 'My Policy', to: '/policy-change' },
    { label: 'Get a New Policy', to: '/get-a-new-policy' },
    { label: 'Pay My Bill', to: '/pay-my-bill' },
    { label: 'File A Claim', to: '/file-a-claim' },
    { label: 'Certificate Request', to: '/certificate' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Blog', to: '/blog' },
    { label: 'Privacy policy & Terms of Use', to: '/privacy-policy-terms-of-use' },
  ]

  return (
    <footer className="bg-black/80 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 text-white md:grid-cols-3 md:px-10">

        {/* LEFT - LOGO + LINKS */}
        <div>
          <img
            alt="New England Family logo"
            className="mb-4 h-12 w-12 rounded-full object-cover"
            src={logo}
          />

          <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
            Quick Links
          </h4>

          <ul className="mt-4 space-y-2 text-sm text-white/90">
            {quickLinks.map((link) => (
              <li key={link.label} className="cursor-pointer hover:text-white">
                {link.to ? <Link to={link.to}>{link.label}</Link> : link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
            Contact Us
          </h4>

          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCommentSms}
                className="text-2xl text-white"
              />
              <span>Text</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-2xl text-white"
              />
              <span>WhatsApp</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-white"
              />
              <span>Email: service@nefamily4me.com</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl text-white"
              />
              <span>Call: +15086722997</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faFax}
                className="text-2xl text-white"
              />
              <span>Fax: 508 677 3058</span>
            </li>
          </ul>

          <div className="mt-4 flex gap-2">
            <a
              aria-label="New England Family Insurance on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded bg-[var(--color-primary)]"
              href={socialLinks.facebook}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              aria-label="New England Family Insurance on Instagram"
              className="flex h-8 w-8 items-center justify-center rounded bg-white/10"
              href={socialLinks.instagram}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* MAP */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
            Location
          </h4>

          <iframe
            title="Office Location"
            className="mt-4 h-80 w-full rounded-[var(--radius-card)] border border-white/15"
            src="https://www.google.com/maps?q=101+President+Ave+Fall+River+MA&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 border-t border-white/10 px-6 py-8 md:px-10">

        <div className="flex gap-4">
          <img
            alt="Trustpilot badge"
            className="h-48 w-48 rounded-lg bg-white object-contain p-2"
            src={trustpilotBadge}
          />
          <img
            alt="BBB badge"
            className="h-48 w-48 rounded-lg bg-white object-contain p-2"
            src={bbbBadge}
          />
        </div>

        <p className="text-center text-xs text-slate-400">
          New England Family | 2026 | All rights reserved. Terms and Privacy apply.
        </p>
      </div>
    </footer>
  )
}

export default Footer
