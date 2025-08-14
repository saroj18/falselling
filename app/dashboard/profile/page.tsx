import { getServerSession, Session } from "next-auth";
import ProfileSection from "./_components/profile";
import { authOptions } from "@/utils/authOptions";

export default async function page() {
  const session=await getServerSession(authOptions)
  return <ProfileSection session={session as Session} />;
}
