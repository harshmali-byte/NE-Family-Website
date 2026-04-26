import { useCallback, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import CertificatePage from './components/CertificatePage'
import ContactSection from './components/ContactSection'
import FileAClaimPage from './components/FileAClaimPage'
import Footer from './components/Footer'
import GetNewPolicyPage from './components/GetNewPolicyPage'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PayMyBillPage from './components/PayMyBillPage'
import PolicyChangePage from './components/PolicyChangePage'
import PrivacyTermsPage from './components/PrivacyTermsPage'
import ReviewsPage from './components/ReviewsPage'
import TrustSection from './components/TrustSection'
import ValueCards from './components/ValueCards'
import { trustMetrics, valueCards } from './data'

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
    <div className="min-h-screen bg-[image:var(--color-page-bg)]">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMenu={handleCloseMenu}
        onToggleMenu={handleToggleMenu}
      />

      <main className="bg-[image:var(--color-page-bg)]">
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
          <Route path="/pay-my-bill" element={<PayMyBillPage />} />
          <Route path="/policy-change" element={<PolicyChangePage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/file-a-claim" element={<FileAClaimPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy-terms-of-use" element={<PrivacyTermsPage />} />
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
