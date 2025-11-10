import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoImage from "@assets/WhatsApp Image 2025-11-10 at 11.05.53_02785800_1762753322023.jpg";

const products = [
  { name: "Raw Cashew Nuts", href: "/products/raw-cashew-nuts" },
  { name: "Cashew Kernels", href: "/products/cashew-kernels" },
  { name: "Coffee", href: "/products/coffee" },
  { name: "Pulses", href: "/products/pulses" },
  { name: "Sesame Seeds", href: "/products/sesame-seeds" },
  { name: "Timber", href: "/products/timber" },
  { name: "Liquor", href: "/products/liquor" },
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

        <nav className="hidden md:flex items-center gap-8">
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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {products.map((product) => (
                      <li key={product.name}>
                        <NavigationMenuLink asChild>
                          <Link href={product.href}>
                            <span className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" data-testid={`link-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                              <div className="text-sm font-medium leading-none">{product.name}</div>
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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

        <div className="hidden md:block">
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
              <div className="text-sm font-medium mb-2">Products</div>
              <div className="pl-4 flex flex-col gap-2">
                {products.map((product) => (
                  <Link key={product.name} href={product.href} onClick={() => setMobileMenuOpen(false)} data-testid={`link-mobile-product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground">{product.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/partner" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-partner">
              <span className="text-sm font-medium">Partner With Us</span>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-contact">
              <span className="text-sm font-medium">Contact</span>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full" data-testid="button-mobile-request-quote">Request Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
