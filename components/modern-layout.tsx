"use client";

import { ReactNode } from "react";
import { 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  Clock, 
  CheckSquare, 
  BarChart3, 
  User,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, ChevronDown } from "lucide-react";

interface ModernLayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home, roles: ["employee", "project_manager", "hr_executive"] },
  { name: "Employees", href: "/employees", icon: Users, roles: ["hr_executive"] },
  { name: "Projects", href: "/projects", icon: Briefcase, roles: ["project_manager", "hr_executive"] },
  { name: "Allocations", href: "/allocations", icon: TrendingUp, roles: ["project_manager", "hr_executive"] },
  { name: "Demands", href: "/demands", icon: Zap, roles: ["project_manager", "hr_executive"] },
  { name: "Skills", href: "/skills", icon: Shield, roles: ["hr_executive"] },
  { name: "Work Logs", href: "/logs", icon: Clock, roles: ["employee", "project_manager"] },
  { name: "Tasks", href: "/tasks", icon: CheckSquare, roles: ["employee", "project_manager"] },
  { name: "Reports", href: "/reports", icon: BarChart3, roles: ["project_manager", "hr_executive"] },
  { name: "Approvals", href: "/approvals", icon: CheckSquare, roles: ["hr_executive"] },
  { name: "Audit", href: "/audit", icon: BarChart3, roles: ["hr_executive"] },
  { name: "Profile", href: "/profile", icon: User, roles: ["employee", "project_manager", "hr_executive"] },
];

export function ModernLayout({ children, title, breadcrumbs }: ModernLayoutProps) {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const userRole = user?.employee_role || "employee";
  
  // Filter navigation items based on user role
  const filteredNavItems = navigationItems.filter(item => 
    item.roles.includes(userRole)
  );

  const getInitials = (name?: string) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col border-r bg-card">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">ResFlow</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="space-y-1 px-3">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        
        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent transition-colors">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                {getInitials(user?.full_name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.full_name || "User"}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {userRole.replace("_", " ")}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden fixed top-4 left-4 z-50 h-10 w-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center border-b px-6">
              <h1 className="text-xl font-bold text-primary">ResFlow</h1>
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-3">
                {filteredNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-0 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              {/* Breadcrumbs */}
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
                {breadcrumbs?.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronDown className="h-4 w-4 rotate-90 text-muted-foreground" />
                    {crumb.href ? (
                      <Link 
                        href={crumb.href} 
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-foreground font-medium">{crumb.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* User Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-9 gap-2 px-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs">
                        {getInitials(user?.full_name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium">
                      {user?.full_name || "User"}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium">
                      {user?.full_name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {userRole.replace("_", " ")}
                    </p>
                  </div>
                  <Separator />
                  <DropdownMenuItem>
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-x-hidden">
          {title && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {breadcrumbs && (
                <p className="text-muted-foreground mt-1">
                  {breadcrumbs[breadcrumbs.length - 1]?.label}
                </p>
              )}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}