import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, CheckCircle2, Award } from "lucide-react";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";

export default function Coffee() {
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
            <Badge className="mb-4">Agricultural Products</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-product-title">
              Tanzanian Coffee
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Premium Arabica & Robusta beans from the slopes of Kilimanjaro and hills of Mbeya
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={coffeeImage} 
              alt="Tanzanian Coffee"
              className="w-full rounded-md shadow-lg"
              data-testid="img-product"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground">
              We export Tanzanian Arabica and Robusta coffee with rich aroma, uniform beans, and international certifications. 
              Ideal for roasters and distributors looking for consistent flavor profiles that showcase the unique terroir of 
              Tanzania's premier coffee-growing regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-testid="card-specifications">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Product Specifications
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "Crop Season", value: "May – October" },
                    { label: "Packaging", value: "60 kg Jute Bags with PE liner" },
                    { label: "20ft Container", value: "9.8 MT (164 Bags)" },
                    { label: "40ft Container", value: "19.2 MT (320 Bags)" },
                    { label: "Origin", value: "Kilimanjaro, Mbeya, and Bukoba Regions" },
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

            <Card data-testid="card-grades">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Coffee Grades Available
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Arabica Coffee</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AAA Grade</Badge>
                      <Badge variant="outline">AA Grade</Badge>
                      <Badge variant="outline">A Grade</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Robusta Coffee</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">FAQ 12</Badge>
                      <Badge variant="outline">FAQ 14</Badge>
                      <Badge variant="outline">FAQ 16</Badge>
                      <Badge variant="outline">FAQ 18</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12" data-testid="card-certifications">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Certifications & Quality Assurance</h2>
              <div className="flex flex-wrap gap-3">
                <Badge>Fair Trade</Badge>
                <Badge>EU Certification</Badge>
                <Badge>EcoCert</Badge>
                <Badge>Organic</Badge>
                <Badge>ISO Certified</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Source Premium Tanzanian Coffee</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us for consistent quality, competitive pricing, and reliable delivery of Tanzania's finest coffee beans
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-request-quote">Request Quote</Button>
                </Link>
                <Link href="/blog/tanzanian-coffee-global-hearts">
                  <Button size="lg" variant="outline" data-testid="button-learn-more">Why Tanzanian Coffee?</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
