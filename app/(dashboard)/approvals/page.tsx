import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ApprovalsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Approvals</h2>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {/* Approval Item 1 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">
                  Resource Demand Request
                </CardTitle>
                <CardDescription>
                  Requested by Project Manager A regarding Project X
                </CardDescription>
              </div>
              <Badge variant="secondary">Pending</Badge>
            </CardHeader>
            <CardContent>
              <div className="py-4 text-sm">
                Requesting <strong>2 Senior React Developers</strong> for{" "}
                <strong>3 months</strong> starting Feb 1st.
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">
                  Reject
                </Button>
                <Button size="sm">Approve</Button>
              </div>
            </CardContent>
          </Card>

          {/* Approval Item 2 */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Skill Verification</CardTitle>
                <CardDescription>John Doe added "Next.js 14"</CardDescription>
              </div>
              <Badge variant="secondary">Pending</Badge>
            </CardHeader>
            <CardContent>
              <div className="py-4 text-sm">
                Employee claims <strong>Expert</strong> proficiency.
                Verification needed.
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">
                  Reject
                </Button>
                <Button size="sm">Verify & Approve</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
