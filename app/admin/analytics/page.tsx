"use client"

import { TrendingUp, Users, Package, ShoppingCart, DollarSign, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer } from "recharts";

const AnalyticsContent = () => {
  const analyticsData = [
    { title: "Revenue Growth", value: "+15.3%", description: "vs last month", icon: TrendingUp, color: "text-green-600" },
    { title: "New Customers", value: "+23.1%", description: "vs last month", icon: Users, color: "text-blue-600" },
    { title: "Product Views", value: "+8.7%", description: "vs last month", icon: Package, color: "text-purple-600" },
    { title: "Conversion Rate", value: "3.2%", description: "+0.5% vs last month", icon: ShoppingCart, color: "text-orange-600" },
  ];

  const topProducts = [
    { name: "Gypsum Board", sales: 145, revenue: "$3,625" },
    { name: "PVC Panel", sales: 98, revenue: "$1,519" },
    { name: "LED Panel Light", sales: 67, revenue: "$3,015" },
    { name: "Metal Ceiling Grid", sales: 89, revenue: "$1,135" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 4000, orders: 240 },
    { month: "Feb", revenue: 3000, orders: 139 },
    { month: "Mar", revenue: 2000, orders: 980 },
    { month: "Apr", revenue: 2780, orders: 390 },
    { month: "May", revenue: 1890, orders: 480 },
    { month: "Jun", revenue: 2390, orders: 380 },
  ];

  const salesData = [
    { product: "Gypsum Board", sales: 145 },
    { product: "PVC Panel", sales: 98 },
    { product: "LED Panel", sales: 67 },
    { product: "Metal Grid", sales: 89 },
    { product: "Acoustic Panel", sales: 120 },
  ];

  const categoryData = [
    { name: "Ceiling Tiles", value: 400, color: "#22c55e" }, // green
    { name: "Lighting", value: 300, color: "#3b82f6" }, // blue
    { name: "Panels", value: 200, color: "#f59e42" }, // orange
    { name: "Accessories", value: 100, color: "#a21caf" }, // purple
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--primary))",
    },
    orders: {
      label: "Orders",
      color: "hsl(var(--secondary))",
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button size="sm">Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Orders Trend</CardTitle>
            <CardDescription>Monthly performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#22c55e" // green-500
                  strokeWidth={2}
                  dot={{ fill: "#22c55e" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#f59e42" // orange-400
                  strokeWidth={2}
                  dot={{ fill: "#f59e42" }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales by Product</CardTitle>
            <CardDescription>Top performing products</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={salesData}>
                <XAxis dataKey="product" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales">
                  {salesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={["#22c55e", "#3b82f6", "#f59e42", "#a21caf", "#e11d48"][index % 5]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>Sales breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                      <Package className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{product.revenue}</p>
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

export default AnalyticsContent;