import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "tech-startup",
      title: "US Tech Startup Expansion",
      industry: "Technology",
      duration: "3 months",
      revenue: "$2M ARR",
      employees: "25+ hired",
      description: "Helped a San Francisco-based SaaS company establish their India development center and scale their engineering team.",
      challenge: "Complex regulatory requirements for setting up a wholly-owned subsidiary and hiring technical talent in India.",
      solution: "Complete entity setup, regulatory compliance, talent acquisition strategy, and ongoing HR & payroll management.",
      results: [
        "Successfully incorporated private limited company",
        "Hired 25+ engineers within 6 months", 
        "Achieved $2M ARR from India operations",
        "100% compliance with local regulations"
      ],
      testimonial: "Synergy made our India expansion seamless. Their expertise saved us months of regulatory headaches.",
      client: "TechFlow Solutions"
    },
    {
      id: "manufacturing",
      title: "German Manufacturing Entry", 
      industry: "Manufacturing",
      duration: "6 months",
      revenue: "$5M+ contracts",
      employees: "50+ workforce",
      description: "Assisted a German industrial equipment manufacturer in establishing manufacturing operations and securing major contracts.",
      challenge: "Setting up manufacturing facility, import/export compliance, and building local supplier network.",
      solution: "End-to-end setup including land acquisition, facility setup, import licenses, and vendor sourcing.",
      results: [
        "Established 50,000 sq ft manufacturing facility",
        "Secured $5M+ in initial contracts",
        "Built network of 20+ local suppliers",
        "Created 50+ manufacturing jobs"
      ],
      testimonial: "Their logistics expertise and local connections were invaluable for our manufacturing setup.",
      client: "IndustrieWerk GmbH"
    },
    {
      id: "ecommerce",
      title: "UK E-commerce Marketplace",
      industry: "E-commerce", 
      duration: "4 months",
      revenue: "$3M+ sales",
      employees: "30+ team",
      description: "Supported a UK-based e-commerce platform in launching their India marketplace and building local operations.",
      challenge: "Complex e-commerce regulations, FDI compliance, payment gateway integration, and local team building.",
      solution: "Marketplace entity setup, regulatory compliance, payment solutions, warehousing, and team hiring.",
      results: [
        "Successfully launched India marketplace",
        "Achieved $3M+ in first-year sales",
        "Onboarded 500+ local sellers",
        "Built 30-person local team"
      ],
      testimonial: "Synergy's e-commerce expertise helped us navigate complex regulations and launch successfully.",
      client: "BritShop Ltd"
    },
    {
      id: "healthcare",
      title: "Swiss MedTech Innovation",
      industry: "Healthcare",
      duration: "8 months", 
      revenue: "$1.5M revenue",
      employees: "15+ specialists",
      description: "Enabled a Swiss medical device company to enter the Indian healthcare market with innovative diagnostic solutions.",
      challenge: "Medical device regulations, clinical trials, hospital partnerships, and specialized talent acquisition.",
      solution: "Regulatory pathway guidance, clinical trial setup, hospital network development, and expert hiring.",
      results: [
        "Obtained medical device approvals", 
        "Completed clinical trials successfully",
        "Partnered with 25+ hospitals",
        "Generated $1.5M in first-year revenue"
      ],
      testimonial: "Their healthcare regulatory expertise was crucial for our successful market entry.",
      client: "MedInnovate AG"
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