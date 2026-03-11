import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5a02c114-65b3-41ad-b0de-a18048ad3dec",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          subject: `New Contact from ${formData.name} - MAI Business Solutions`,
          from_name: "MAI Business Solutions",
          to: "info@maisolutions.co.za",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Transmission Successful",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Transmission Failed",
        description:
          "Please try again or email us directly at info@maisolutions.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/10 text-white"
    >
      {/* Structural Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
          <div className="max-w-3xl">
            <div className="text-white/50 text-xs tracking-[0.3em] uppercase font-bold border-l-2 border-blue-500 pl-4 py-1 mb-6">
              Contact Us
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
              START YOUR<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400">PROJECT</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed">
            Ready to transform your enterprise? Initiate contact with our team for a strategic consultation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 border border-white/10">
          {/* Contact Form */}
          <div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative group bg-black hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600/0 via-blue-500 to-blue-600/0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

            <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase text-white">CONTACT US</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              Transmit your requirements to our operations team. We will reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER NAME"
                    className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ENTER@EMAIL.COM"
                    className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ENTER COMPANY"
                    className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 text-white focus:border-white text-sm rounded-none h-12 transition-colors uppercase outline-none px-3 appearance-none cursor-pointer"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>SELECT SERVICE</option>
                    <option value="Marketing">Marketing</option>
                    <option value="3D Animations">3D Animations</option>
                    <option value="Video Commercials">Video Commercials</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI Systems">AI Systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="OUTLINE YOUR OBJECTIVES..."
                  rows={4}
                  className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white resize-none text-sm rounded-none transition-colors uppercase p-4"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-none h-16 bg-white text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-transparent text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white mt-4"
              >
                {isSubmitting ? "SENDING..." : "SEND EMAIL"}
                <Send className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information & Value Prop */}
          <div className="flex flex-col relative group bg-black hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20"></div>

            <div className="p-8 sm:p-12 border-b border-white/10 flex-grow">

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cyan-500/40 group-hover:border-cyan-400 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-cyan-400 text-sm font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-2">Elite Infrastructure</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-mono uppercase">
                      Specialists designing high-end digital solutions tailored for scale.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cyan-500/40 group-hover:border-cyan-400 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-cyan-400 text-sm font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-2">Verified Yields</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-mono uppercase">
                      Hundreds of operational deployments delivering quantifiable ROI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cyan-500/40 group-hover:border-cyan-400 flex items-center justify-center flex-shrink-0 transition-colors">
                    <span className="text-cyan-400 text-sm font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-2">Continuous Operations</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-mono uppercase">
                      24/7 dedicated system monitoring and evolutionary support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-0">
              <div className="p-6 lg:p-4 xl:p-8 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col items-start gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer group/link">
                <Mail className="w-6 h-6 sm:w-5 sm:h-5 text-white/40 group-hover/link:text-white transition-colors shrink-0" />
                <div className="min-w-0 w-full">
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1 line-clamp-1">
                    Secure Comm
                  </p>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs text-white font-mono uppercase">
                    INFO@MAISOLUTIONS.CO.ZA
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-4 xl:p-8 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col items-start gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer group/link">
                <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5 text-white/40 group-hover/link:text-white transition-colors shrink-0" />
                <div className="min-w-0 w-full">
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1 line-clamp-1">
                    Direct Wire
                  </p>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs text-white font-mono whitespace-nowrap uppercase">
                    +27 82 293 9948
                  </p>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs text-white font-mono whitespace-nowrap uppercase">
                    +27 72 845 6172
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-4 xl:p-8 flex flex-col items-start gap-4 hover:bg-white/[0.04] transition-colors group/link">
                <svg className="w-6 h-6 sm:w-5 sm:h-5 text-white/40 group-hover/link:text-white transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                <div className="min-w-0 w-full">
                  <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1 line-clamp-1">
                    Location
                  </p>
                  <p className="text-[10px] sm:text-[11px] xl:text-xs text-white font-mono uppercase leading-relaxed">
                    215 Beauval Ave,<br/>Mondeor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}