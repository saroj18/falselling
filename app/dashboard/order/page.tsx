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

// Mock order data
const orders = [
  {
    id: "#12345",
    date: "2024-01-15",
    status: "Delivered",
    total: "$299.99",
    items: 3,
    products: ["Ceiling Light", "Wall Mount", "Installation Kit"],
  },
  {
    id: "#12344",
    date: "2024-01-10",
    status: "Processing",
    total: "$159.50",
    items: 2,
    products: ["LED Strip", "Controller"],
  },
  {
    id: "#12343",
    date: "2024-01-05",
    status: "Shipped",
    total: "$89.99",
    items: 1,
    products: ["Smart Switch"],
  },
  {
    id: "#12342",
    date: "2023-12-28",
    status: "Delivered",
    total: "$449.99",
    items: 5,
    products: ["Premium Ceiling Kit", "Remote Control", "Mounting Hardware"],
  },
];

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

export default function OrderHistorySection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Order History</h2>
        <p className="text-muted-foreground mt-2">
          Track and manage your past orders
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Filter Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <Input placeholder="Search by order ID or product..." />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 3 months</SelectItem>
                <SelectItem value="365">Last year</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>Ordered on {order.date}</CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                  <p className="text-lg font-semibold mt-1">{order.total}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {order.items} item{order.items > 1 ? "s" : ""}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {order.products.map((product, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Invoice
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Total Orders</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">$999.47</p>
              <p className="text-sm text-muted-foreground">Total Spent</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">10</p>
              <p className="text-sm text-muted-foreground">Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">$83.29</p>
              <p className="text-sm text-muted-foreground">Average Order</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
