import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import bbbBadge from '../assets/bbbb-300x209.webp'
import logo from '../assets/New-England-Family-Logo.webp'
import trustpilotBadge from '../assets/trust-300x300.webp'

function Footer() {
  return (
    <footer className="bg-black">
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
            <li className="cursor-pointer hover:text-white">My Account</li>
            <li className="cursor-pointer hover:text-white">Get a Quote</li>
            <li className="cursor-pointer hover:text-white">Roadside Help</li>
            <li className="cursor-pointer hover:text-white">Claims Center</li>
            <li className="cursor-pointer hover:text-white">Emergency Contact</li>
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
                icon={faMapMarkerAlt}
                className="text-[var(--color-primary)]"
              />
              <span>101 President Ave Suite #1, Fall River, MA</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[var(--color-primary)]"
              />
              <span>+1 508 672 2997</span>
            </li>

            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[var(--color-primary)]"
              />
              <span>service@nefamily4me.com</span>
            </li>
          </ul>
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