import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function LogsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Work Logs</h2>
        <Button>Submit Timesheet</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Log Entry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="p1">ResFlow v2</SelectItem>
                    <SelectItem value="p2">Internal Ops</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Hours</Label>
                <Input type="number" placeholder="8" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="What did you work on today?"
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-end">
              <Button>Save Entry</Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Today's Logs</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">ResFlow v2</div>
                    <div className="text-sm text-muted-foreground">
                      Frontend implementation
                    </div>
                  </div>
                  <div className="font-bold">4h</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
