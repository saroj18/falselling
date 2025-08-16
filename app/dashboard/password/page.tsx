import { getServerSession, Session } from "next-auth";
import PasswordSection from "./_components/password";
import { authOptions } from "@/utils/authOptions";

export default async function page() {
  const session=await getServerSession(authOptions)
  return <PasswordSection session={session as Session} />;
}
