import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import kernelsImage from "@assets/generated_images/Cashew_kernels_premium_product_1249111a.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import sesameImage from "@assets/generated_images/Premium_sesame_seeds_product_f32cf303.png";
import timberImage from "@assets/generated_images/Premium_timber_logs_export_54960df6.png";

const products = [
  {
    name: "Raw Cashew Nuts",
    description: "Superior nut count with high kernel recovery. Preferred by global processors.",
    image: cashewImage,
    highlight: "Outturn: 50-55 LBS+",
    href: "/products/raw-cashew-nuts",
  },
  {
    name: "Cashew Kernels",
    description: "Premium grades W180-W450, vacuum-sealed to retain natural flavor and crunch.",
    image: kernelsImage,
    highlight: "Grades: W180-W450",
    href: "/products/cashew-kernels",
  },
  {
    name: "Coffee",
    description: "Tanzanian Arabica and Robusta with rich aroma and uniform beans.",
    image: coffeeImage,
    highlight: "AAA, AA, A Grades",
    href: "/products/coffee",
  },
  {
    name: "Pulses",
    description: "Export-quality chickpeas, pigeon peas, kidney beans, and mung beans.",
    image: pulsesImage,
    highlight: "Purity: 98%+",
    href: "/products/pulses",
  },
  {
    name: "Sesame Seeds",
    description: "Machine-cleaned and Sortex processed white and brown seeds.",
    image: sesameImage,
    highlight: "Purity: 98-99.95%",
    href: "/products/sesame-seeds",
  },
  {
    name: "Timber",
    description: "Premium teak and pine wood, kiln-dried and export-ready.",
    image: timberImage,
    highlight: "Teak & Pine",
    href: "/products/timber",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-products-title">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Sourced from the finest regions of Tanzania, our products meet international standards and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden hover-elevate" data-testid={`card-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold" data-testid={`text-product-name-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name}</h3>
                <div className="text-sm text-primary font-medium" data-testid={`text-product-highlight-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {product.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground" data-testid={`text-product-description-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {product.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={product.href} className="w-full">
                  <Button variant="outline" className="w-full" data-testid={`button-learn-more-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
