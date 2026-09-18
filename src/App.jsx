import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './components/Chrome.jsx'
import ConciergeModal from './components/ConciergeModal.jsx'
import AnnotationTool from './components/AnnotationTool.jsx'
import { ConciergeProvider } from './components/ConciergeContext.jsx'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import Activity from './pages/Activity.jsx'
import Category from './pages/Category.jsx'
import Credits from './pages/Credits.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <ConciergeProvider>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/activity/:id" element={<Activity />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ConciergeModal />
      <AnnotationTool />
    </ConciergeProvider>
  )
}
