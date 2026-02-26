import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/home";
import SplashScreen from "./components/SplashScreen";
import WhatsappAssistant from "./components/WhatsappAssistant";
import InvoiceManager from "./components/InvoiceManager";
import LeadMachine from "./components/LeadMachine";
import StockManager from "./components/StockManager";
import Receptionist from "./components/Receptionist";
import CustomSystems from "./components/CustomSystems";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import AISystems from "./components/AISystems";
import Marketing from "./components/Marketing";
import VideoCommercials from "./components/VideoCommercials";
import Animation3D from "./components/Animation3D";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import InstallPrompt from "./components/InstallPrompt";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InstallPrompt />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Main Pillars */}
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/video-commercials" element={<VideoCommercials />} />
          <Route path="/3d-animation" element={<Animation3D />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/ai-systems" element={<AISystems />} />

          {/* Sub AI Systems (kept for backwards compatibility/direct linking) */}
          <Route path="/whatsapp-assistant" element={<WhatsappAssistant />} />
          <Route path="/invoice-manager" element={<InvoiceManager />} />
          <Route path="/lead-machine" element={<LeadMachine />} />
          <Route path="/stock-manager" element={<StockManager />} />
          <Route path="/receptionist" element={<Receptionist />} />

          <Route path="/custom-systems" element={<CustomSystems />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </Suspense>
  );
}

export default App;