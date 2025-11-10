import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiFacebook, SiInstagram, SiX } from "react-icons/si";
import logoImage from "@assets/WhatsApp Image 2025-11-10 at 11.05.53_02785800_1762753322023.jpg";

const productLinks = [
  { name: "Raw Cashew Nuts & Kernels", href: "/products/cashew" },
  { name: "Coffee", href: "/products/coffee" },
  { name: "Pulses & Seeds", href: "/products/pulses" },
  { name: "Premium Liquor", href: "/products/liquor" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Partner With Us", href: "/partner" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoImage} alt="Gamma International Tanzania" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-description">
              Connecting continents through trade. Premium agro-commodity exports from Tanzania to the world.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="link-social-linkedin">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="link-social-facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="link-social-instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate p-2 rounded-md" data-testid="link-social-twitter">
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-products-title">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-product-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground" data-testid="text-footer-address">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>24th Floor, Rita Towers, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+255668960061" className="hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  +255 668 960 061
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@gammaimternationaltz.com" className="hover:text-foreground transition-colors" data-testid="link-footer-email">
                  info@gammaimternationaltz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Gamma International Tanzania Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
