import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminPricing() {
  const [packages, setPackages] = useState([
    { id: 1, name: "Starter", tagline: "For small businesses", price: "₹9,999", duration: "One-time", features: "Landing Page, Responsive Design, Basic SEO", highlighted: false },
    { id: 2, name: "Growth", tagline: "Most Popular", price: "₹19,999", duration: "One-time", features: "Multi-page Website, Animations, SEO Optimization", highlighted: true },
    { id: 3, name: "Premium", tagline: "For scaling brands", price: "₹39,999", duration: "One-time", features: "Custom Design, Advanced Animations, Full Optimization", highlighted: false },
  ]);
  const { toast } = useToast();

  const handleAddSample = () => {
    const newPackage = {
      id: packages.length + 1,
      name: "New Package",
      tagline: "Perfect for growing businesses",
      price: "$5,000",
      duration: "4-6 weeks",
      features: "Custom Design, CMS Integration, SEO Setup",
      highlighted: false,
    };
    setPackages((current) => [...current, newPackage]);
    toast({ title: "Pricing package added successfully" });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pricing Management</h1>
          <p className="text-muted-foreground mt-2">Manage service tiers and packages.</p>
        </div>
        <Button onClick={handleAddSample} className="glass-button gap-2">
          <Plus size={16} /> Add Package
        </Button>
      </div>

      <div className="glass-panel border-white/10 rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-black/60">
            <TableRow className="border-white/10">
              <TableHead>Package</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Highlighted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id} className="border-white/5 hover:bg-white/5">
                <TableCell>
                  <div className="font-medium">{pkg.name}</div>
                  <div className="text-xs text-muted-foreground">{pkg.tagline}</div>
                </TableCell>
                <TableCell className="font-bold text-primary">{pkg.price}</TableCell>
                <TableCell className="text-sm">{pkg.duration}</TableCell>
                <TableCell>
                  {pkg.highlighted ? (
                    <span className="text-xs text-primary font-bold">Yes</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">No</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {packages.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                  No pricing packages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
