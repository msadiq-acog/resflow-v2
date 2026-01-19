import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Task #{params.id}</h1>
          <Badge variant="outline">In Progress</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Log Time</Button>
          <Button>Mark Complete</Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Description</h3>
              <p className="text-muted-foreground">
                Implement the new authentication flow using NextAuth v5. Ensure
                all protected routes are properly secured and redirection works
                as expected.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Assignee</h3>
                <p>Alex Johnson</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Due Date</h3>
                <p>Jan 24, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 text-sm">
                <div className="font-medium">Alex Johnson</div>
                <div className="text-muted-foreground">
                  started working on this task
                </div>
                <div className="text-muted-foreground ml-auto">2 hours ago</div>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="font-medium">System</div>
                <div className="text-muted-foreground">created task</div>
                <div className="text-muted-foreground ml-auto">1 day ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
