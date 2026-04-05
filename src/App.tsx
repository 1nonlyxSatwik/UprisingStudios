import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";

import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Book from "@/pages/Book";
import NotFound from "@/pages/not-found";

import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminLeads from "@/pages/admin/AdminLeads";
import AdminBookings from "@/pages/admin/AdminBookings";
import AdminPortfolio from "@/pages/admin/AdminPortfolio";
import AdminTeam from "@/pages/admin/AdminTeam";
import AdminPricing from "@/pages/admin/AdminPricing";

import RootLayout from "@/components/layout/RootLayout";
import AdminLayout from "@/components/layout/AdminLayout";

function Router() {
  return (
    <Switch>
      <Route path="/admin" nest>
        <AdminLayout>
          <Switch>
            <Route path="/" component={AdminDashboard} />
            <Route path="/leads" component={AdminLeads} />
            <Route path="/bookings" component={AdminBookings} />
            <Route path="/portfolio" component={AdminPortfolio} />
            <Route path="/team" component={AdminTeam} />
            <Route path="/pricing" component={AdminPricing} />
            <Route component={NotFound} />
          </Switch>
        </AdminLayout>
      </Route>

      <Route path="/" nest>
        <RootLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/book" component={Book} />
            <Route component={NotFound} />
          </Switch>
        </RootLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <LoadingScreen />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "") }>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
