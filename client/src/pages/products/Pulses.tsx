import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import sesameImage from "@assets/generated_images/Premium_sesame_seeds_product_f32cf303.png";

export default function Pulses() {
  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Agricultural Products</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              Pulses & Seeds
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium chickpeas, pigeon peas, green mung beans, and sesame seeds from Tanzania's fertile regions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card data-testid="card-pulses">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={pulsesImage} alt="Premium Pulses" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Premium Pulses</h2>
                <p className="text-muted-foreground mb-6">
                  Tanzania's fertile soil produces export-quality pulses rich in protein and taste. We supply cleaned 
                  and graded pulses ideal for food industries and bulk buyers globally.
                </p>
                
                <h3 className="font-semibold mb-3">Varieties Available</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Chickpeas</Badge>
                  <Badge variant="outline">Pigeon Peas</Badge>
                  <Badge variant="outline">Kidney Beans</Badge>
                  <Badge variant="outline">Green Mung Beans</Badge>
                </div>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Specifications
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Moisture", value: "10–14%" },
                    { label: "Purity", value: "98%+" },
                    { label: "Packaging", value: "50 kg PP Bags" },
                    { label: "Loading", value: "24 MT in 20ft Container" },
                    { label: "Crop Origin", value: "Arusha / Mtwara / Dodoma" },
                    { label: "Crop Season", value: "May – December" },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-sesame">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={sesameImage} alt="Premium Sesame Seeds" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Premium Sesame Seeds</h2>
                <p className="text-muted-foreground mb-6">
                  Premium white and brown sesame seeds, machine-cleaned and Sortex processed for exceptional 
                  purity and quality. Sourced from Southern Tanzania's best growing regions.
                </p>
                
                <h3 className="font-semibold mb-3">Varieties Available</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">White Sesame Seeds</Badge>
                  <Badge variant="outline">Brown Sesame Seeds</Badge>
                </div>

                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Specifications
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Purity", value: "98-99.95%" },
                    { label: "Moisture", value: "Below 8%" },
                    { label: "Processing", value: "Machine-cleaned and Sortex processed" },
                    { label: "Packaging", value: "50 kg and 25 kg PP bags" },
                    { label: "Season", value: "May to July" },
                    { label: "20ft Container", value: "16-17 MT (approx. 350 bags)" },
                    { label: "40ft Container", value: "25 MT (approx. 500 bags)" },
                  ].map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <div className="text-sm">
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Source Quality Pulses & Seeds</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for competitive pricing and bulk orders of premium pulses and sesame seeds from Tanzania
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">Request Quote</Button>
                </Link>
                <Link href="/blog/pulses-sesame-export-guide">
                  <Button size="lg" variant="outline" data-testid="button-learn-more">Export Guide</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
