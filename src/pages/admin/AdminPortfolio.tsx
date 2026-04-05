import { useState } from "react";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminPortfolio() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "ZenFlora Web Experience",
      description: "A brand-first digital product built for conversions.",
      category: "Web App",
      techStack: "React, Tailwind, Animations",
      featured: true,
      imageUrl: "",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Pulse Agency Portfolio",
      description: "A premium case studies dashboard with sleek interactions.",
      category: "Portfolio",
      techStack: "React, Motion, Responsive Layout",
      featured: false,
      imageUrl: "",
      liveUrl: "https://example.com",
    },
  ]);
  const { toast } = useToast();

  const handleAddSample = () => {
    const newProject = {
      id: projects.length + 1,
      title: "New Project " + (projects.length + 1),
      description: "A comprehensive digital solution involving modern tech stacks.",
      category: ["Web App", "E-commerce", "Fintech", "Corporate"][(projects.length + 1) % 4],
      techStack: "React, Node.js, PostgreSQL",
      featured: false,
      imageUrl: "",
      liveUrl: "https://example.com",
    };
    setProjects((current) => [...current, newProject]);
    toast({ title: "Project added successfully" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((current) => current.filter((project) => project.id !== id));
      toast({ title: "Project deleted" });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolio Management</h1>
          <p className="text-muted-foreground mt-2">Manage your agency's case studies and projects.</p>
        </div>
        <Button onClick={handleAddSample} className="glass-button gap-2">
          <Plus size={16} /> Add Sample Project
        </Button>
      </div>

      <div className="glass-panel border-white/10 rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-black/60">
            <TableRow className="border-white/10">
              <TableHead>Project</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Tech Stack</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} className="border-white/5 hover:bg-white/5">
                <TableCell>
                  <div className="font-medium">{project.title}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[250px]">{project.description}</div>
                </TableCell>
                <TableCell>
                  <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">
                    {project.category}
                  </span>
                </TableCell>
                <TableCell className="text-sm max-w-[200px] truncate">{project.techStack}</TableCell>
                <TableCell>
                  {project.featured ? (
                    <span className="text-xs text-primary font-bold">Yes</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">No</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <button 
                      onClick={() => handleDelete(project.id)}
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {projects.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No projects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
