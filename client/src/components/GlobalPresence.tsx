import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Package, Ship } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "90+",
    label: "Years Combined Expertise",
    description: "Multinational team with deep industry knowledge",
  },
  {
    icon: MapPin,
    value: "15+",
    label: "Countries Served",
    description: "Export to Asia, Europe, Middle East, and beyond",
  },
  {
    icon: Package,
    value: "7",
    label: "Product Categories",
    description: "Diverse portfolio of premium commodities",
  },
  {
    icon: Ship,
    value: "360°",
    label: "Supply Chain",
    description: "Farm to port operations fully managed",
  },
];

const locations = [
  { name: "Dar es Salaam, Tanzania", role: "Registered Office & Operations" },
  { name: "Dubai, UAE", role: "Strategic Global Headquarters" },
  { name: "Ghana", role: "Regional Operations" },
  { name: "India", role: "Processing & Logistics Hub" },
  { name: "Germany", role: "European Operations" },
  { name: "USA", role: "North American Base" },
  { name: "Mauritius", role: "Liquor Production Facility" },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-global-title">
            Our Global Footprint
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-global-subtitle">
            Operating seamlessly across continents with strategic presence in key economic hubs worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <stat.icon className="h-10 w-10 text-primary" />
                  <div className="text-3xl font-bold" data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="text-locations-title">
            Our Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.name} className="flex items-start gap-3" data-testid={`location-${location.name.toLowerCase().replace(/[,\s]+/g, '-')}`}>
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium" data-testid={`text-location-name-${location.name.toLowerCase().replace(/[,\s]+/g, '-')}`}>
                    {location.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {location.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
