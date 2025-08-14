import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { DashboardSidebar } from "./_components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/login");
  }
  return (
    <SidebarProvider>
      <div className="flex pt-8 item-center w-full gap-x-2">
        <DashboardSidebar />
        <div className="w-full overflow-y-scroll p-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}
