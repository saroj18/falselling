import { getAllUsers } from "@/actions/user";
import UsersContent from "./_components/user-list";
import { IUser } from "@/types/user";

export default async function page() {
  const { data } = await getAllUsers();
  return <UsersContent recentUsers={data as IUser[]} />;
}
