import { Card, CardContent } from "@/components/ui/card";

export default function loading() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <div className="divide-y divide-border">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 animate-pulse"
              >
                <div className="flex items-center space-x-3 flex-1">
                  <div className="h-8 w-8 bg-muted rounded" />
                  <div className="h-4 w-24 bg-muted rounded" />
                </div>
                <div className="h-4 w-20 bg-muted rounded" />
                <div className="h-4 w-12 bg-muted rounded" />
                <div className="h-4 w-10 bg-muted rounded" />
                <div className="h-4 w-14 bg-muted rounded" />
                <div className="h-4 w-16 bg-muted rounded" />
                <div className="flex space-x-2">
                  <div className="h-6 w-6 bg-muted rounded" />
                  <div className="h-6 w-6 bg-muted rounded" />
                  <div className="h-6 w-6 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
