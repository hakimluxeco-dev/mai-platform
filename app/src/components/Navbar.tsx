import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("hero")}
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              Home
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold outline-none group">
                Services
                <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border border-white/10 rounded-none min-w-[200px] p-2">
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/marketing" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">Marketing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/3d-animation" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">3D Animations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/video-commercials" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">Video Production</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/software-development" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">Software</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/ai-systems" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">Systems</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white focus:text-black rounded-none transition-colors cursor-pointer">
                  <Link to="/business-consulting" className="w-full text-[10px] tracking-[0.2em] uppercase font-bold py-2">Consulting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className="text-white/70 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase font-semibold"
            >
              About Us
            </Link>
            <a
              href="https://clientzone.maisolutions.co.za"
              className="bg-white text-black px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-neutral-200 transition-all whitespace-nowrap ml-4 border border-white"
            >
              Login
            </a>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 m-0 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8 bg-black/95 backdrop-blur-xl">
                <button
                  onClick={() => handleNavigation("hero")}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-left py-5 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold active:bg-white/5"
                >
                  Home
                </button>

                {[
                  { name: "Marketing", path: "/marketing" },
                  { name: "3D Animations", path: "/3d-animation" },
                  { name: "Video Production", path: "/video-commercials" },
                  { name: "Software", path: "/software-development" },
                  { name: "Systems", path: "/ai-systems" },
                  { name: "Consulting", path: "/business-consulting" },
                  { name: "About Us", path: "/about" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-left py-5 text-xs tracking-[0.2em] uppercase border-b border-white/5 font-semibold active:bg-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <a
                  href="https://clientzone.maisolutions.co.za"
                  className="text-white py-6 text-xs tracking-[0.2em] uppercase font-bold text-center bg-white/10 mt-6 border border-white/20 active:bg-white/20 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}