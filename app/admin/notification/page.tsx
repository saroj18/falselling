import { Bell, Check, Clock, Info, AlertTriangle, CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NotificationsContent = () => {
  const notifications = [
    {
      id: 1,
      type: "order",
      title: "New Order Received",
      message: "Order #ORD-001 has been placed by John Doe",
      time: "2 minutes ago",
      read: false,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "inventory",
      title: "Low Stock Alert",
      message: "Gypsum Board inventory is running low (5 units remaining)",
      time: "1 hour ago",
      read: false,
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      id: 3,
      type: "user",
      title: "New User Registration",
      message: "Jane Smith has created a new account",
      time: "3 hours ago",
      read: true,
      icon: Info,
      color: "text-blue-600",
    },
    {
      id: 4,
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance completed successfully",
      time: "1 day ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 5,
      type: "order",
      title: "Order Cancelled",
      message: "Order #ORD-004 has been cancelled by customer",
      time: "2 days ago",
      read: false,
      icon: X,
      color: "text-red-600",
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const filterNotifications = (type: string) => {
    if (type === "all") return notifications;
    return notifications.filter(n => n.type === type);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "order": return "bg-green-100 text-green-800";
      case "inventory": return "bg-orange-100 text-orange-800";
      case "user": return "bg-blue-100 text-blue-800";
      case "system": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p className="text-muted-foreground">
            {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="order">Orders</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="user">Users</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {filterNotifications("all").map((notification) => {
            const Icon = notification.icon;
            return (
              <Card key={notification.id} className={`transition-colors ${!notification.read ? 'bg-accent/50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full bg-muted`}>
                      <Icon className={`h-4 w-4 ${notification.color}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium">{notification.title}</h4>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getTypeColor(notification.type)}>
                            {notification.type}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {notification.time}
                        </span>
                        <div className="flex gap-2">
                          {!notification.read && (
                            <Button variant="ghost" size="sm">
                              Mark as read
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        {["order", "inventory", "user", "system"].map((type) => (
          <TabsContent key={type} value={type} className="space-y-4 mt-6">
            {filterNotifications(type).map((notification) => {
              const Icon = notification.icon;
              return (
                <Card key={notification.id} className={`transition-colors ${!notification.read ? 'bg-accent/50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full bg-muted`}>
                        <Icon className={`h-4 w-4 ${notification.color}`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {notification.time}
                          </span>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button variant="ghost" size="sm">
                                Mark as read
                              </Button>
                            )}
                            <Button variant="ghost" size="sm">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NotificationsContent;