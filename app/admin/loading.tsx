import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const DashboardContentLoading = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-muted rounded"></div>
                  <div className="h-6 w-16 bg-muted rounded"></div>
                </div>
                <div className="h-8 w-8 bg-muted rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent users and orders skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="h-5 w-32 bg-muted rounded"></div>
            </CardTitle>
            <CardDescription>
              <div className="h-3 w-40 bg-muted rounded mt-1"></div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-28 bg-muted rounded"></div>
                      <div className="h-2 w-40 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="h-4 w-16 bg-muted rounded"></div>
                    <div className="h-2 w-20 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <div className="h-5 w-32 bg-muted rounded"></div>
            </CardTitle>
            <CardDescription>
              <div className="h-3 w-40 bg-muted rounded mt-1"></div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-3 w-20 bg-muted rounded"></div>
                    <div className="h-2 w-28 bg-muted rounded"></div>
                    <div className="h-2 w-32 bg-muted rounded"></div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="h-3 w-16 bg-muted rounded"></div>
                    <div className="h-4 w-20 bg-muted rounded"></div>
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

export default DashboardContentLoading;
