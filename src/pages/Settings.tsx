import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your clinic settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Clinic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clinic-name">Clinic Name</Label>
                <Input id="clinic-name" defaultValue="DentalCare Pro Clinic" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinic-phone">Phone Number</Label>
                <Input id="clinic-phone" defaultValue="(555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinic-address">Address</Label>
              <Input id="clinic-address" defaultValue="123 Medical Center Dr, City, State 12345" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Google Drive Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Connect your Google Drive to sync patient documents and records.
            </p>
            <Button variant="outline">Connect Google Drive</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Export</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Export patient data for backup or transfer purposes.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline">Export as CSV</Button>
              <Button variant="outline">Export as PDF</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}