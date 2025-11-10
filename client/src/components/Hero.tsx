import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/Tanzanian_cashew_farm_landscape_27bd3843.png";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50" />
      </div>
      
      <div className="relative z-10 container px-6 py-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Connecting Continents through Trade
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200" data-testid="text-hero-subtitle">
            Premium agro-commodities from Tanzania to the world. Your trusted partner in sourcing excellence with 90+ years of combined expertise.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/products/cashew">
              <Button size="lg" className="bg-primary/90 backdrop-blur hover:bg-primary border border-primary-border" data-testid="button-hero-view-products">
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/partner">
              <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur text-white border-white/30 hover:bg-background/20" data-testid="button-hero-partner">
                Partner With Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex items-center gap-3 text-white" data-testid="stat-expertise">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">90+ Years</div>
                <div className="text-sm text-white/80">Combined Expertise</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white" data-testid="stat-countries">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">15+ Countries</div>
                <div className="text-sm text-white/80">Global Reach</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white" data-testid="stat-supply-chain">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">360° Supply</div>
                <div className="text-sm text-white/80">Chain Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
