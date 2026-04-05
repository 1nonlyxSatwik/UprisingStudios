import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function AdminTeam() {
  const [team, setTeam] = useState([
    { id: 1, name: "Satwik Mani Tripathi", role: "Lead Developer", bio: "Leads architecture and front-end experience.", order: 1 },
    { id: 2, name: "Akash Gautam", role: "Full Stack Developer", bio: "Builds robust cross-platform solutions.", order: 2 },
    { id: 3, name: "Lakshay Yadav", role: "Frontend Developer", bio: "Crafts polished user experiences.", order: 3 },
    { id: 4, name: "Dhruv Kumar", role: "Backend Developer", bio: "Keeps the systems fast and reliable.", order: 4 },
  ]);
  const { toast } = useToast();

  const handleAddSample = () => {
    const newMember = {
      id: team.length + 1,
      name: "New Team Member",
      role: "Developer",
      bio: "Passionate about building great digital experiences.",
      order: team.length + 1,
    };

    setTeam((current) => [...current, newMember]);
    toast({ title: "Team member added successfully" });
  };

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl font-black tracking-tight uppercase"><span className="text-primary">Team</span> Management</h1>
          <p className="text-muted-foreground mt-2 font-mono text-sm tracking-wider">Manage the elite agency team profiles.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3 }} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button onClick={handleAddSample} className="glass-button gap-2 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Plus size={16} /> Add Member
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="glass-panel border-white/10 rounded-xl overflow-hidden bg-black/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Table>
          <TableHeader className="bg-black/60">
            <TableRow className="border-white/10 opacity-70">
              <TableHead className="uppercase tracking-widest text-[10px] text-muted-foreground">Name</TableHead>
              <TableHead className="uppercase tracking-widest text-[10px] text-muted-foreground">Role</TableHead>
              <TableHead className="uppercase tracking-widest text-[10px] text-muted-foreground">Bio</TableHead>
              <TableHead className="uppercase tracking-widest text-[10px] text-muted-foreground">Order</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team.map((member) => (
              <TableRow 
                key={member.id} 
                className="border-white/5 hover:bg-white/5 transition-colors group"
              >
                <TableCell className="font-bold tracking-wide group-hover:text-white transition-colors">{member.name}</TableCell>
                <TableCell className="font-mono text-xs text-primary uppercase tracking-widest">{member.role}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-[300px] truncate group-hover:text-white/70 transition-colors">{member.bio}</TableCell>
                <TableCell className="font-mono text-xs opacity-50 font-bold">{member.order}</TableCell>
              </TableRow>
            ))}
            {team.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 text-muted-foreground font-mono tracking-widest text-xs uppercase">
                  No elite squad members assigned yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </motion.div>
    </motion.div>
  );
}
