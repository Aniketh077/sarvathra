import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PressShop from './pages/facilities/PressShop';
import WeldShop from './pages/facilities/WeldShop';
import ToolRoom from './pages/facilities/ToolRoom';
import Inspection from './pages/facilities/Inspection';
import FabricationServices from './pages/products/FabricationServices';
import SheetMetalComponents from './pages/products/SheetMetalComponents';
import ToolsAndFixtures from './pages/products/ToolsAndFixtures';
import GasCooktopParts from './pages/products/GasCooktopParts';
import Machineries from './pages/Machineries';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/facilities/press-shop" element={<PressShop />} />
              <Route path="/facilities/weld-shop" element={<WeldShop />} />
              <Route path="/facilities/tool-room" element={<ToolRoom />} />
              <Route path="/facilities/inspection" element={<Inspection />} />
              <Route path="/products/fabrication-services" element={<FabricationServices />} />
              <Route path="/products/sheet-metal" element={<SheetMetalComponents />} />
              <Route path="/products/tools-and-fixtures" element={<ToolsAndFixtures />} />
              <Route path="/products/gas-and-cooktop-parts" element={<GasCooktopParts />} />
              <Route path="/machineries" element={<Machineries />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;