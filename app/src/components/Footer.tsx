import Logo from "./Logo";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Logo className="h-11 mb-3 sm:mb-4" />
            <p className="text-white/60 text-xs sm:text-sm max-w-md mb-3 sm:mb-4 leading-relaxed">
              Architecting elite digital infrastructure and comprehensive business solutions. Engineering growth through precision and design.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-white/10 hover:border-white/40 hover:bg-white/[0.02] flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 hover:border-white/40 hover:bg-white/[0.02] flex items-center justify-center transition-all group"
              >
                <Twitter className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 hover:border-white/40 hover:bg-white/[0.02] flex items-center justify-center transition-all group"
              >
                <Github className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">Solutions</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/marketing" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Precision Marketing
                </Link>
              </li>
              <li>
                <Link to="/3d-animation" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  3D Animation
                </Link>
              </li>
              <li>
                <Link to="/video-commercials" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Cinematic Production
                </Link>
              </li>
              <li>
                <Link to="/software-development" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Software Architecture
                </Link>
              </li>
              <li>
                <Link to="/ai-systems" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Autonomous Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link to="/about" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/50 hover:text-white text-xs sm:text-sm transition-colors uppercase tracking-wider block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col items-center gap-3 sm:gap-4 mt-8">
          <p className="text-white/40 text-xs sm:text-sm text-center uppercase tracking-widest">
            © {currentYear} <Link to="/" className="hover:text-white transition-colors">Mai Business Solutions</Link>. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 mt-2">
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors uppercase tracking-widest">
              Terms of Service
            </a>
            <Link to="/privacy-policy" className="text-white/30 hover:text-white text-xs transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}