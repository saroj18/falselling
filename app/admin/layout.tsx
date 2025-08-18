import { redirect } from "next/navigation";
import Sidebar from "./_components/Sidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { prisma } from "@/utils/prisma";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/login");
  }

  const findUser = await prisma.user.findUnique({
    where: { email: session.user.email as string },
  });

  if (findUser?.role != "Admin") {
    redirect("/");
  }
  return (
    <div className="flex h-screen item-center w-full gap-x-2">
      <Sidebar session={session} />
      <div className="w-full  overflow-y-scroll p-4">{children}</div>
    </div>
  );
}
