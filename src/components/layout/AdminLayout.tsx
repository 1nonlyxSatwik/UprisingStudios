import { useState, ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { LayoutDashboard, Users, Briefcase, Calendar, DollarSign, LogOut, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("admin_auth") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [location] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "hexcode2024") {
      setIsAuthenticated(true);
      localStorage.setItem("admin_auth", "true");
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full z-0" />
        <div className="glass-panel p-8 w-full max-w-md rounded-xl z-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Hexcode Command Center</h1>
            <p className="text-muted-foreground text-sm">Enter access code to continue</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border-white/10 text-white"
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" className="glass-button w-full">
              Access Granted
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Leads", path: "/admin/leads", icon: MessageSquare },
    { name: "Bookings", path: "/admin/bookings", icon: Calendar },
    { name: "Portfolio", path: "/admin/portfolio", icon: Briefcase },
    { name: "Team", path: "/admin/team", icon: Users },
    { name: "Pricing", path: "/admin/pricing", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span className="font-bold tracking-widest text-sm">HEXCODE ADMIN</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden h-16 border-b border-white/10 flex items-center justify-between px-4 bg-black/50 backdrop-blur-xl">
          <span className="font-bold">HEXCODE ADMIN</span>
          {/* Mobile menu could go here */}
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
