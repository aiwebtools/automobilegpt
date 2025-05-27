
import { CheckCircle, Users, Crown } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";

  return (
    <section id="pricing" className="section-padding bg-black/90">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-automotive-blue/20 px-3 py-1 rounded-full mb-3">
              <p className="text-automotive-blue font-medium">Simple Pricing</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-glow">
              100% Free with ChatGPT
            </h2>
            <p className="text-muted-foreground text-lg">
              Access all automotive AI features at no additional cost with your existing ChatGPT membership.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Users */}
          <AnimateOnScroll animation="fade-in" delay={100}>
            <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-automotive-blue/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-automotive-blue/20 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-automotive-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Free Users</h3>
                  <p className="text-muted-foreground">No ChatGPT membership required</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Basic car search & estimates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Limited daily queries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Standard response time</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Community support</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground mb-2">Free</p>
                <p className="text-muted-foreground mb-6">Always free to use</p>
                <Button 
                  className="w-full bg-automotive-blue/20 hover:bg-automotive-blue/30 text-automotive-blue border border-automotive-blue/30"
                  onClick={() => window.open(AUTO_GPT_URL, "_blank")}
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* ChatGPT Members */}
          <AnimateOnScroll animation="fade-in" delay={200}>
            <div className="glass-dark rounded-2xl p-8 border border-automotive-blue/50 hover:border-automotive-blue/70 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-automotive-blue px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">Recommended</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="bg-automotive-blue p-3 rounded-full mr-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">ChatGPT Members</h3>
                  <p className="text-muted-foreground">With existing ChatGPT subscription</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Unlimited automotive queries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Advanced car analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Priority response time</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Detailed repair reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-automotive-blue mr-3" />
                  <span className="text-foreground">Premium support</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground mb-2">Free</p>
                <p className="text-muted-foreground mb-6">Included with ChatGPT Plus/Pro</p>
                <Button 
                  className="w-full bg-automotive-blue hover:bg-automotive-blue/90 text-white"
                  onClick={() => window.open(AUTO_GPT_URL, "_blank")}
                >
                  Access Now
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={300}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              No hidden fees • No credit card required • Start using immediately
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PricingSection;
