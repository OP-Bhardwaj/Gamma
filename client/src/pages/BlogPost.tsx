import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";

export default function BlogPost() {
  return (
    <div className="py-20">
      <div className="container px-6">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6" data-testid="button-back-to-blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <Badge className="mb-4" data-testid="badge-category">Industry Insights</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-post-title">
            Tanzania's Cashew Season 2025: What Global Buyers Should Know
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Export Team
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              November 8, 2025
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              5 min read
            </div>
            <Button variant="outline" size="sm" data-testid="button-share">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <img 
            src={cashewImage} 
            alt="Tanzania Cashew Season"
            className="w-full rounded-md mb-8 shadow-lg"
            data-testid="img-post-hero"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              As we enter the 2025 cashew season, Tanzania continues to solidify its position as one of Africa's premier 
              exporters of raw cashew nuts (RCN). With consistent quality, superior kernel recovery rates, and strategic 
              partnerships across key growing regions, Tanzanian cashews remain the preferred choice for processors worldwide.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What Makes Tanzania's 2025 Season Exceptional</h2>
            
            <p className="mb-4">
              This season brings several advantages for international buyers seeking premium raw cashew nuts:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Superior Outturn Rates:</strong> Tanzania consistently delivers 50-55 LBS+ outturn, ensuring maximum kernel recovery for processors</li>
              <li><strong>Optimal Nut Count:</strong> With counts ranging from 160-180 nuts per kilogram, our cashews meet international standards</li>
              <li><strong>Quality Moisture Levels:</strong> Maintained at approximately 10%, preventing spoilage and ensuring longer shelf life</li>
              <li><strong>Verified Sourcing:</strong> Direct partnerships with farmers in Masasi, Newala, Mtwara, and Tandahimba guarantee traceability</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Market Trends & Pricing</h2>
            
            <p className="mb-4">
              Global demand for Tanzanian RCN continues to grow, particularly from processing hubs in India and Vietnam. 
              The 2025 season shows stable pricing with opportunities for long-term contracts that benefit both buyers and producers.
            </p>

            <Card className="my-8" data-testid="card-key-stats">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Key Statistics for 2025 Season</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">27-28 MT</div>
                    <div className="text-sm text-muted-foreground">Per 40ft Container</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%+</div>
                    <div className="text-sm text-muted-foreground">Quality Grade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2x40ft</div>
                    <div className="text-sm text-muted-foreground">Minimum Order</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Partner with Gamma International</h2>
            
            <p className="mb-4">
              Our 90+ years of combined expertise in Tanzania's cashew industry means we understand every aspect of the 
              supply chain. From on-ground quality control to efficient logistics, we ensure your cashew imports arrive 
              on time and meet exact specifications.
            </p>

            <p className="mb-4">
              With dedicated export documentation support and transparent trade practices, Gamma International Tanzania Ltd 
              removes the complexity from international cashew sourcing.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ready to Secure Your Supply?</h2>
            
            <p className="mb-6">
              Contact our export team today to discuss pricing, availability, and long-term partnership opportunities 
              for the 2025 cashew season.
            </p>

            <div className="flex gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" data-testid="button-contact-us">Get in Touch</Button>
              </Link>
              <Link href="/products/cashew">
                <Button size="lg" variant="outline" data-testid="button-view-product">View Product Details</Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
