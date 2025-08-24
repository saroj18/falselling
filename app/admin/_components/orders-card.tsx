import { getAllOrders } from "@/actions/order";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const OrdersCard = async() => {

    const { data: recentOrders } = await getAllOrders();
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest customer orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders?.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between">
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
    );
}