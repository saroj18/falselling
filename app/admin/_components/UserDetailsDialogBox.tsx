"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShoppingBag,
  Shield,
  Ban,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { IUser } from "@/types/user";

interface UserDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: IUser;
}

const UserDetailsDialog = ({
  open,
  onOpenChange,
  user,
}: UserDetailsDialogProps) => {
  const [isBlocked, setIsBlocked] = useState(user?.status === "Blocked");

  if (!user) return null;

  const userOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: "$125.50",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      total: "$89.99",
      status: "Processing",
    },
    { id: "ORD-003", date: "2024-01-25", total: "$234.75", status: "Shipped" },
  ];

  const userActivity = [
    { action: "Logged in", date: "2024-01-25 10:30 AM", ip: "192.168.1.1" },
    {
      action: "Placed order #ORD-003",
      date: "2024-01-25 10:45 AM",
      ip: "192.168.1.1",
    },
    {
      action: "Updated profile",
      date: "2024-01-24 3:20 PM",
      ip: "192.168.1.1",
    },
    { action: "Logged in", date: "2024-01-24 3:15 PM", ip: "192.168.1.1" },
  ];

  const handleBlockUser = () => {
    setIsBlocked(!isBlocked);
    // In real app, this would call an API
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <Avatar className="h-20 w-20 bg-muted">
                  <span className="text-2xl">{user.firstname}</span>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {user.firstname + " " + user.lastname}
                      </h3>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          isBlocked
                            ? "destructive"
                            : user.status === "Active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {isBlocked ? "Blocked" : user.status}
                      </Badge>
                      <Button
                        variant={isBlocked ? "default" : "destructive"}
                        size="sm"
                        onClick={handleBlockUser}
                      >
                        {isBlocked ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Unblock User
                          </>
                        ) : (
                          <>
                            <Ban className="h-4 w-4 mr-2" />
                            Block User
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        Joined{" "}
                        {new Date(user?.createdAt as Date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Block Warning */}
          {isBlocked && (
            <Card className="border-destructive bg-destructive/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <div>
                    <h4 className="font-medium text-destructive">
                      User Blocked
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      This user is currently blocked and cannot access their
                      account or place orders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tabs */}
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Order History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.total}</p>
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "default"
                                : order.status === "Processing"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 border rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.date} • IP: {activity.ip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive order and promotional emails
                      </p>
                    </div>
                    <Badge variant="default">Enabled</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Enhanced account security
                      </p>
                    </div>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Marketing Communications</h4>
                      <p className="text-sm text-muted-foreground">
                        Newsletter and product updates
                      </p>
                    </div>
                    <Badge variant="default">Enabled</Badge>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full">
                      Reset Password
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsDialog;
