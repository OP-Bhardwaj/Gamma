import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import cashewImage from "@assets/generated_images/Raw_cashew_nuts_product_0d9595ff.png";
import coffeeImage from "@assets/generated_images/Tanzanian_coffee_beans_product_4f570ea5.png";
import portImage from "@assets/generated_images/International_shipping_port_operations_cd4fe4c1.png";

const imageMap: Record<string, string> = {
  cashew: cashewImage,
  coffee: coffeeImage,
  port: portImage,
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id || "tanzania-cashew-season-2025";
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="py-20">
        <div className="container px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = imageMap[post.image] || cashewImage;

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
          <Badge className="mb-4" data-testid="badge-category">{post.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-post-title">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <Button variant="outline" size="sm" onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.excerpt,
                  url: window.location.href,
                });
              }
            }} data-testid="button-share">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <img 
            src={heroImage} 
            alt={post.title}
            className="w-full rounded-md mb-8 shadow-lg"
            data-testid="img-post-hero"
          />

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {items.map((item, i) => {
                      const [bold, ...rest] = item.split(':** ');
                      if (rest.length > 0) {
                        return (
                          <li key={i}>
                            <strong>{bold.replace('**', '')}:</strong> {rest.join(':** ')}
                          </li>
                        );
                      }
                      return <li key={i}>{item}</li>;
                    })}
                  </ul>
                );
              }
              return (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="flex gap-4 mt-12 pt-8 border-t">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-us">Get in Touch</Button>
            </Link>
            <Link href="/products/cashew">
              <Button size="lg" variant="outline" data-testid="button-view-products">View Our Products</Button>
            </Link>
          </div>
        </article>

        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Related Articles</h3>
              <div className="space-y-2">
                {Object.values(blogPosts).filter(p => p.id !== postId).slice(0, 3).map(relatedPost => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <div className="hover-elevate p-3 rounded-md">
                      <div className="font-medium text-sm">{relatedPost.title}</div>
                      <div className="text-xs text-muted-foreground">{relatedPost.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
