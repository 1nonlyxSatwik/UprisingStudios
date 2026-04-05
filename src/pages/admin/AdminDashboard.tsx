import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Briefcase, TrendingUp } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

const stats = {
  totalLeads: 42,
  pendingBookings: 6,
  totalProjects: 18,
  newLeadsToday: 3,
};

const activity = {
  recentLeads: [
    { id: 1, name: "Taylor Harper", email: "taylor@example.com", status: "new", createdAt: new Date().toISOString() },
    { id: 2, name: "Jordan Kim", email: "jordan@example.com", status: "contacted", createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() },
  ],
  recentBookings: [
    { id: 1, name: "Avery Morgan", date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), time: "11:00 AM", type: "call", status: "pending" },
    { id: 2, name: "Lina Perez", date: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(), time: "2:00 PM", type: "meeting", status: "confirmed" },
  ],
};

export default function AdminDashboard() {
  const statCards = [
    { title: "Total Leads", value: stats?.totalLeads || 0, icon: Users, color: "text-blue-500", shadow: "shadow-blue-500/20" },
    { title: "Pending Bookings", value: stats?.pendingBookings || 0, icon: Calendar, color: "text-orange-500", shadow: "shadow-orange-500/20" },
    { title: "Total Projects", value: stats?.totalProjects || 0, icon: Briefcase, color: "text-purple-500", shadow: "shadow-purple-500/20" },
    { title: "New Leads Today", value: stats?.newLeadsToday || 0, icon: TrendingUp, color: "text-green-500", shadow: "shadow-green-500/20" },
  ];

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl font-black tracking-tight uppercase"><span className="text-primary">Dashboard</span> Overview</h1>
        <p className="text-muted-foreground mt-2 font-mono text-sm tracking-wider">Welcome to the Hexcode Command Center.</p>
      </motion.div>

      <motion.div variants={containerVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring" as const, stiffness: 400 }}>
              <Card className={`glass-card border-white/5 bg-black/40 overflow-hidden relative group`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color.split('-')[1]}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-muted-foreground tracking-wide">
                    {stat.title}
                  </CardTitle>
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className={`p-2 rounded-md bg-white/5 ${stat.color} ${stat.shadow} shadow-lg backdrop-blur-md`}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={itemVariants} className="h-full">
          <Card className="glass-card border-white/5 bg-black/40 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-sm text-primary">Recent Leads</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                {activity?.recentLeads.map((lead, idx) => (
                  <motion.div 
                    key={lead.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 cursor-default transition-colors"
                  >
                    <div>
                      <p className="font-bold text-sm tracking-wide">{lead.name}</p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">{lead.email}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 font-bold tracking-widest uppercase">
                        {lead.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-2 font-mono uppercase tracking-widest">
                        {format(new Date(lead.createdAt), 'MMM d, yyyy')}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {activity?.recentLeads.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8 font-mono">NO RECENT LEADS</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <Card className="glass-card border-white/5 bg-black/40 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-sm text-primary">Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                {activity?.recentBookings.map((booking, idx) => (
                  <motion.div 
                    key={booking.id} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    whileHover={{ x: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 cursor-default transition-colors"
                  >
                    <div>
                      <p className="font-bold text-sm tracking-wide">{booking.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-2 mt-2 font-mono">
                        <Calendar size={12} className="text-primary" />
                        {format(new Date(booking.date), 'MMM d')} at {booking.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border ${
                        booking.status === 'pending' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                        booking.status === 'confirmed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        'bg-white/10 text-muted-foreground border-white/20'
                      }`}>
                        {booking.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest font-mono">
                        {booking.type}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {activity?.recentBookings.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8 font-mono">NO RECENT BOOKINGS</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
