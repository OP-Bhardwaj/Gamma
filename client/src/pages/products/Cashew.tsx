import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2 } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import kernelsImage from "@assets/generated_images/Cashew_kernels_premium_product_1249111a.png";

export default function Cashew() {
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
              Raw Cashew Nuts & Cashew Kernels
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From farm to processing - Tanzania's finest cashews for global markets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card data-testid="card-raw-cashew">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={cashewImage} alt="Raw Cashew Nuts" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Raw Cashew Nuts (RCN)</h2>
                <p className="text-muted-foreground mb-6">
                  We source the finest Tanzanian Raw Cashew Nuts (RCN) known for their superior nut count, 
                  high kernel recovery, and consistent moisture levels — preferred by global processors in India and Vietnam.
                </p>
                
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Specifications
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Outturn", value: "50–55 LBS+" },
                    { label: "Nut Count", value: "160–180 (+/-10)" },
                    { label: "Moisture", value: "Approx. 10%" },
                    { label: "Packaging", value: "80 kg Jute Bags" },
                    { label: "Origin", value: "Masasi / Newala / Mtwara / Tandahimba" },
                    { label: "40ft HC Container", value: "27–28 MT" },
                    { label: "MOQ", value: "2x40ft FCL" },
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

            <Card data-testid="card-cashew-kernels">
              <div className="aspect-video overflow-hidden rounded-t-md">
                <img src={kernelsImage} alt="Cashew Kernels" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Cashew Nut Kernels</h2>
                <p className="text-muted-foreground mb-6">
                  Our kernels are carefully processed and vacuum-packed to retain natural flavor, color, and crunch 
                  — ready for retail or industrial use worldwide.
                </p>
                
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Specifications
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Grades", value: "W180, W240, W320, W450, SW, LWP" },
                    { label: "Moisture", value: "Max 7%" },
                    { label: "Season", value: "Oct – April" },
                    { label: "Packaging", value: "22.68 kg (50 lbs) vacuum-sealed cartons" },
                    { label: "Alternative Pack", value: "2 × 10 kg vacuum packs per carton" },
                    { label: "20ft Container", value: "~660 boxes (~15 MT)" },
                    { label: "40ft Container", value: "~1100 boxes (~25 MT)" },
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
              <h2 className="text-2xl font-bold mb-4">Ready to Place Your Order?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for pricing, availability, and custom packaging options for both raw cashew nuts and processed kernels
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">Request Quote</Button>
                </Link>
                <Link href="/blog/tanzania-cashew-season-2025">
                  <Button size="lg" variant="outline" data-testid="button-learn-more">Learn More About Our Cashews</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
