// src/app/admin/layout.tsx
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
  SidebarMenuSub,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Settings, Tag,SlidersHorizontal, KeyRound } from 'lucide-react';
import { useAuth } from '@/components/auth/auth-provider';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useAuth();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/users', label: 'Users', icon: Users },
  ];
  
  const settingsSubMenuItems = [
    { href: '/admin/settings/general', label: 'General', icon: SlidersHorizontal },
    { href: '/admin/settings/pricing', label: 'Pricing', icon: Tag },
    { href: '/admin/settings/api', label: 'API Keys', icon: KeyRound },
  ];


  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">Admin Panel</span>
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
             <Accordion type="single" collapsible defaultValue={pathname.startsWith('/admin/settings') ? 'settings' : ''} className="w-full">
                <AccordionItem value="settings" className="border-none">
                     <AccordionTrigger className="[&[data-state=open]>svg]:-rotate-180 flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 no-underline justify-start">
                        <Settings />
                        <span className="group-data-[collapsible=icon]:hidden">Settings</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                        <SidebarMenuSub>
                            {settingsSubMenuItems.map(item => (
                                 <SidebarMenuSubButton asChild key={item.href}>
                                     <Link href={item.href}>
                                        <SidebarMenuButton isActive={pathname === item.href} variant="ghost" className="w-full justify-start h-8">
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </SidebarMenuButton>
                                     </Link>
                                 </SidebarMenuSubButton>
                            ))}
                        </SidebarMenuSub>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <div className="flex flex-col gap-2 p-2 group-data-[collapsible=icon]:hidden">
                <p className="text-sm text-muted-foreground">Logged in as</p>
                <p className="font-medium">{user?.email}</p>
            </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
