import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-green/10 to-primary-light/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Simplifying India for{" "}
              <span className="gradient-text bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                Global Businesses
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Comprehensive corporate, tax, HR & compliance solutions tailored for international companies entering or expanding in India. Navigate complex regulations with confidence.
            </p>
            
            <div className=" flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="btn-hero group"
              >
                <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                asChild
                className="btn-ghost-light"
              >
                <a href="/services">
                  Explore Services
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <Globe className="h-8 w-8 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-white/70 text-sm">Supporting businesses from 15+ countries</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group mt-8">
                  <Shield className="h-8 w-8 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2">Compliance</h3>
                  <p className="text-white/70 text-sm">100% regulatory compliance guarantee</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <TrendingUp className="h-8 w-8 text-primary-light mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2">Growth Focus</h3>
                  <p className="text-white/70 text-sm">Strategic expansion planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
