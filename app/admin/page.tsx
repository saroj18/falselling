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
import { getDashboardData } from "@/actions/dashboard";
import { getAllUsers } from "@/actions/user";
import { getAllOrders } from "@/actions/order";
import Link from "next/link";

const DashboardContent = async () => {
  const { data } = await getDashboardData();
  const { data: recentUsers } = await getAllUsers();
  const { data: recentOrders } = await getAllOrders();
  const statsCards = [
    {
      title: "Total Users",
      value: data?.totalUser,
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Total Products",
      value: data?.totalProduct,
      change: "+5.2%",
      icon: Package,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: data?.totalOrder,
      change: "+8.1%",
      icon: ShoppingCart,
      color: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "Rs " + data?.totalRevenue,
      change: "+15.3%",
      icon: DollarSign,
      color: "text-yellow-600",
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
              {recentUsers?.slice(0, 6).map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between"
                >
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

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders?.slice(0, 5).map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">
                      #{order.id.slice(0, 10)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.orderBy.firstname}
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {order.orderedProduct.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{order.price}</p>
                    <Badge
                      variant={
                        order.status === "COMPLETED"
                          ? "default"
                          : order.status === "PENDING"
                          ? "secondary"
                          : order.status == "CANCEL"
                          ? "destructive"
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
          <Link
            href={"/admin/orders"}
            className="max-w-sm mx-auto text-blue-500 underline lowercase"
          >
            All Orders
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
