import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/New-England-Family-Logo.webp'
import { useI18n } from '../i18n.jsx'

function Navbar({ isMobileMenuOpen, onToggleMenu, onCloseMenu }) {
  const { language, setLanguage, languageMeta, t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPolicyMenuOpen, setIsPolicyMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const location = useLocation()
  const selectedLanguage = languageMeta[language]
  const languageOptions = [
    { code: 'pt', ...languageMeta.pt },
    { code: 'es', ...languageMeta.es },
    { code: 'en', ...languageMeta.en },
  ]
  const navItemsTranslated = [
    t.navbar.myPolicy,
    t.navbar.getNewPolicy,
    t.navbar.reviews,
    t.navbar.contactUs,
    t.navbar.aboutUs,
  ]
  const navHrefMap = {
    [t.navbar.myPolicy]: '/pay-my-bill',
    [t.navbar.getNewPolicy]: '/get-a-new-policy',
    [t.navbar.reviews]: '/reviews',
    [t.navbar.aboutUs]: '/about',
    [t.navbar.contactUs]: '/contact',
  }
  const policySubsections = [
    { label: t.navbar.payMyBill, to: '/pay-my-bill' },
    { label: t.navbar.policyChange, to: '/policy-change' },
    { label: t.navbar.certificate, to: '/certificate' },
    { label: t.navbar.fileAClaim, to: '/file-a-claim' },
  ]

  const isActiveItem = (item) => {
    if (
      item === t.navbar.contactUs ||
      item === t.navbar.aboutUs ||
      item === t.navbar.reviews ||
      item === t.navbar.getNewPolicy
    ) {
      return location.pathname === navHrefMap[item]
    }

    if (item === t.navbar.myPolicy) {
      return ['/pay-my-bill', '/policy-change', '/certificate', '/file-a-claim'].includes(location.pathname)
    }

    return false
  }
  

  const navAccentClass = 'text-[var(--color-primary)]'

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onCloseMenu()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen, onCloseMenu])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 ${
        isScrolled ? 'shadow-[var(--shadow-navbar)]' : 'shadow-none'
      }`}
    >
      <div className="mx-auto cursor-pointer flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-3" onClick={onCloseMenu} to="/#home">
            <img alt="New England Family logo" className="h-10 w-10 rounded-full object-cover" src={logo} />
            </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-bold text-[var(--color-text-muted)] md:flex">
          {navItemsTranslated.map((item) => (
            item === t.navbar.myPolicy ? (
              <div
                className="group relative"
                key={item}
                onMouseEnter={() => setIsPolicyMenuOpen(true)}
                onMouseLeave={() => setIsPolicyMenuOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-2 pb-1 transition ${
                    isActiveItem(item) ? navAccentClass : 'hover:text-[var(--color-primary)]'
                  }`}
                  onClick={() => setIsPolicyMenuOpen((prev) => !prev)}
                  type="button"
                >
                  {item}
                  <span className="text-xs">▼</span>
                </button>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                    isActiveItem(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />

                {isPolicyMenuOpen && (
                  <div className="absolute left-0 top-full z-50 min-w-[157px] pt-4">
                    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-strong)] text-[var(--color-text)]">
                      <ul className="space-y-3 text-sm font-semibold">
                        {policySubsections.map((subsection) => (
                          <li key={subsection.label}>
                            <Link
                              className="transition hover:text-[var(--color-accent)]"
                              to={subsection.to}
                              onClick={() => setIsPolicyMenuOpen(false)}
                            >
                              {subsection.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                className={`group relative pb-1 transition ${
                  isActiveItem(item) ? navAccentClass : 'hover:text-[var(--color-primary)]'
                }`}
                to={navHrefMap[item] || '/'}
                key={item}
                onClick={onCloseMenu}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                    isActiveItem(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          ))}

          <div
            className="group relative"
            onMouseEnter={() => setIsLanguageMenuOpen(true)}
            onMouseLeave={() => setIsLanguageMenuOpen(false)}
          >
            <button
              className="inline-flex items-center gap-2 pb-1 transition hover:text-[var(--color-primary)]"
              onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
              type="button"
            >
              <img
                alt={selectedLanguage.alt}
                className="h-4 w-4 rounded-full border border-[var(--color-border)] object-cover"
                src={selectedLanguage.flagUrl}
              />
              <span>{selectedLanguage.label.toUpperCase()}</span>
              <span className="text-xs">▼</span>
            </button>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                isLanguageMenuOpen ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />

            {isLanguageMenuOpen && (
              <div className="absolute right-0 top-full z-50 pt-4">
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-strong)] text-[var(--color-text)]">
                  <ul className="space-y-3 text-sm font-semibold">
                    {languageOptions.map((language) => (
                      <li key={language.label}>
                        <button
                          className={`inline-flex items-center gap-2 transition ${
                            selectedLanguage.label === language.label
                              ? 'text-[var(--color-accent)]'
                              : 'hover:text-[var(--color-accent)]'
                          }`}
                          onClick={() => {
                            setLanguage(language.code)
                            setIsLanguageMenuOpen(false)
                          }}
                          type="button"
                        >
                          <img
                            alt={language.alt}
                            className="h-5 w-5 rounded-full border border-[var(--color-border)] object-cover"
                            src={language.flagUrl}
                          />
                          <span>{language.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button className="primary-btn hidden px-5 py-2 text-sm font-semibold md:inline-flex" type="button">
            {t.navbar.getQuote}
          </button>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-primary)] md:hidden"
            onClick={onToggleMenu}
            type="button"
          >
            {isMobileMenuOpen ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <span className="text-lg leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${isMobileMenuOpen ? 'max-h-[360px] border-t border-[var(--color-border)]' : 'max-h-0'} overflow-hidden bg-[var(--color-surface)] transition-all duration-300`}
        id="mobile-menu"
      >
        <nav className="px-6 py-4">
          <ul className="space-y-3">
            {navItemsTranslated.map((item) => (
              <li key={item}>
                {item === t.navbar.myPolicy ? (
                  <div>
                    <Link
                      className={`block rounded-md px-2 py-2 text-sm font-semibold transition ${
                        isActiveItem(item)
                          ? 'bg-slate-50 text-[var(--color-primary)]'
                          : 'text-[var(--color-text-muted)] hover:bg-slate-50 hover:text-[var(--color-primary)]'
                      }`}
                      to={navHrefMap[item] || '/'}
                      onClick={onCloseMenu}
                    >
                      {item}
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-3">
                      {policySubsections.map((subsection) => (
                        <li key={subsection.label}>
                          <Link
                            className="block rounded-md px-2 py-1 text-xs font-medium text-[var(--color-text-muted)] transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                            to={subsection.to}
                          >
                            {subsection.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    className={`block rounded-md px-2 py-2 text-sm font-semibold transition ${
                      isActiveItem(item)
                        ? 'bg-slate-50 text-[var(--color-primary)]'
                        : 'text-[var(--color-text-muted)] hover:bg-slate-50 hover:text-[var(--color-primary)]'
                    }`}
                    to={navHrefMap[item] || '/'}
                    onClick={onCloseMenu}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-[var(--color-border)] pt-3">
            <p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
              {t.navbar.language}
            </p>
            <ul className="space-y-1">
              {languageOptions.map((language) => (
                <li key={language.label}>
                  <button
                    className={`block w-full rounded-md px-2 py-2 text-left text-sm font-semibold transition ${
                      selectedLanguage.label === language.label
                        ? 'bg-slate-50 text-[var(--color-primary)]'
                        : 'text-[var(--color-text-muted)] hover:bg-slate-50 hover:text-[var(--color-primary)]'
                    }`}
                    onClick={() => setLanguage(language.code)}
                    type="button"
                  >
                    <span className="inline-flex items-center gap-2">
                      <img
                        alt={language.alt}
                        className="h-4 w-4 rounded-full border border-[var(--color-border)] object-cover"
                        src={language.flagUrl}
                      />
                      {language.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="primary-btn mt-4 inline-flex w-full items-center justify-center px-5 py-2 text-sm font-semibold" type="button">
            {t.navbar.getQuote}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
