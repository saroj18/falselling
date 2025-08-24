import { Card, CardContent } from "@/components/ui/card";

export const DashboardCardLoader = () => {
  return (
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
  );
};
