"use client";

import { useState } from "react";
import {
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  Home,
  Settings,
  LogOut,
  LayoutDashboard,
  BarChart3,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobile, setMobile] = useState(false); // You can adjust or remove this if not needed

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    { id: "users", label: "Users", icon: Users, href: "/admin/user" },
    {
      id: "products",
      label: "Products",
      icon: Package,
      href: "/admin/product",
    },
    {
      id: "orders",
      label: "Orders",
      icon: ShoppingCart,
      href: "/admin/orders",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      href: "/admin/notification",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/setting",
    },
  ];

  const handleTabClick = (itemId: string) => {
    setActiveTab(itemId);
    // If you want to handle mobile close, you can do it here
    // setMobile(false);
  };

  return (
    <div
      className={`${
        mobile ? "w-full" : "w-64"
      } bg-card border-r border-border h-full flex flex-col`}
    >
      <div className="p-6 border-b border-border">
        <Image
          width={160}
          height={140}
          src="/logo.png"
          alt="FalseCeilingNepal Logo"
          className="h-12 w-auto sm:h-16 hover:scale-105 transition-transform duration-200"
          priority
          quality={100}
        />
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.id}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => handleTabClick(item.id)}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
            <span className="text-sm font-medium">AD</span>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">
              admin@example.com
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-muted-foreground"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};
export default Sidebar;
