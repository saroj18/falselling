"use client";

import { User, Lock, Package, MessageCircle } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    id: "profile",
    title: "Profile",
    icon: User,
    href: "/dashboard/profile",
    path: "profile",
  },
  {
    id: "password",
    title: "Password",
    icon: Lock,
    href: "/dashboard/password",
    path: "password",
  },
  {
    id: "orders",
    title: "Order History",
    icon: Package,
    href: "/dashboard/order",
    path: "order",
  },
  // {
  //   id: "messages",
  //   title: "Messages",
  //   icon: MessageCircle,
  //   href: "/dashboard/message",
  //   path: "message",
  // },
];

export function DashboardSidebar() {
  const pathname = usePathname().split("/")[2];
  return (
    <Sidebar className="w-60 mt-9" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem
                  className={`cursor-pointer ${
                    pathname === item.path
                      ? "bg-primary rounded-md text-white"
                      : "text-muted-foreground rounded-md hover:bg-muted hover:text-foreground"
                  }`}
                  key={item.id}
                >
                  <Link href={item.href}>
                    <SidebarMenuButton className="hover:bg-green-50">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
