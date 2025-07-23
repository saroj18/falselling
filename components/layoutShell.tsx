"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function LayoutShell({ children }: { children:any }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main>{children}</main>
      <Toaster />
      {!isAdmin && <Footer />}
    </>
  );
}
