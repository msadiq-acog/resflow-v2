import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";

export default function SkillsPage() {
  // Mock data for display
  const skills = [
    { name: "React", category: "Frontend", count: 12 },
    { name: "Node.js", category: "Backend", count: 8 },
    { name: "Python", category: "Backend", count: 5 },
    { name: "Project Management", category: "Management", count: 3 },
  ];

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Skills Matrix</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Skill
        </Button>
      </div>

      <div className="relative max-w-sm mb-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input className="pl-8" placeholder="Search skills..." />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors cursor-pointer"
          >
            <div>
              <div className="font-semibold">{skill.name}</div>
              <div className="text-xs text-muted-foreground">
                {skill.category}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{skill.count} Experts</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
