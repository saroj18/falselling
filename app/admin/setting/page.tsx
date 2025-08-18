import { getServerSession, Session } from "next-auth";
import SettingsContent from "./_components/profile-info";
import { authOptions } from "@/utils/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  return <SettingsContent session={session as Session} />;
}
