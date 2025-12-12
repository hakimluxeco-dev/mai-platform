import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import SplashScreen from './components/SplashScreen';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Router basename="/marketing">
          <ScrollToTop />
          <div className="min-h-screen font-sans selection:bg-brand-blue/30 selection:text-white bg-brand-dark animate-fade-in">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
