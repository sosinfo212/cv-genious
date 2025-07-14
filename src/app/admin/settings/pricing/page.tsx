// src/app/admin/settings/pricing/page.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const plans = [
    { id: '1', name: 'Free', description: 'Get started with our basic features.', price: '$0/month', tokens: 5 },
    { id: '2', name: 'Pro', description: 'Unlock all features to supercharge your job hunt.', price: '$19/month', tokens: 50 },
    { id: '3', name: 'Enterprise', description: 'For teams and businesses.', price: 'Contact us', tokens: -1 }, // -1 for unlimited
];

export default function AdminPricingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Pricing Settings</h2>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Plans</CardTitle>
            <CardDescription>Update pricing and features for each subscription plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {plans.map((plan, index) => (
              <form key={plan.id} className="space-y-4 rounded-lg border p-6">
                 <h3 className="text-xl font-semibold">{plan.name} Plan</h3>
                 <div className="space-y-2">
                    <Label htmlFor={`description-${plan.id}`}>Description</Label>
                    <Input id={`description-${plan.id}`} defaultValue={plan.description} />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor={`price-${plan.id}`}>Price</Label>
                        <Input id={`price-${plan.id}`} defaultValue={plan.price} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor={`tokens-${plan.id}`}>Tokens</Label>
                        <Input id={`tokens-${plan.id}`} type="number" defaultValue={plan.tokens === -1 ? '' : plan.tokens} placeholder={plan.tokens === -1 ? 'Unlimited' : 'Number of tokens'} />
                    </div>
                 </div>
                 <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                 </div>
              </form>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
