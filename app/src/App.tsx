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
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import InstallPrompt from "./components/InstallPrompt";

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
        <Routes>
          <Route path="/" element={<Home />} />
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