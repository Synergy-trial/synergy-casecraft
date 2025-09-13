import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "netherlands-it",
      title: "Incorporation & Virtual CFO Services for Netherlands-based IT Company",
      industry: "Technology",
      duration: "Ongoing Engagement",
      revenue: "USD 120,000 savings",
      employees: "25+ professionals hired",
      description: "A Netherlands-based IT company sought to establish an India Development Centre to support its global operations.",
      challenge: "A Netherlands-based IT company sought to establish an India Development Centre to support its global operations. The project involved navigating India's complex regulatory environment for incorporating a wholly-owned subsidiary, ensuring compliance with corporate, tax, and employment laws, and sourcing highly skilled technical talent in a competitive hiring landscape. The client also required a cost-effective solution for ongoing finance, HR, and compliance management without establishing an expensive in-house team.",
      solution: "We provided a turnkey incorporation and operational setup package, which included: Complete entity incorporation as a private limited company in compliance with Indian corporate regulations. Designing and implementing HR & payroll structures aligned with Indian labour laws and global policies. Developing a talent acquisition strategy to hire 25+ skilled technical professionals. End-to-end Virtual CFO services, covering GST registration & filing, accounting, statutory audits, and corporate compliance. Implementing an efficient compliance framework to reduce risks and administrative overhead.",
      results: [
        "Successfully incorporated the India subsidiary ahead of schedule and within budget",
        "Structured payroll, benefits, and HR policies to ensure smooth operations from Day 1",
        "Enabled cost savings of USD 120,000 through optimised compliance processes, tax refunds, and avoidance of regulatory penalties",
        "Provided ongoing strategic and operational support, freeing the client's leadership team to focus on core business growth"
      ],
      testimonial: "Synergy made our India expansion seamless. Their expertise saved us months of regulatory headaches.",
      client: "Netherlands-based IT Company"
    },
    {
      id: "us-computer-vision",
      title: "Export Compliance & Setup for US-based Computer Vision Startup",
      industry: "Technology",
      duration: "6 Months",
      revenue: "USD 20,000 savings",
      employees: "25+ specialists engaged",
      description: "A US-based computer vision startup wanted to launch an India-based hardware export business to serve global markets.",
      challenge: "A US-based computer vision startup wanted to launch an India-based hardware export business to serve global markets. The venture required navigating complex export laws, managing redundant paperwork, obtaining certifications, and meeting country-specific restrictions. Additionally, the client needed to design a manufacturing and logistics system capable of shipping to 20+ countries efficiently while benefiting from available government export incentives.",
      solution: "We acted as the client's single-point compliance and export setup partner, delivering: DGFT registration, Import-Export Code (IEC), and product certifications. Structuring the entire export logistics chain from manufacturing to last-mile delivery. Collaboration with expert freight and logistics consultants to ensure smooth international shipping to over 20 countries. Applying tax reduction strategies using Indian Government export schemes (zero GST on exports). Securing export-based incentives to improve profitability.",
      results: [
        "Successfully set up a compliant export business from scratch in under 6 months",
        "Enabled tax savings through zero-rated GST on exports and additional government benefits",
        "Provided end-to-end export compliance services, including documentation, registrations, and freight forwarding",
        "Established a scalable logistics framework supporting expansion into multiple international markets"
      ],
      testimonial: "Their export compliance expertise helped us navigate complex regulations and launch successfully.",
      client: "US-based Computer Vision Startup"
    },
    {
      id: "us-it-solutions",
      title: "Subsidiary Incorporation for US-based IT Solutions Company",
      industry: "Technology",
      duration: "Ongoing Engagement",
      revenue: "USD 35,000 savings",
      employees: "15+ professionals engaged",
      description: "A US-based IT solutions company needed to establish an India back-office subsidiary to support its software development and support operations.",
      challenge: "A US-based IT solutions company needed to establish an India back-office subsidiary to support its software development and support operations. The process required FEMA compliance, GST registration and filing, and setting up an operational structure aligned with Indian corporate and labour laws. The client needed an ongoing partner to ensure their India expansion strategy remained fully compliant while minimising operational costs.",
      solution: "Our team provided comprehensive incorporation and ongoing compliance management, including: Incorporating the India subsidiary and establishing statutory registrations. Advising on FEMA regulations for foreign ownership and cross-border transactions. Designing an operational framework for HR, payroll, and finance. Providing ongoing GST filing, statutory compliance, and financial oversight. Strategic advisory on scaling operations in India in line with global expansion plans.",
      results: [
        "Incorporated the India subsidiary quickly, ensuring full regulatory compliance",
        "Established ongoing compliance processes that reduced administrative burdens",
        "Enabled USD 35,000 in savings through optimised compliance workflows and avoidance of penalties",
        "Continuing to provide strategic and operational support to aid smooth scaling in the Indian market"
      ],
      testimonial: "Their ongoing compliance support has been crucial for our successful operations in India.",
      client: "US-based IT Solutions Company"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container-custom text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Proven Success in{" "}
            <span className="gradient-text">India Expansion</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped global companies successfully establish and scale their operations in India across diverse industries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline">{study.industry}</Badge>
                      <Badge variant="secondary">{study.duration}</Badge>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-primary">{study.revenue}</div>
                        <div className="text-xs text-muted-foreground">Revenue</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-primary">{study.employees}</div>
                        <div className="text-xs text-muted-foreground">Team</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-primary">{study.duration}</div>
                        <div className="text-xs text-muted-foreground">Timeline</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <Button 
                      asChild 
                      className="bg-gradient-primary hover:shadow-lg transition-all group"
                    >
                      <a href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>

                  {/* Results */}
                  <div className={`bg-gradient-subtle p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Key Results</h3>
                    <div className="space-y-4 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary-green flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                      <blockquote className="text-foreground italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-sm text-muted-foreground font-medium">
                        — {study.client}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-xl text-white/90">
              Trusted by companies worldwide for India expansion
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Companies Served", description: "From startups to Fortune 500" },
              { number: "15+", label: "Countries", description: "Global client base" },
              { number: "98%", label: "Success Rate", description: "In compliance and setup" },
              { number: "$100M+", label: "Revenue Enabled", description: "For our clients" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing list of successful companies we've helped expand into India. Let's discuss your expansion goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="btn-hero group"
            >
              <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
            >
              <a href="/contact">
                Get Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;