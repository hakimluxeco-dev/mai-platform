import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Logo className="mb-8 mx-auto" />
        
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Search className="w-4 h-4 mr-2" />
              Explore Products
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/invoice-manager" className="text-blue-400 hover:text-blue-300 transition-colors">
              Invoice Manager
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/lead-machine" className="text-blue-400 hover:text-blue-300 transition-colors">
              Lead Machine
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/stock-manager" className="text-blue-400 hover:text-blue-300 transition-colors">
              Stock Manager
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/receptionist" className="text-blue-400 hover:text-blue-300 transition-colors">
              Virtual Receptionist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
