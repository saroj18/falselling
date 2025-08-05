"use client";

import { useState } from "react";
import { Search, Filter, Eye, Edit, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OrderDetailsDialog from "../../_components/OrderDetailsDialogBox";
import { IOrder } from "@/types/order";
import Image from "next/image";

const OrdersContent = ({ orders }: { orders: IOrder[] }) => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false);

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
    setOrderDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Orders Management</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search orders..." className="pl-10" />
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
                  <th className="text-center p-4 font-medium">Order Item</th>
                  <th className="text-center p-4 font-medium">Customer</th>
                  <th className="text-center p-4 font-medium">Product</th>
                  <th className="text-center p-4 font-medium">Amount</th>
                  <th className="text-center p-4 font-medium">Discount</th>
                  <th className="text-center p-4 font-medium">Status</th>
                  <th className="text-center p-4 font-medium">Date</th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="p-4 flex items-center justify-center text-center">
                      <Image
                        alt="product image"
                        src={order.orderedProduct.images[0]}
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="p-4 text-center">
                      {order.orderBy.firstname}
                    </td>
                    <td className="p-4 text-center ">
                      {order.orderedProduct.name}
                    </td>
                    <td className="p-4 text-center font-medium">
                      {order.price}
                    </td>
                    <td className="p-4 text-center font-medium">
                      {order.discount == "null" ? 0 : order.discount}%
                    </td>
                    <td className="p-4 align-middle text-center">
                      <Badge
                        variant={
                          order.status === "COMPLETED"
                            ? "default"
                            : order.status === "PENDING"
                            ? "secondary"
                            : order.status === "CANCEL"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
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

      <OrderDetailsDialog
        open={orderDetailsOpen}
        onOpenChange={setOrderDetailsOpen}
        order={selectedOrder}
      />
    </div>
  );
};

export default OrdersContent;
