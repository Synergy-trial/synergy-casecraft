import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OperationalExcellence = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Process Optimization",
      description: "Streamline operations through proven methodologies and best practices to maximize efficiency and reduce costs."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Implement data-driven approaches to monitor, measure, and continuously improve operational performance."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Excellence",
      description: "Develop high-performing teams through strategic training, leadership development, and cultural transformation."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Quality Management",
      description: "Establish robust quality systems and continuous improvement frameworks to ensure consistent excellence."
    }
  ];

  const benefits = [
    "Reduced operational costs by 25-40%",
    "Improved process efficiency and productivity",
    "Enhanced customer satisfaction and retention",
    "Strengthened competitive positioning",
    "Sustainable long-term growth",
    "Risk mitigation and compliance assurance"
  ];

  const approach = [
    {
      step: "1",
      title: "Assessment & Analysis",
      description: "Comprehensive evaluation of current operations, identifying inefficiencies and improvement opportunities."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Customized operational excellence roadmap aligned with your business objectives and market dynamics."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Systematic execution of improvement initiatives with proper change management and stakeholder engagement."
    },
    {
      step: "4",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring, measurement, and refinement to ensure sustained operational excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Operational Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your operations with data-driven strategies, process optimization, and continuous improvement methodologies that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 hover:bg-accent/10">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Operational Excellence Framework</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We implement comprehensive solutions that address every aspect of operational performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Business Impact</h2>
              <p className="text-lg text-muted-foreground">
                Our operational excellence initiatives deliver tangible results that directly impact your bottom line
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25-40%</div>
                  <div className="text-lg font-semibold mb-4">Cost Reduction</div>
                  <div className="text-muted-foreground">
                    Average operational cost savings achieved by our clients within the first year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic methodology that ensures successful transformation and sustainable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our operational excellence framework can drive measurable improvements in your business.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Schedule a Consultation
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

export default OperationalExcellence;