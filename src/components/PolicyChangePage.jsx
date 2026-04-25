import { faMobileScreenButton, faPhoneVolume, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import PolicyActionPage from './PolicyActionPage'
import { useI18n } from '../i18n.jsx'

function PolicyChangePage() {
  const { t } = useI18n()
  const options = [
    { label: t.policy.doItHere, icon: faMoneyCheckDollar },
    { label: t.policy.text, icon: faMobileScreenButton, href: 'sms:+918120270109?body=Hi%2C%20I%20need%20help%20with%20a%20policy%20change.' },
    { label: t.policy.whatsapp, icon: faWhatsapp, href: 'https://wa.me/918120270109?text=Hi%2C%20I%20need%20help%20with%20a%20policy%20change.' },
    { label: t.policy.callUs, icon: faPhoneVolume, href: 'tel:+918120270109' },
  ]

  return <PolicyActionPage options={options} prompt={t.policy.policyChangePrompt}  />
}

export default PolicyChangePage
