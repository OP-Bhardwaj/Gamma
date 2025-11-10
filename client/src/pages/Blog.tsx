import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import portImage from "@assets/generated_images/International_shipping_port_operations_cd4fe4c1.png";

const imageMap: Record<string, string> = {
  cashew: cashewImage,
  coffee: coffeeImage,
  port: portImage,
};

const blogPosts = [
  {
    id: "tanzania-cashew-season-2025",
    title: "Tanzania's Cashew Season 2025: What Global Buyers Should Know",
    excerpt: "Discover the latest insights on Tanzania's premier cashew harvest season, quality standards, and why Tanzanian cashews continue to dominate global markets for kernel recovery and superior taste.",
    image: "cashew",
    category: "Industry Insights",
    author: "Export Team",
    date: "November 8, 2025",
    readTime: "5 min read",
  },
  {
    id: "tanzanian-coffee-global-hearts",
    title: "Why Tanzanian Coffee is Winning Global Hearts",
    excerpt: "From the slopes of Kilimanjaro to the hills of Mbeya, explore the unique characteristics that make Tanzanian Arabica and Robusta coffee beans the choice of premium roasters worldwide.",
    image: "coffee",
    category: "Product Spotlight",
    author: "Coffee Specialists",
    date: "November 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "sourcing-africa-five-reasons",
    title: "5 Reasons to Source Agro-Commodities from Africa",
    excerpt: "Africa's agricultural sector is transforming global trade. Learn why smart buyers are turning to African suppliers for quality, sustainability, and competitive advantages in commodity sourcing.",
    image: "port",
    category: "Trade Insights",
    author: "Market Analysis",
    date: "November 1, 2025",
    readTime: "7 min read",
  },
  {
    id: "sustainable-trade-networks",
    title: "How Gamma International Builds Sustainable Trade Networks",
    excerpt: "Transparency, ethical practices, and farmer empowerment form the foundation of our 360° supply chain. Discover our approach to creating lasting partnerships that benefit all stakeholders.",
    image: "port",
    category: "Company News",
    author: "Gamma Team",
    date: "October 28, 2025",
    readTime: "4 min read",
  },
  {
    id: "pulses-sesame-export-guide",
    title: "The Complete Guide to Exporting Pulses and Sesame from Tanzania",
    excerpt: "Chickpeas, pigeon peas, mung beans, and sesame seeds from Tanzania meet the highest international standards. Learn about certifications, packaging, and quality specifications.",
    image: "cashew",
    category: "Export Guide",
    author: "Quality Control",
    date: "October 25, 2025",
    readTime: "8 min read",
  },
  {
    id: "coffee-grading-explained",
    title: "Understanding Coffee Grading: AAA, AA, and FAQ Standards",
    excerpt: "Demystifying the coffee grading system used for Tanzanian Arabica and Robusta beans. What do these grades mean for quality, pricing, and end-use applications?",
    image: "coffee",
    category: "Educational",
    author: "Coffee Experts",
    date: "October 20, 2025",
    readTime: "6 min read",
  },
];

const categories = ["All Posts", "Industry Insights", "Product Spotlight", "Trade Insights", "Company News", "Export Guide", "Educational"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-title">
              Industry Insights & Trade News
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-blog-subtitle">
              Stay informed about Tanzania's agro-commodity exports, market trends, and best practices in international trade
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover-elevate" 
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover-elevate group flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`card-blog-${post.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={imageMap[post.image]} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="flex-1">
                  <Badge className="w-fit mb-2" data-testid={`badge-category-${post.id}`}>{post.category}</Badge>
                  <h3 className="text-lg font-semibold leading-tight mb-2" data-testid={`text-blog-title-${post.id}`}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.id}`} className="w-full">
                    <Button variant="outline" className="w-full" data-testid={`button-read-more-${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Want to stay updated on the latest industry news?</p>
            <Link href="/contact">
              <Button data-testid="button-subscribe">Subscribe to Our Newsletter</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
