import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ClarityCore from './pages/Product/ClarityCore';
import InsightHub from './pages/Product/InsightHub';
import ExplainTouch from './pages/Product/ExplainTouch';
import ProofChain from './pages/Product/ProofChain';
import DriftSense from './pages/Product/DriftSense';
import ScrollToTop from './components/ScrollToTop';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import CookiePolicy from './pages/Legal/CookiePolicy';
import FAQ from './pages/Support/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/clarity-core" element={<ClarityCore />} />
        <Route path="/products/insight-hub" element={<InsightHub />} />
        <Route path="/products/explain-touch" element={<ExplainTouch />} />
        <Route path="/products/proof-chain" element={<ProofChain />} />
        <Route path="/products/drift-sense" element={<DriftSense />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </div>
  )
}

export default App
