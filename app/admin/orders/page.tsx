"use client"

import { useState } from "react";
import { Search, Filter, Eye, Edit, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OrderDetailsDialog from "../_components/OrderDetailsDialogBox";

const OrdersContent = () => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [orderDetailsOpen, setOrderDetailsOpen] = useState(false);

  const orders = [
    { id: "#ORD001", customer: "John Doe", product: "Gypsum Board", amount: "$150.00", status: "Completed", date: "2024-01-15" },
    { id: "#ORD002", customer: "Jane Smith", product: "PVC Panel", amount: "$200.50", status: "Processing", date: "2024-01-14" },
    { id: "#ORD003", customer: "Bob Johnson", product: "LED Panel", amount: "$300.75", status: "Pending", date: "2024-01-13" },
    { id: "#ORD004", customer: "Alice Brown", product: "Metal Ceiling", amount: "$450.25", status: "Shipped", date: "2024-01-12" },
    { id: "#ORD005", customer: "Mike Wilson", product: "Acoustic Tiles", amount: "$175.00", status: "Cancelled", date: "2024-01-11" },
  ];

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
                  <th className="text-left p-4 font-medium">Order ID</th>
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Product</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                          <Package2 className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{order.id}</span>
                      </div>
                    </td>
                    <td className="p-4">{order.customer}</td>
                    <td className="p-4 text-muted-foreground">{order.product}</td>
                    <td className="p-4 font-medium">{order.amount}</td>
                    <td className="p-4">
                      <Badge 
                        variant={
                          order.status === 'Completed' ? 'default' : 
                          order.status === 'Processing' || order.status === 'Shipped' ? 'secondary' : 
                          order.status === 'Cancelled' ? 'destructive' : 'outline'
                        }
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{order.date}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
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