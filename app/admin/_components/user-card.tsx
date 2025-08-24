import { getAllUsers } from "@/actions/user";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const UserCard = async () => {
  const { data: recentUsers } = await getAllUsers();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
        <CardDescription>Latest user registrations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentUsers?.slice(0, 6).map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8 bg-muted flex items-center justify-center font-bold">
                  <span className="text-sm">
                    {user.firstname[0].toUpperCase()}
                  </span>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    {user.firstname + " " + user.lastname}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge
                  variant={user.status === "Active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(user.createdAt as Date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <Link
        href={"/admin/users"}
        className="max-w-sm mx-auto text-blue-500 underline lowercase"
      >
        All Users
      </Link>
    </Card>
  );
};
