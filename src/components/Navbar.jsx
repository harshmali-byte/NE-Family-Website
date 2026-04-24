import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/New-England-Family-Logo.webp'

function Navbar({ navItems, isMobileMenuOpen, onToggleMenu, onCloseMenu }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPolicyMenuOpen, setIsPolicyMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({ label: 'English', flag: '🇺🇸' })
  const location = useLocation()
  const navHrefMap = {
    'My Policy': '/#home',
    'Get A New Policy': '/get-a-new-policy',
    Reviews: '/reviews',
    'About Us': '/about',
    'Contact Us': '/contact',
  }
  const policySubsections = ['Pay My Bill', 'Policy Change', 'Certificate', 'File A Claim']
  const languageOptions = [
    { label: 'Português', flag: '🇵🇹' },
    { label: 'Español', flag: '🇪🇸' },
    { label: 'English', flag: '🇺🇸' },
  ]

  const isActiveItem = (item) => {
    if (item === 'Contact Us' || item === 'About Us' || item === 'Reviews' || item === 'Get A New Policy') {
      return location.pathname === navHrefMap[item]
    }

    if (location.pathname !== '/') {
      return false
    }

    const expectedHash = navHrefMap[item].replace('/', '')
    return location.hash ? location.hash === expectedHash : item === 'My Policy'
  }

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
      className={`sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur transition-all duration-300 ${
        isScrolled ? 'shadow-[var(--shadow-navbar)]' : 'shadow-none'
      }`}
    >
      <div className="mx-auto cursor-pointer flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-3" onClick={onCloseMenu} to="/#home">
            <img alt="New England Family logo" className="h-10 w-10 rounded-full object-cover" src={logo} />
            </Link>
        </div>

        <nav className="hidden   items-center gap-8 text-sm font-semibold text-[var(--color-text-muted)] md:flex">
          {navItems.map((item) => (
            item === 'My Policy' ? (
              <div
                className="group relative"
                key={item}
                onMouseEnter={() => setIsPolicyMenuOpen(true)}
                onMouseLeave={() => setIsPolicyMenuOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-2 pb-1 transition ${
                    isActiveItem(item) ? 'text-[var(--color-primary)]' : 'hover:text-[var(--color-primary)]'
                  }`}
                  onClick={() => setIsPolicyMenuOpen((prev) => !prev)}
                  type="button"
                >
                  {item}
                  <span className="text-xs">▼</span>
                </button>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 ${
                    isActiveItem(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />

                {isPolicyMenuOpen && (
                  <div className="absolute left-0 top-full mt-4 min-w-[157px] bg-black px-8 py-6 text-white shadow-2xl">
                    <ul className="space-y-4 text-md font-semibold">
                      {policySubsections.map((subsection) => (
                        <li key={subsection}>
                          <a className="transition hover:text-[var(--color-secondary)]" href="#">
                            {subsection}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                className={`group relative pb-1 transition ${
                  isActiveItem(item) ? 'text-[var(--color-primary)]' : 'hover:text-[var(--color-primary)]'
                }`}
                to={navHrefMap[item] || '/'}
                key={item}
                onClick={onCloseMenu}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 ${
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
              <span>{selectedLanguage.flag}</span>
              <span>{selectedLanguage.label.toUpperCase()}</span>
              <span className="text-xs">▼</span>
            </button>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-secondary)] transition-all duration-300 ${
                isLanguageMenuOpen ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />

            {isLanguageMenuOpen && (
              <div className="absolute right-0 top-full mt-4 min-w-[185px] bg-black px-8 py-6 text-white shadow-2xl">
                <ul className="space-y-4 text-2xl font-semibold">
                  {languageOptions.map((language) => (
                    <li key={language.label}>
                      <button
                        className={`inline-flex items-center gap-2 transition ${
                          selectedLanguage.label === language.label
                            ? 'text-[var(--color-secondary)]'
                            : 'hover:text-[var(--color-secondary)]'
                        }`}
                        onClick={() => {
                          setSelectedLanguage(language)
                          setIsLanguageMenuOpen(false)
                        }}
                        type="button"
                      >
                        <span>{language.flag}</span>
                        <span>{language.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button className=" rounded-[var(--radius-card)] bg-[var(--color-secondary)] text-white hidden px-5 py-2 text-sm font-semibold md:inline-flex">
            Get a Quote
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
            {navItems.map((item) => (
              <li key={item}>
                {item === 'My Policy' ? (
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
                        <li key={subsection}>
                          <a
                            className="block rounded-md px-2 py-1 text-xs font-medium text-[var(--color-text-muted)] transition hover:bg-slate-50 hover:text-[var(--color-primary)]"
                            href="#"
                          >
                            {subsection}
                          </a>
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
              Language
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
                    onClick={() => setSelectedLanguage(language)}
                    type="button"
                  >
                    {language.flag} {language.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button className="primary-btn mt-4 inline-flex w-full items-center justify-center px-5 py-2 text-sm font-semibold">
            Get a Quote
          </button>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-[var(--color-secondary)]" />
    </header>
  )
}

export default Navbar
