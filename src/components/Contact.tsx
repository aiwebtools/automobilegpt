
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimateOnScroll } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Your message has been sent! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <a href="mailto:support@ai-webtools.com" className="text-automotive-blue hover:underline">
                      support@ai-webtools.com
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
                
                <div className="glass-dark rounded-xl p-6 mt-8">
                  <h4 className="font-semibold mb-3 text-foreground">Business Hours</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-left">
            <div className="glass-dark rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-black/50 border-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full bg-black/50 border-white/10"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full bg-black/50 border-white/10"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full bg-black/50 border-white/10"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-automotive-blue hover:bg-automotive-blue/90 text-white w-full"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;
