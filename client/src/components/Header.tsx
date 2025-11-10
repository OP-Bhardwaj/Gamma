import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoImage from "@assets/WhatsApp Image 2025-11-10 at 11.05.53_02785800_1762753322023.jpg";

const agriProducts = [
  { 
    name: "Raw Cashew Nuts & Cashew Kernels", 
    href: "/products/cashew",
    description: "Premium RCN and processed kernels"
  },
  { 
    name: "Coffee", 
    href: "/products/coffee",
    description: "Arabica & Robusta varieties"
  },
  { 
    name: "Pulses & Seeds", 
    href: "/products/pulses",
    description: "Chickpeas, Pigeon peas, Mung beans, Sesame"
  },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/" data-testid="link-home">
          <img src={logoImage} alt="Gamma International Tanzania" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" data-testid="link-nav-home">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground"}`}>
              Home
            </span>
          </Link>
          
          <Link href="/about" data-testid="link-nav-about">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-foreground"}`}>
              About Us
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium" data-testid="button-nav-products">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Agricultural Products</h3>
                      <ul className="space-y-2">
                        {agriProducts.map((product) => (
                          <li key={product.name}>
                            <NavigationMenuLink asChild>
                              <Link href={product.href}>
                                <span className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" data-testid={`link-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                  <div className="text-sm font-medium leading-none">{product.name}</div>
                                  <p className="text-xs text-muted-foreground">{product.description}</p>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <h3 className="font-semibold mb-2">Imports</h3>
                      <NavigationMenuLink asChild>
                        <Link href="/products/liquor">
                          <span className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground" data-testid="link-product-liquor">
                            <div className="text-sm font-medium leading-none">Premium Liquor</div>
                            <p className="text-xs text-muted-foreground">Whisky, Rum, Vodka, Gin</p>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/blog" data-testid="link-nav-blog">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/blog" ? "text-primary" : "text-foreground"}`}>
              Blog
            </span>
          </Link>

          <Link href="/partner" data-testid="link-nav-partner">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/partner" ? "text-primary" : "text-foreground"}`}>
              Partner With Us
            </span>
          </Link>

          <Link href="/contact" data-testid="link-nav-contact">
            <span className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-foreground"}`}>
              Contact
            </span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button data-testid="button-request-quote">Request Quote</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col gap-4 p-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-home">
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-about">
              <span className="text-sm font-medium">About Us</span>
            </Link>
            <div>
              <div className="text-sm font-medium mb-2">Agricultural Products</div>
              <div className="pl-4 flex flex-col gap-2">
                {agriProducts.map((product) => (
                  <Link key={product.name} href={product.href} onClick={() => setMobileMenuOpen(false)} data-testid={`link-mobile-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground">{product.name}</span>
                  </Link>
                ))}
              </div>
              <div className="text-sm font-medium mb-2 mt-3">Imports</div>
              <div className="pl-4">
                <Link href="/products/liquor" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-product-liquor">
                  <span className="text-sm text-muted-foreground">Premium Liquor</span>
                </Link>
              </div>
            </div>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-blog">
              <span className="text-sm font-medium">Blog</span>
            </Link>
            <Link href="/partner" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-partner">
              <span className="text-sm font-medium">Partner With Us</span>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-contact">
              <span className="text-sm font-medium">Contact</span>
            </Link>
            <LanguageSwitcher />
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full" data-testid="button-mobile-request-quote">Request Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
