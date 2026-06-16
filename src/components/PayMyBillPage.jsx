import { faMobileScreenButton, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import PolicyActionPage from './PolicyActionPage'
import { useI18n } from '../i18n.jsx'

function PayMyBillPage() {
  const { t } = useI18n()
  const options = [
    { label: t.policy.text, icon: faMobileScreenButton, href: 'sms:+15086722997?body=Hi%2C%20I%20need%20help%20with%20my%20bill.' },
    { label: t.policy.whatsapp, icon: faWhatsapp, href: 'https://wa.me/15086722997?text=Hi%2C%20I%20need%20help%20with%20my%20bill.' },
    { label: t.policy.callUs, icon: faPhoneVolume, href: 'tel:+15086722997' },
  ]

  return <PolicyActionPage options={options} prompt={t.policy.payMyBillPrompt}  />
}

export default PayMyBillPage
