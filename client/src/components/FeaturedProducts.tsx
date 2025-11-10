import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import pulsesImage from "@assets/generated_images/Assorted_pulses_product_display_49ce81f5.png";
import liquorImage from "@assets/generated_images/Premium_liquor_collection_display_d309c7f9.png";

const products = [
  {
    name: "Raw Cashew Nuts & Kernels",
    category: "Agricultural Products",
    description: "Superior nut count with high kernel recovery. From raw nuts to premium processed kernels.",
    image: cashewImage,
    highlight: "Grades: W180-W450 | Outturn: 50-55 LBS+",
    href: "/products/cashew",
  },
  {
    name: "Coffee",
    category: "Agricultural Products",
    description: "Tanzanian Arabica and Robusta with rich aroma and uniform beans.",
    image: coffeeImage,
    highlight: "AAA, AA, A Grades | FAQ 12-18",
    href: "/products/coffee",
  },
  {
    name: "Pulses & Seeds",
    category: "Agricultural Products",
    description: "Chickpeas, pigeon peas, green mung beans, and premium sesame seeds.",
    image: pulsesImage,
    highlight: "Purity: 98%+ | Multiple Varieties",
    href: "/products/pulses",
  },
  {
    name: "Premium Liquor",
    category: "Imports",
    description: "High-grade whisky, rum, vodka, and gin from India and Mauritius.",
    image: liquorImage,
    highlight: "Bulk, Wholesale & Retail",
    href: "/products/liquor",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="overflow-hidden hover-elevate group"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="text-xs text-primary font-medium mb-1">{product.category}</div>
                <h3 className="text-xl font-semibold" data-testid={`text-product-name-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name}</h3>
                <div className="text-sm text-muted-foreground" data-testid={`text-product-highlight-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
