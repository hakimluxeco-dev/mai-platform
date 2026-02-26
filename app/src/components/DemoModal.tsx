import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5a02c114-65b3-41ad-b0de-a18048ad3dec",
          ...formData,
          subject: `Contact Request from ${formData.name}`,
          from_name: "MAI Business Solutions",
          to: "info@maisolutions.co.za",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setFormData({ name: "", email: "", company: "", service: "", message: "" });
        }, 3000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Please try again or email us directly at info@maisolutions.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-black border border-white/10 max-w-2xl w-full relative shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-[2px] bg-white"></div>
        <div className="p-8 sm:p-12">
          <div className="flex items-start justify-between mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 uppercase text-white">CONTACT US</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Transmit your requirements to our operations team. We will reply within 24 hours.
              </p>
            </div>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors mt-1 border border-white/10 p-2 hover:bg-white/[0.02]">
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center py-16 border border-white/10 bg-white/[0.02]">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-6 opacity-80" />
              <p className="text-white text-lg font-bold tracking-widest uppercase mb-2">Transmission Successful</p>
              <p className="text-white/50 text-sm">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">Name</label>
                  <Input id="modal-name" name="name" value={formData.name} onChange={handleChange} placeholder="ENTER NAME" className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase" required disabled={isSubmitting} />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">Email Address</label>
                  <Input id="modal-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ENTER EMAIL" className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase" required disabled={isSubmitting} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">Company</label>
                  <Input id="modal-company" name="company" value={formData.company} onChange={handleChange} placeholder="ENTER COMPANY" className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white text-sm rounded-none h-12 transition-colors uppercase" disabled={isSubmitting} />
                </div>
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">Service Required</label>
                  <select id="modal-service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-black border border-white/20 text-white focus:border-white text-sm rounded-none h-12 transition-colors uppercase outline-none px-3 appearance-none cursor-pointer" required disabled={isSubmitting}>
                    <option value="" disabled>SELECT SERVICE</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Video Commercials">Video Commercials</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI Systems">AI Systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-widest">Message</label>
                <Textarea id="modal-message" name="message" value={formData.message} onChange={handleChange} placeholder="OUTLINE YOUR OBJECTIVES..." rows={4} className="bg-transparent border border-white/20 text-white placeholder:text-white/30 focus:border-white resize-none text-sm rounded-none transition-colors uppercase p-4" required disabled={isSubmitting} />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full rounded-none h-16 bg-white text-black hover:bg-neutral-200 text-sm tracking-[0.15em] px-10 font-bold transition-all group border border-white mt-4">
                {isSubmitting ? "SENDING..." : "SEND EMAIL"}
                <Send className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}