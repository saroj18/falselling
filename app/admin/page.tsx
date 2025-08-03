import { Users, Package, ShoppingCart, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const DashboardContent = () => {
  const statsCards = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Total Products",
      value: "89",
      change: "+5.2%",
      icon: Package,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "456",
      change: "+8.1%",
      icon: ShoppingCart,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "$12,345",
      change: "+15.3%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Active",
      joinDate: "2024-01-14",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Inactive",
      joinDate: "2024-01-13",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: "Active",
      joinDate: "2024-01-12",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      customer: "John Doe",
      product: "Gypsum Board",
      amount: "$150",
      status: "Completed",
    },
    {
      id: "#ORD002",
      customer: "Jane Smith",
      product: "PVC Panel",
      amount: "$200",
      status: "Processing",
    },
    {
      id: "#ORD003",
      customer: "Bob Johnson",
      product: "LED Panel",
      amount: "$300",
      status: "Pending",
    },
    {
      id: "#ORD004",
      customer: "Alice Brown",
      product: "Metal Ceiling",
      amount: "$450",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p
                      className={`text-xs ${
                        stat.change.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.change} from last month
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Latest user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8 bg-muted">
                      <span className="text-sm">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {user.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {user.joinDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{order.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {order.customer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.product}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "Completed"
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
      </div>
    </div>
  );
};

export default DashboardContent;
