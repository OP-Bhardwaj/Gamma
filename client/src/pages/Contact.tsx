import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" data-testid="text-contact-title">
            Contact Us
          </h1>
          
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-contact-subtitle">
            Let's collaborate to build a long-term trade partnership
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      data-testid="input-company"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" data-testid="button-submit">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card data-testid="card-office-info">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Head Office
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-office-address">
                    Gamma International Tanzania Ltd
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    24th Floor, Rita Towers
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Dar es Salaam, Tanzania
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PO Box 22469
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-contact-details">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone
                    </h3>
                    <a href="tel:+255668960061" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-phone">
                      +255 668 960 061
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </h3>
                    <a href="mailto:info@gammaimternationaltz.com" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-email">
                      info@gammaimternationaltz.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-map">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Rita Towers, Dar es Salaam</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
