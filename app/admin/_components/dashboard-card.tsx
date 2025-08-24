import { getDashboardData } from "@/actions/dashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Package, ShoppingCart, DollarSign } from "lucide-react";

export const DashboardCards = async () => {
  const { data } = await getDashboardData();

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
  );
};
