import { useState } from "react";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AdminLeads() {
  const [leads, setLeads] = useState([
    { id: 1, name: "Taylor Harper", email: "taylor@example.com", phone: "(555) 123-4567", budget: "$12k", status: "new", createdAt: new Date().toISOString() },
    { id: 2, name: "Jordan Kim", email: "jordan@example.com", phone: "(555) 987-6543", budget: "$22k", status: "contacted", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  ]);
  const { toast } = useToast();

  const handleStatusChange = (id: number, newStatus: string) => {
    setLeads((current) => current.map((lead) => lead.id === id ? { ...lead, status: newStatus } : lead));
    toast({ title: "Status updated" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
        <p className="text-muted-foreground mt-2">Manage inquiries and prospective clients.</p>
      </div>

      <div className="glass-panel border-white/10 rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-black/60">
            <TableRow className="border-white/10">
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id} className="border-white/5 hover:bg-white/5">
                <TableCell className="text-sm text-muted-foreground">
                  {format(new Date(lead.createdAt), 'MMM d, yyyy')}
                </TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <div className="text-sm">{lead.email}</div>
                  {lead.phone && <div className="text-xs text-muted-foreground">{lead.phone}</div>}
                </TableCell>
                <TableCell className="text-sm">{lead.budget || '-'}</TableCell>
                <TableCell>
                  <Select 
                    defaultValue={lead.status} 
                    onValueChange={(val) => handleStatusChange(lead.id, val)}
                  >
                    <SelectTrigger className="w-[130px] h-8 bg-black/50 border-white/10 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/10 text-white">
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
            {leads.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
