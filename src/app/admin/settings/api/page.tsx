// src/app/admin/settings/api/page.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function AdminApiSettingsPage() {
  const [isTestMode, setIsTestMode] = useState(true);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">API Keys</h2>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Third-Party Integrations</CardTitle>
            <CardDescription>Manage API keys for services like Google AI.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="geminiApiKey">Gemini API Key</Label>
              <Input id="geminiApiKey" type="password" defaultValue="************" />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Stripe Configuration</CardTitle>
                <CardDescription>Manage Stripe API keys and toggle between test and live modes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="space-y-2">
                    <Label htmlFor="stripePublishableKey">Stripe Publishable Key</Label>
                    <Input 
                      id="stripePublishableKey" 
                      placeholder={isTestMode ? "pk_test_..." : "pk_live_..."} 
                    />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="stripeSecretKey">Stripe Secret Key</Label>
                    <Input 
                      id="stripeSecretKey" 
                      type="password" 
                      placeholder={isTestMode ? "sk_test_..." : "sk_live_..."} 
                    />
                </div>
                <Separator />
                <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Stripe Test Mode</Label>
                        <p className="text-sm text-muted-foreground">
                            Use test keys to simulate payments without actual charges.
                        </p>
                    </div>
                    <Switch 
                      checked={isTestMode}
                      onCheckedChange={setIsTestMode}
                    />
                </div>
                 <div className="flex justify-end">
                    <Button>Save Stripe Settings</Button>
                 </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
