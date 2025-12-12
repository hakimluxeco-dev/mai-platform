import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

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
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("hero")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("products")}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              Products
            </button>
            <Link
              to="/custom-systems"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              Custom Systems
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              About Us
            </Link>
            <div className="h-6 w-px bg-gray-800 mx-2"></div>
            <a
              href="/marketing"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium flex items-center gap-1 group"
            >
              Marketing Agency
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <Button
              onClick={() => handleNavigation("contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("hero")}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("products")}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Products
              </button>
              <Link
                to="/custom-systems"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Custom Systems
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <a
                href="/marketing"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-left py-2 font-medium flex items-center gap-2"
              >
                Visit Marketing Agency →
              </a>
              <Button
                onClick={() => handleNavigation("contact")}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}