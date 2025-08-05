"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Package2, User, MapPin, Calendar, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IOrder, StatusType } from "@/types/order";
import { changeStatus } from "@/actions/order";
import { toast } from "sonner";

interface OrderDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: IOrder;
}

const OrderDetailsDialog = ({
  open,
  onOpenChange,
  order,
}: OrderDetailsDialogProps) => {
  const [position, setPosition] = React.useState("PENDING");
  const [dialog, setDialog] = React.useState(false);

  if (!order) return null;

  const clickHandler = async () => {
    try {
      const response = await changeStatus(order.id, position as StatusType);
      if (response.success) {
        toast.success(`change status successfully (${position})`);
        setDialog(false);
      } else {
        toast.success(`change status failed`);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setDialog(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package2 className="h-5 w-5" />
            Order Details - {order.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Status */}
          <div className="flex items-center justify-between">
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
              className="text-sm"
            >
              {order.status}
            </Badge>
            <div className="flex gap-2">
              <AlertDialog open={dialog}>
                <AlertDialogTrigger asChild>
                  <Button
                    onClick={() => setDialog(true)}
                    variant="default"
                    size="sm"
                  >
                    Change Status
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Change Order Status</AlertDialogTitle>
                    <AlertDialogDescription>
                      <Select value={position} onValueChange={setPosition}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="RECEIVED">Received</SelectItem>
                            <SelectItem value="COMPLETED">Completed</SelectItem>
                            <SelectItem value="CANCEL">Cancel</SelectItem>
                            <SelectItem value="PENDING">Pending</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={()=>setDialog(false)}>Exit</AlertDialogCancel>
                    <AlertDialogAction onClick={clickHandler}>
                      Change
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button variant="outline" size="sm">
                Print Invoice
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-4 w-4" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <p className="text-sm">
                    {order.orderBy.firstname + " " + order.orderBy.lastname}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <p className="text-sm">{order.orderBy.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Phone
                  </label>
                  <p className="text-sm">{order.orderBy.phone}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-4 w-4" />
                  Order Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Order Date
                  </label>
                  <p className="text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Payment Method
                  </label>
                  <p className="text-sm">Cash on Delivery</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Total Amount
                  </label>
                  <p className="text-sm font-semibold">{order.price}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-4 w-4" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>123 Main Street</p>
                <p>Apartment 4B</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package2 className="h-4 w-4" />
                Order Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-muted rounded flex items-center justify-center">
                      <Package2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{order.orderedProduct.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Quantity: 2 sq/ft
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rs. {order.price}</p>
                    <p className="text-sm text-muted-foreground">
                      {Number(order.discount) > 0
                        ? order.orderedProduct.price -
                          (order.orderedProduct.price *
                            Number(order.discount)) /
                            100
                        : order.orderedProduct.price + " "}
                      per sq/ft
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Truck className="h-4 w-4" />
                Order Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Order Placed</p>
                    <p className="text-xs text-muted-foreground">
                      Reach Out Soon
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment</p>
                    <p className="text-xs text-muted-foreground">
                      Cash on Delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-muted rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Order Shipped
                    </p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
