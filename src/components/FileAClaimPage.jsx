import { faBriefcase, faCarSide, faHouse } from '@fortawesome/free-solid-svg-icons'
import PolicyActionPage from './PolicyActionPage'
import { useI18n } from '../i18n.jsx'

function FileAClaimPage() {
  const { t } = useI18n()
  const options = [
    { label: t.policy.auto, icon: faCarSide },
    { label: t.policy.home, icon: faHouse },
    { label: t.policy.business, icon: faBriefcase },
  ]

  return <PolicyActionPage options={options} prompt={t.policy.fileClaimPrompt} />
}

export default FileAClaimPage
