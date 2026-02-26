import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black border-b border-white/10 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => handleNavigation("hero")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("solutions")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Solutions
            </button>
            <Link
              to="/marketing"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Marketing
            </Link>
            <Link
              to="/3d-animation"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              3D Animations
            </Link>
            <Link
              to="/video-commercials"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Video Production
            </Link>
            <Link
              to="/software-development"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Software
            </Link>
            <Link
              to="/ai-systems"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Systems
            </Link>
            <Link
              to="/about"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-white/70 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 m-0">
            <div className="flex flex-col px-6 py-8">
              <button
                onClick={() => handleNavigation("hero")}
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("solutions")}
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
              >
                Solutions
              </button>
              <Link
                to="/marketing"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketing
              </Link>
              <Link
                to="/3d-animation"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                3D Animations
              </Link>
              <Link
                to="/video-commercials"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Video Production
              </Link>
              <Link
                to="/software-development"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Software
              </Link>
              <Link
                to="/ai-systems"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Systems
              </Link>
              <Link
                to="/about"
                className="text-white/70 hover:text-white transition-colors duration-200 text-left py-4 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}