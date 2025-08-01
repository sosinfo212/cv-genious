// src/app/admin/settings/general/page.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function AdminGeneralSettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">General Settings</h2>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Site Settings</CardTitle>
            <CardDescription>Manage general application settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label className="text-base">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">
                        Temporarily disable access to the site for users.
                    </p>
                </div>
                <Switch />
            </div>
             <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label className="text-base">Allow New Registrations</Label>
                    <p className="text-sm text-muted-foreground">
                        Control whether new users can sign up.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>
             <div className="flex justify-end pt-4">
                <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
