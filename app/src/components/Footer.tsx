import Logo from "./Logo";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Logo className="h-11 mb-3 sm:mb-4" />
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-3 sm:mb-4">
              Empowering businesses with cutting-edge AI solutions. Transform your operations and unlock unprecedented growth.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Products</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/whatsapp-assistant" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  WhatsApp Assistant
                </Link>
              </li>
              <li>
                <Link to="/invoice-manager" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Invoice Manager
                </Link>
              </li>
              <li>
                <Link to="/lead-machine" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Lead Machine
                </Link>
              </li>
              <li>
                <Link to="/stock-manager" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Stock Manager
                </Link>
              </li>
              <li>
                <Link to="/receptionist" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Virtual Receptionist
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} MAI Business Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
            <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-400 text-xs sm:text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}