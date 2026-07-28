import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ClarityCore from './pages/Product/ClarityCore';
import InsightHub from './pages/Product/InsightHub';
import ExplainTouch from './pages/Product/ExplainTouch';
import ProofChain from './pages/Product/ProofChain';
import DriftSense from './pages/Product/DriftSense';

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/clarity-core" element={<ClarityCore />} />
        <Route path="/products/insight-hub" element={<InsightHub />} />
        <Route path="/products/explain-touch" element={<ExplainTouch />} />
        <Route path="/products/proof-chain" element={<ProofChain />} />
        <Route path="/products/drift-sense" element={<DriftSense />} />
      </Routes>
    </div>
  )
}

export default App
