import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-accent/20 rounded-full"></div>
      <div className="absolute top-60 right-32 w-16 h-16 bg-primary-light/30 rounded-full"></div>
      <div className="absolute bottom-40 right-80 w-32 h-32 bg-primary-light/20 rounded-full"></div>
      <div className="absolute bottom-32 right-20 w-20 h-20 bg-accent/30 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
              Corporate and advisory services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Our business is advancing{" "}
              <span className="text-primary">yours.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Synergy provides a comprehensive range of professional services and business advisory to help businesses navigate complex regulatory environments and achieve their goals at all stages of the business life‑cycle in India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 font-semibold"
              >
                <a href="/services">
                  View services
                </a>
              </Button>
              
              <Button 
                asChild
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-primary underline underline-offset-4 px-8 py-6 font-semibold"
              >
                <a href="/case-studies">
                  View case studies
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main circular image container */}
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&crop=center"
                  alt="Modern office building representing business growth"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative circles around the main image */}
              <div className="absolute -top-4 left-20 w-16 h-16 bg-accent rounded-full"></div>
              <div className="absolute top-20 -right-4 w-20 h-20 bg-primary-light/40 rounded-full"></div>
              <div className="absolute -bottom-6 left-12 w-12 h-12 bg-primary-light rounded-full"></div>
              <div className="absolute bottom-16 -left-6 w-24 h-24 bg-accent/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
