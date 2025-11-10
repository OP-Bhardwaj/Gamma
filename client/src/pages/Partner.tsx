import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "360° sourcing & logistics from Tanzania to Asia, Europe & Middle East",
  "On-ground quality control and inspection at every stage",
  "Verified supplier base with long-term farming contracts",
  "Dedicated export documentation and logistics team",
  "Ethical & transparent trade policies that benefit all parties",
  "Dedicated and highly experienced on-ground team from bushes to port operations",
];

const process = [
  {
    step: "1",
    title: "Sourcing",
    description: "Direct partnerships with verified farmers and producers across Tanzania",
  },
  {
    step: "2",
    title: "Quality Control",
    description: "Rigorous on-ground inspection and testing to ensure premium standards",
  },
  {
    step: "3",
    title: "Documentation",
    description: "Complete export documentation, certifications, and compliance support",
  },
  {
    step: "4",
    title: "Logistics",
    description: "Efficient container loading, shipping coordination, and timely delivery",
  },
  {
    step: "5",
    title: "Delivery",
    description: "Your products arrive on time, meeting all quality specifications",
  },
];

export default function Partner() {
  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-partner-title">
            Partner With Us
          </h1>
          
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-partner-subtitle">
            Gamma International Tanzania Ltd provides a seamless trade bridge between Africa's producers 
            and global buyers through our strong sourcing and export network.
          </p>

          <Card className="mb-12" data-testid="card-usps">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6" data-testid="text-usps-title">Why Partner With Gamma?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center" data-testid="text-process-title">Our Partnership Process</h2>
            <div className="space-y-6">
              {process.map((item) => (
                <Card key={item.step} className="hover-elevate" data-testid={`process-step-${item.step}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2" data-testid={`text-process-title-${item.step}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-muted/30" data-testid="card-cta">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can build a mutually beneficial long-term trade partnership
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-partner-contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
