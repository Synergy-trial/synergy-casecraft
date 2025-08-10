import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  Users, 
  TrendingUp,
  Shield,
  Globe
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 1,
      icon: Building2,
      title: "Operational Excellence",
      description: "Complete legal entity setup with comprehensive support for all incorporation requirements in India.",
      features: [
        "Entity Structure Consultation",
        "Documentation & Filing", 
        "Regulatory Registrations",
        "Bank Account Setup",
        "Registered Office",
        "Compliance Calendar"
      ],
      entityTypes: [
        "Private Limited Company",
        "Limited Liability Partnership", 
        "Branch Office",
        "Representative Office"
      ],
      highlight: "Most Popular"
    },
    {
      id: 2,
      icon: Calculator,
      title: "Business Strategy",
      description: "Comprehensive financial management and compliance support for your India operations.",
      features: [
        "Monthly Accounting",
        "GST Compliance",
        "Tax Planning", 
        "Financial Reporting",
        "Statutory Audits",
        "Payroll Management"
      ],
      stats: [
        { label: "Accuracy Rate", value: "98%" },
        { label: "Support", value: "24/7" },
        { label: "Clients Served", value: "50+" }
      ]
    },
    {
      id: "advisory",
      icon: Target,
      title: "Expansion Advisory & Sourcing",
      description: "Strategic guidance and practical support for successful market entry and expansion in India.",
      features: [
        "Market Entry Strategy",
        "Regulatory Guidance",
        "Vendor Sourcing",
        "Partnership Development", 
        "Location Analysis",
        "Risk Assessment"
      ],
      specialties: [
        { icon: "💻", name: "Technology", desc: "Software, SaaS, and IT services" },
        { icon: "🏭", name: "Manufacturing", desc: "Industrial and consumer goods" },
        { icon: "🏥", name: "Healthcare", desc: "Medical devices and pharmaceuticals" },
        { icon: "🛒", name: "E-commerce", desc: "Online retail and marketplaces" }
      ]
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Imports & Logistics Partner",
      description: "End-to-end import and logistics solutions to streamline your India supply chain operations.",
      features: [
        "Import License Support",
        "Customs Clearance",
        "Warehousing Solutions",
        "Freight Forwarding",
        "Supply Chain Optimization", 
        "Compliance Management"
      ],
      network: [
        { label: "Major Ports", value: "15+" },
        { label: "Cities Covered", value: "25+" },
        { label: "Warehouse Partners", value: "50+" },
        { label: "Tracking Support", value: "24/7" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container-custom text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Comprehensive Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive India{" "}
            <span className="gradient-text">Expansion Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From entity setup to ongoing compliance, we provide end-to-end solutions for your successful India expansion journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                    index % 2 === 0 ? '' : 'lg:mt-12'
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary-green text-white">
                        {service.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary-green flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service-specific content */}
                    {service.entityTypes && (
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Entity Types We Support:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.entityTypes.map((type) => (
                            <Badge key={type} variant="outline" className="justify-center py-2">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.stats && (
                      <div className="grid grid-cols-3 gap-4">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.specialties && (
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Industry Specialties:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.specialties.map((specialty) => (
                            <div key={specialty.name} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                              <span className="text-lg">{specialty.icon}</span>
                              <div>
                                <div className="font-medium text-sm">{specialty.name}</div>
                                <div className="text-xs text-muted-foreground">{specialty.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.network && (
                      <div className="grid grid-cols-2 gap-4">
                        {service.network.map((item) => (
                          <div key={item.label} className="text-center p-3 rounded-lg bg-muted/30">
                            <div className="text-xl font-bold text-primary">{item.value}</div>
                            <div className="text-xs text-muted-foreground">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.id === 1 ? (
                      <Link to="/services/operational-excellence">
                        <Button className="w-full bg-gradient-primary hover:shadow-lg transition-all group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : service.id === 2 ? (
                      <Link to="/services/business-strategy">
                        <Button className="w-full bg-gradient-primary hover:shadow-lg transition-all group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        asChild 
                        className="w-full bg-gradient-primary hover:shadow-lg transition-all group"
                      >
                        <a href="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your India Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let our experts guide you through every step of your India expansion. Book a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="/contact">
                Get Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;