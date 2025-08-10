import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send,
  MessageSquare,
  Calendar,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@synergyindia.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Monday to Friday, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Mumbai, Delhi, Bangalore",
      description: "Multiple office locations across India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "9:00 AM - 6:00 PM IST",
      description: "Monday through Friday"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to incorporate a company in India?",
      answer: "The incorporation process typically takes 15-30 days, depending on the type of entity and completeness of documentation. We handle all the paperwork and regulatory requirements to ensure a smooth process."
    },
    {
      question: "What are the minimum requirements for foreign investment in India?",
      answer: "Foreign investment requirements vary by sector. For most sectors, 100% FDI is allowed under the automatic route. We help determine the best structure based on your business needs and ensure compliance with FDI regulations."
    },
    {
      question: "Do I need a local director for my Indian company?",
      answer: "Yes, for a private limited company, at least one director must be a resident of India. We can help you find qualified local directors or provide nominee director services as per regulations."
    },
    {
      question: "What ongoing compliance requirements should I expect?",
      answer: "Indian companies have various compliance requirements including monthly GST filing, annual income tax returns, ROC filings, and board meetings. Our Virtual CFO services handle all ongoing compliance requirements."
    },
    {
      question: "Can you help with hiring local talent?",
      answer: "Absolutely! We provide comprehensive HR services including recruitment, payroll management, statutory compliance, and employee benefit administration. Our network helps you find the right talent quickly."
    },
    {
      question: "What support do you provide for import/export operations?",
      answer: "We offer end-to-end logistics support including import/export licenses, customs clearance, freight forwarding, warehousing, and supply chain optimization. Our network covers major ports and cities across India."
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer: "We have a dedicated compliance team that stays updated with the latest regulations. We provide real-time compliance monitoring, regular updates, and proactive guidance to ensure 100% regulatory adherence."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across multiple industries including technology, manufacturing, healthcare, e-commerce, financial services, and more. Our team has sector-specific knowledge to address unique industry requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              India Experts
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to expand into India? Let's discuss your goals and create a customized strategy for your success.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <div className="text-primary font-medium mb-1">{info.value}</div>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-subtle">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Company" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select id="service" className="mt-2 w-full p-3 border border-input rounded-md bg-background">
                      <option value="">Select a service</option>
                      <option value="incorporation">India Incorporation</option>
                      <option value="virtual-cfo">Virtual CFO Services</option>
                      <option value="advisory">Expansion Advisory</option>
                      <option value="logistics">Imports & Logistics</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your India expansion plans..." 
                      className="mt-2 min-h-32"
                    />
                  </div>
                  
                  <Button className="w-full btn-hero group" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-8">
              <Card className="bg-gradient-primary text-white overflow-hidden">
                <CardContent className="p-8">
                  <Calendar className="h-12 w-12 mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold mb-4">Schedule a Consultation</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Book a free 30-minute consultation with our India expansion experts to discuss your specific needs.
                  </p>
                   <Button 
                    asChild 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300"
                  >
                    <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Country-Specific Resources</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Access tailored guides and resources for businesses from different countries expanding into India.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Questions About{" "}
              <span className="gradient-text">India Expansion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to the most common questions about expanding your business into India.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button 
              asChild 
              className="btn-hero group"
            >
              <a href="https://calendly.com/ambarmehta13" target="_blank" rel="noopener noreferrer">
                Schedule Expert Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;