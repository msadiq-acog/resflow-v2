import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EmployeesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
        <Link href="/employees/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search employees..." />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Example row - map your data here */}
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">
                      john@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Engineering</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Active
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link href="/employees/1">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
