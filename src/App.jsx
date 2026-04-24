import { useCallback, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import GetNewPolicyPage from './components/GetNewPolicyPage'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ReviewsPage from './components/ReviewsPage'
import TrustSection from './components/TrustSection'
import ValueCards from './components/ValueCards'
import { navItems, trustMetrics, valueCards } from './data'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = location.hash.replace('#', '')
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-[var(--color-page-bg)]">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        navItems={navItems}
        onCloseMenu={handleCloseMenu}
        onToggleMenu={handleToggleMenu}
      />

      <main className="bg-[var(--color-page-bg)]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ValueCards valueCards={valueCards} />
                <TrustSection trustMetrics={trustMetrics} />
              </>
            }
          />
          <Route path="/get-a-new-policy" element={<GetNewPolicyPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
