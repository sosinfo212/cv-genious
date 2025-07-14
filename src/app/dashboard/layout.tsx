// src/app/dashboard/layout.tsx
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, FileText, User, Coins, CreditCard, LifeBuoy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useAuth();

  const menuItems = [
    { href: '/dashboard', label: 'Generator', icon: Bot },
    { href: '/dashboard/history', label: 'History', icon: FileText },
    { href: '/dashboard/profile', label: 'Profile', icon: User },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <div className="flex flex-col gap-2 p-2 group-data-[collapsible=icon]:hidden">
                <Card className="bg-sidebar-accent">
                    <CardHeader className="p-4">
                        <CardTitle className="text-sm font-medium">Pro Plan</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-center">
                            <p className="text-3xl font-bold">23</p>
                            <p className="text-xs text-muted-foreground">Tokens Left</p>
                        </div>
                        <Progress value={23} className="mt-2 h-2" />
                        <Button asChild size="sm" className="w-full mt-4">
                            <Link href="/#pricing">Upgrade</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
