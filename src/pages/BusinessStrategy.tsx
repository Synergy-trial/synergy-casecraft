import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, BarChart3, Lightbulb, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BusinessStrategy = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Analysis",
      description: "Deep dive into market dynamics, competitive landscape, and growth opportunities to inform strategic decisions."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies aligned with your vision, goals, and market realities."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Expansion Strategy",
      description: "Navigate market entry, geographic expansion, and scaling challenges with proven methodologies."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Identify, assess, and mitigate strategic risks while maximizing opportunities for sustainable growth."
    }
  ];

  const benefits = [
    "Accelerated market entry and expansion",
    "Enhanced competitive positioning",
    "Improved ROI on strategic investments",
    "Reduced business risks and uncertainties",
    "Sustainable revenue growth",
    "Strengthened market presence"
  ];

  const services = [
    {
      title: "Market Entry Strategy",
      description: "Comprehensive analysis and planning for entering new markets, including regulatory compliance, local partnerships, and go-to-market strategies.",
      outcomes: ["Market penetration analysis", "Entry strategy roadmap", "Risk mitigation plan"]
    },
    {
      title: "Growth Strategy Development",
      description: "Strategic planning for sustainable business growth through market expansion, product development, and operational scaling.",
      outcomes: ["Growth opportunity assessment", "Strategic roadmap", "Implementation timeline"]
    },
    {
      title: "Digital Transformation Strategy",
      description: "Technology-driven business transformation strategies that enhance efficiency, customer experience, and competitive advantage.",
      outcomes: ["Digital readiness assessment", "Transformation roadmap", "Technology implementation plan"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Strategic Assessment",
      description: "Comprehensive analysis of current business position, market dynamics, and growth opportunities."
    },
    {
      step: "2",
      title: "Strategy Formulation",
      description: "Development of customized strategic plans aligned with your business objectives and market conditions."
    },
    {
      step: "3",
      title: "Implementation Planning",
      description: "Detailed roadmap creation with timelines, milestones, and resource allocation for successful execution."
    },
    {
      step: "4",
      title: "Execution & Monitoring",
      description: "Ongoing support, performance monitoring, and strategy optimization to ensure successful outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Business Strategy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Navigate complex business challenges with strategic insights, data-driven planning, and proven methodologies that accelerate growth and market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary-dark hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300">
                  Start Strategic Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 hover:bg-accent/10">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive strategic services that drive business transformation and sustainable growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/20">
                <CardContent className="p-6">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Services</h2>
            <p className="text-lg text-muted-foreground">
              Tailored strategic solutions for every stage of your business journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Advantages</h2>
              <p className="text-lg text-muted-foreground">
                Gain competitive edge with data-driven strategies that deliver measurable business outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">3.5x</div>
                  <div className="text-lg font-semibold mb-4">Faster Growth</div>
                  <div className="text-muted-foreground">
                    Average revenue growth acceleration achieved through strategic planning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to strategic planning that ensures comprehensive analysis and successful implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's develop a strategic roadmap that drives sustainable growth and competitive advantage.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90">
                Get Strategic Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessStrategy;