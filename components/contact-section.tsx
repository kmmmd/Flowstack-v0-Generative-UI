"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#a7c957] text-[#2d6a4f] text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b4332] mb-4 text-balance">
            We&apos;d love to hear from you
          </h2>
          <p className="text-[#2d6a4f] max-w-2xl mx-auto text-pretty">
            Have questions about FlowStack? Our team is here to help you scale your impact.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1b4332] mb-6">
                Contact Information
              </h3>
              <p className="text-[#2d6a4f] mb-8">
                Reach out to us directly or fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0e0] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <div>
                  <p className="font-medium text-[#1b4332]">Email</p>
                  <a
                    href="mailto:hello@flowstack.io"
                    className="text-[#2d6a4f] hover:text-[#1b4332] transition-colors"
                  >
                    hello@flowstack.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0e0] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <div>
                  <p className="font-medium text-[#1b4332]">Phone</p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-[#2d6a4f] hover:text-[#1b4332] transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0e0] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <div>
                  <p className="font-medium text-[#1b4332]">Location</p>
                  <p className="text-[#2d6a4f]">
                    123 Innovation Drive<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative mt-8">
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#a7c957]/20 rounded-full blur-2xl" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2d6a4f]/10 rounded-full blur-xl" />
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-[#1b4332]/5"
            >
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[#1b4332] font-medium"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#d4e5d0] bg-[#f9fafb] text-[#1b4332] placeholder:text-[#2d6a4f]/50 focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#1b4332] font-medium"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#d4e5d0] bg-[#f9fafb] text-[#1b4332] placeholder:text-[#2d6a4f]/50 focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#1b4332] font-medium"
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4e5d0] bg-[#f9fafb] text-[#1b4332] placeholder:text-[#2d6a4f]/50 focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#1b4332] hover:bg-[#143026] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1b4332]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-center text-sm text-[#2d6a4f]/70">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
