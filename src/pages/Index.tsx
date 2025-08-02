import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calculator, 
  Target, 
  Truck, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  TrendingUp,
  Shield,
  Award,
  Zap
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: "India Incorporation",
      description: "Complete legal entity setup with comprehensive support for all incorporation requirements.",
      features: ["Entity Setup", "Bank Account", "Compliance"]
    },
    {
      icon: Calculator,
      title: "Virtual CFO Services", 
      description: "Full-scale financial management and compliance support for your India operations.",
      features: ["Accounting", "GST Filing", "Tax Planning"]
    },
    {
      icon: Target,
      title: "Expansion Advisory",
      description: "Strategic guidance for successful market entry and business expansion in India.",
      features: ["Market Research", "Strategy", "Partnerships"]
    },
    {
      icon: Truck,
      title: "Imports & Logistics",
      description: "End-to-end import and logistics solutions for streamlined supply chain operations.",
      features: ["Customs", "Warehousing", "Distribution"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      country: "United States",
      text: "Synergy made our India expansion seamless. Their expertise saved us months of regulatory headaches and helped us scale to 25+ engineers quickly.",
      rating: 5
    },
    {
      name: "Klaus Weber",
      company: "IndustrieWerk GmbH", 
      country: "Germany",
      text: "Outstanding support for our manufacturing setup. Their logistics expertise and local connections were invaluable for securing major contracts.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "BritShop Ltd",
      country: "United Kingdom", 
      text: "Their e-commerce expertise helped us navigate complex regulations and achieve $3M+ in first-year sales in the Indian marketplace.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Award, number: "50+", label: "Companies Served" },
    { icon: Globe, number: "15+", label: "Countries" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" },
    { icon: Shield, number: "100%", label: "Compliance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Solutions for{" "}
              <span className="gradient-text">India Expansion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From incorporation to ongoing operations, we provide end-to-end support for your successful India journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary-green" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full group/btn"
                    >
                      <a href="/services">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Companies Worldwide
            </h2>
            <p className="text-xl text-white/90">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients{" "}
              <span className="gradient-text">Say About Us</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-subtle">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Expand into{" "}
              <span className="gradient-text">India?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the growing list of successful companies we've helped establish and scale their operations in India. Let's start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="btn-hero group"
              >
                <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
              >
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
