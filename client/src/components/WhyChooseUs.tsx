import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe2, Shield, FileCheck, Users2, TrendingUp } from "lucide-react";
import portImage from "@assets/generated_images/International_shipping_port_operations_cd4fe4c1.png";

const benefits = [
  {
    icon: Globe2,
    title: "360° Sourcing & Logistics",
    description: "Complete supply chain management from Tanzania to Asia, Europe & Middle East",
  },
  {
    icon: Shield,
    title: "On-Ground Quality Control",
    description: "Rigorous inspection and quality assurance at every stage of production",
  },
  {
    icon: Users2,
    title: "Verified Supplier Network",
    description: "Long-term farming contracts with trusted producers across Tanzania",
  },
  {
    icon: FileCheck,
    title: "Export Documentation Support",
    description: "Dedicated team handling all compliance and certification requirements",
  },
  {
    icon: CheckCircle2,
    title: "Ethical Trade Practices",
    description: "Transparent policies that empower farmers and enrich buyers",
  },
  {
    icon: TrendingUp,
    title: "Experienced Ground Team",
    description: "From bushes to port operations, our team ensures excellence",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
            Why Choose Gamma International
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-subtitle">
            A trusted bridge between African producers and global buyers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="hover-elevate" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="pt-6">
                    <benefit.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2" data-testid={`text-benefit-title-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={portImage} 
              alt="International shipping operations"
              className="rounded-md w-full shadow-lg"
              data-testid="img-port-operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
