import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2, Wine } from "lucide-react";
import liquorImage from "@assets/generated_images/Premium_liquor_collection_display_d309c7f9.png";

export default function Liquor() {
  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Imports</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              Premium Liquor & Ethanol
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-grade liquor imports from India and Mauritius for East African markets
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={liquorImage} 
              alt="Premium Liquor Collection"
              className="w-full rounded-md shadow-lg"
              data-testid="img-product"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">
              Gamma International Tanzania Ltd specializes in importing high-grade and premium liquor from trusted 
              distilleries in India and Mauritius, catering to bulk, wholesale, and retail demands across East Africa. 
              Our portfolio includes premium whisky, rum, vodka, and gin in multiple bottle sizes to meet diverse market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-products">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Wine className="h-5 w-5 text-primary" />
                  Product Range
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Spirits Available</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Whisky</Badge>
                      <Badge variant="outline">Rum</Badge>
                      <Badge variant="outline">Vodka</Badge>
                      <Badge variant="outline">Gin</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bottle Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">200ml</Badge>
                      <Badge variant="outline">375ml</Badge>
                      <Badge variant="outline">750ml</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-specifications">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Packaging & Logistics
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Packaging", value: "Secure corrugated cartons, 12 bottles per carton" },
                    { label: "20ft Container", value: "~13,200 bottles (750ml) or mixed sizes" },
                    { label: "Origin", value: "India and Mauritius" },
                    { label: "Quality", value: "Premium grade from certified distilleries" },
                    { label: "Distribution", value: "Bulk, Wholesale & Retail" },
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

          <Card className="mb-12" data-testid="card-markets">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Market Coverage</h2>
              <p className="text-muted-foreground mb-4">
                We serve the East African market with reliable liquor imports, ensuring consistent supply for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Wholesale Distributors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Retail Chains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hospitality Sector</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Partner for Liquor Imports</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for bulk orders, competitive pricing, and reliable delivery across East Africa
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-request-quote">Request Quote</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
