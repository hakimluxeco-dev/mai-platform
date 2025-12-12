import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 pt-16"
    >
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        productName="MAI Business Solutions"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with Animation */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-float">
            <Logo className="scale-100" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">Smart Business Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Streamline Your Business
            </span>
            <br />
            <span className="text-white">with Smart Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Automate operations, boost productivity, and drive growth with our intelligent business solutions designed to solve real challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToProducts}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/50 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
            >
              Explore Products
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-500">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  );
}