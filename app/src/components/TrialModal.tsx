import { useState } from "react";
import { X, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "./ui/use-toast";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function TrialModal({ isOpen, onClose, productName = "MAI Business Solutions" }: TrialModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5a02c114-65b3-41ad-b0de-a18048ad3dec',
          email: email,
          subject: `New Trial Request - ${productName}`,
          message: `New trial request from: ${email}\nProduct: ${productName}`,
          from_name: 'MAI Business Solutions',
          to: 'info@maisolutions.co.za',
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "A copy of the demo will be sent to your inbox.",
        });
        setEmail("");
        onClose();
      } else {
        throw new Error(data.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Failed to submit",
        description: "Please try again or contact us directly at info@maisolutions.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-4 mx-auto mb-4">
            <Mail className="w-full h-full text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Start Your Free Trial</CardTitle>
          <CardDescription className="text-gray-400">
            A copy of {productName} demo will be sent to your inbox
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Demo
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}