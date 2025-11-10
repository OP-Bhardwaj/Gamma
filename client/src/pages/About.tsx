import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Globe } from "lucide-react";
import officeImage from "@assets/generated_images/Modern_corporate_office_building_7d1e3954.png";

export default function About() {
  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-about-title">
            About Gamma International Tanzania Ltd
          </h1>
          
          <div className="prose prose-lg mx-auto mb-12" data-testid="text-about-intro">
            <p className="text-lg text-muted-foreground text-center mb-8">
              A dynamic export-import enterprise based in Dar es Salaam, Tanzania, engaged in sourcing, processing, 
              and trading of premium agro-commodities and industrial products across Africa, Asia, and Europe.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={officeImage} 
              alt="Gamma International Office"
              className="w-full rounded-md shadow-lg"
              data-testid="img-office"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-vision">
              <CardContent className="pt-6">
                <Eye className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3" data-testid="text-vision-title">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become Africa's most trusted sourcing and export partner for agro and natural products.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-mission">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3" data-testid="text-mission-title">Our Mission</h2>
                <p className="text-muted-foreground">
                  To connect Africa's agricultural strength to the world through integrity, innovation, and impactful partnerships.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12" data-testid="card-about-company">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4" data-testid="text-company-story-title">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With deep-rooted partnerships in Masasi, Mtwara, Newala, Dodoma, Iringa, and Arusha, we deliver 
                  consistent quality, transparent trade practices, and unmatched logistics efficiency. Our expertise 
                  bridges African producers with global buyers through strong sourcing networks, compliance-driven 
                  exports, and professional documentation support.
                </p>
                <p>
                  At Gamma, our goal is to empower Tanzanian farmers, enrich international buyers, and promote 
                  sustainable trade excellence under one trusted banner.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-testid="card-trusted-expertise">
              <CardContent className="pt-6 text-center">
                <Handshake className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Trusted Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Specializing in agri-exports, liquor, and chemicals with a holistic 360° supply chain
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-global-reach">
              <CardContent className="pt-6 text-center">
                <Globe className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  Export to over 15 countries using FOB and CNF shipping methods
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-our-promise">
              <CardContent className="pt-6 text-center">
                <Target className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Our Promise</h3>
                <p className="text-sm text-muted-foreground">
                  A legacy built on unwavering trust, delivering excellence through every shipment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
