
import { useState } from "react";
import { Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-black/90">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue text-sm font-medium">Get In Touch</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
              Need Help With Your Car Decisions?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our team is ready to assist you with any questions about finding cars, parts, or repair estimates.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll animation="slide-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-automotive-blue/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-automotive-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">Email Us</h4>
                    <p className="text-muted-foreground mb-1">For general inquiries:</p>
                    <a href="mailto:Contact@ai-webtools.com" className="text-automotive-blue hover:underline">
                      Contact@ai-webtools.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-automotive-blue/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-automotive-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-foreground">Call Us</h4>
                    <p className="text-muted-foreground mb-1">Customer support:</p>
                    <a href="tel:(475)800-8096" className="text-automotive-blue hover:underline">
                      (475) 800-8096
                    </a>
                  </div>
                </div>
                
                <div className="glass-dark rounded-xl p-8 mt-8 text-center bg-gradient-to-br from-black/60 to-automotive-blue/20 border border-automotive-blue/20 shadow-[0_0_15px_rgba(10,132,255,0.3)]">
                  <div className="bg-automotive-blue/20 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-automotive-neon animate-pulse" style={{ animationDuration: '3s' }} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground text-glow">24/7 AI Assistance</h4>
                  <p className="text-xl text-automotive-neon font-medium neon-text">at your fingertips</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
