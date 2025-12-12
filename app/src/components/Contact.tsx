import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useToast } from "./ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
          message: formData.message,
          subject: `New contact from ${formData.name} - MAI Business Solutions`,
          from_name: "MAI Business Solutions",
          to: "info@maisolutions.co.za",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Failed to send message",
        description:
          "Please try again or email us directly at info@maisolutions.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20 text-xs sm:text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Start Your AI Journey
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Ready to transform your business? Get in touch with our team for a
            personalized consultation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-white">
                Send us a message
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-400">
                Fill out the form below and we'll get back to you within 24
                hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.name@company.com"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 text-sm sm:text-base"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 group text-sm sm:text-base py-5 sm:py-6 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 text-white">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Why Choose MAI?
                </CardTitle>
                <CardDescription className="text-blue-100 text-sm sm:text-base">
                  We're committed to delivering exceptional AI solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-base sm:text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">
                      Expert Team
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100">
                      Industry-leading AI specialists with 10+ years experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-base sm:text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">
                      Proven Track Record
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100">
                      500+ successful implementations across industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-base sm:text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">
                      Ongoing Support
                    </h4>
                    <p className="text-xs sm:text-sm text-blue-100">
                      24/7 dedicated support and continuous optimization
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 sm:space-y-4">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">
                      Email us at
                    </p>
                    <p className="text-sm sm:text-base text-white font-medium truncate">
                      info@maisolutions.co.za
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      WhatsApp us
                    </p>
                    <p className="text-sm sm:text-base text-white font-medium">
                      +27 72 845 6172
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}