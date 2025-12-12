import { useState } from "react";
import { X, Calendar, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";
import { Label } from "./ui/label";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function DemoModal({ isOpen, onClose, productName }: DemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
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
          name,
          email,
          company,
          message,
          product: productName,
          type: "Demo Request",
          subject: `Demo Request - ${productName} from ${name}`,
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
          setName("");
          setEmail("");
          setCompany("");
          setMessage("");
        }, 2000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to submit",
        description: "Please try again or email us directly at info@maisolutions.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Schedule a Demo</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Fill out the form below and a link to the {productName} demo will be sent to your inbox.
          </p>

          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold mb-2">Request Submitted!</p>
              <p className="text-gray-400">A link to the {productName} demo will be sent to your inbox</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="your.name@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Tell us about your needs..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
              >
                {isSubmitting ? "Submitting..." : "Schedule Demo"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}