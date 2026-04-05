import { useState } from "react";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Avery Morgan", email: "avery@example.com", phone: "(555) 555-0101", date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), time: "11:00 AM", type: "call", notes: "Interested in a website redesign", status: "pending" },
    { id: 2, name: "Mia Patel", email: "mia@example.com", phone: "(555) 222-3344", date: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(), time: "3:00 PM", type: "meeting", notes: "Looking for a new branding system.", status: "confirmed" },
  ]);
  const { toast } = useToast();

  const handleStatusChange = (id: number, newStatus: string) => {
    setBookings((current) => current.map((booking) => booking.id === id ? { ...booking, status: newStatus } : booking));
    toast({ title: "Booking status updated" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings Management</h1>
        <p className="text-muted-foreground mt-2">Manage consultation calls and strategy meetings.</p>
      </div>

      <div className="glass-panel border-white/10 rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-black/60">
            <TableRow className="border-white/10">
              <TableHead>Date & Time</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id} className="border-white/5 hover:bg-white/5">
                <TableCell className="whitespace-nowrap">
                  <div className="font-medium">{format(new Date(booking.date), 'MMM d, yyyy')}</div>
                  <div className="text-sm text-muted-foreground">{booking.time}</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{booking.name}</div>
                  <div className="text-sm text-muted-foreground">{booking.email}</div>
                  {booking.phone && <div className="text-xs text-muted-foreground">{booking.phone}</div>}
                </TableCell>
                <TableCell className="capitalize">{booking.type}</TableCell>
                <TableCell className="max-w-[200px] truncate text-sm">
                  {booking.notes || '-'}
                </TableCell>
                <TableCell>
                  <Select 
                    defaultValue={booking.status} 
                    onValueChange={(val) => handleStatusChange(booking.id, val)}
                  >
                    <SelectTrigger className="w-[130px] h-8 bg-black/50 border-white/10 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/10 text-white">
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
            {bookings.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
