"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import UserDetailsDialog from "../../_components/UserDetailsDialogBox";
import { IUser } from "@/types/user";
import { blockUser, deleteUser, unBlockUser } from "@/actions/user";
import { toast } from "sonner";
import SignupDialog from "./user-add-form";

const UsersContent = ({ recentUsers }: { recentUsers: IUser[] }) => {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [addUser, setAddUser] = useState(false);

  const handleViewUser = (user: IUser) => {
    setSelectedUser(user);
    setIsDetailsOpen(true);
  };

  const handleDelete = async (id: string) => {
    const response = await deleteUser(id);
    if (response.success) {
      toast.success("User deleted Successfully");
    } else {
      toast.error(response.message);
    }
  };

  const handleBlockUser = async (userId: string, status: string) => {
    console.log("clicked", status == "Active");
    if (status == "Active") {
      const response = await blockUser(userId);
      if (response.success) {
        toast.success("User is Blocked");
      } else {
        toast.error(response.message);
      }
    } else if (status == "Blocked") {
      const response = await unBlockUser(userId);
      if (response.success) {
        toast.success("User is Unblocked");
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Users Management</h2>
        <Button onClick={() => setAddUser(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Email</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Join Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers?.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8 bg-muted">
                          <span className="text-sm">
                            {user.firstname
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </Avatar>
                        <span className="font-medium">
                          {user.firstname + " " + user.lastname}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{user.email}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          user.status === "Active"
                            ? "default"
                            : user.status === "Blocked"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{user.role}</td>
                    <td className="p-4 text-muted-foreground">
                      {new Date(user?.createdAt as Date).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewUser(user)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>

                        {user.role == "User" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleBlockUser(user.id, user.status)
                            }
                          >
                            {user.status === "Blocked" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Ban className="h-4 w-4 text-red-600" />
                            )}
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <UserDetailsDialog
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        user={selectedUser as IUser}
      />
      <SignupDialog open={addUser} setAddUser={setAddUser} />
    </div>
  );
};

export default UsersContent;
