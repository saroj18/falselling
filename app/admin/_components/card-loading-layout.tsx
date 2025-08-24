import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Loader = () => {
  return (
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
  );
};
