import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package, Search, Download, Eye } from "lucide-react";
import { IOrder } from "@/types/order";
import Image from "next/image";

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Delivered":
      return "default";
    case "Processing":
      return "secondary";
    case "Shipped":
      return "outline";
    default:
      return "secondary";
  }
};

export default function OrderHistorySection({ orders }: { orders: IOrder[] }) {
  console.log("order>>>", orders);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Order History</h2>
        <p className="text-muted-foreground mt-2">See your past orders</p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders?.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {order.orderedProduct.name}
                  </CardTitle>
                  <CardDescription>
                    Ordered on {new Date(order.createdAt).toLocaleDateString()}
                  </CardDescription>
                  <Image
                    src={order.orderedProduct.images[0]}
                    width={100}
                    height={100}
                    alt="product image"
                  />
                </div>
                <div className="text-right">
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                  <p className="text-lg font-semibold mt-1">Rs {order.price}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
