import {
  LayoutDashboard,
  CheckSquare,
  Briefcase,
  Users,
  CalendarRange,
  FileText,
  ShieldAlert,
  Settings,
  GitPullRequest,
  BarChart3,
  ScrollText,
  UserCog,
} from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  icon: any;
  badge?: string; // Optional: show count (e.g., "5 pending")
  role?: string[]; // Optional: for future RBAC
};

export const navConfig = {
  main: [{ title: "Dashboard", url: "/dashboard", icon: LayoutDashboard }],

  workTracking: [
    { title: "Tasks", url: "/tasks", icon: CheckSquare },
    { title: "Projects", url: "/projects", icon: Briefcase },
    { title: "Logs", url: "/logs", icon: ScrollText },
  ],

  resources: [
    { title: "Employees", url: "/employees", icon: Users },
    { title: "Allocations", url: "/allocations", icon: CalendarRange },
    { title: "Demands", url: "/demands", icon: GitPullRequest },
    { title: "Skills", url: "/skills", icon: UserCog },
  ],

  governance: [
    { title: "Approvals", url: "/approvals", icon: ShieldAlert },
    { title: "Audit", url: "/audit", icon: FileText },
  ],

  reports: [{ title: "Reports", url: "/reports", icon: BarChart3 }],

  system: [{ title: "Settings", url: "/settings", icon: Settings }],
};
