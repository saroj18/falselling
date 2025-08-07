import { Card, CardContent } from "@/components/ui/card";

const LoadingCategories = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="h-6 w-48 bg-muted rounded"></div>
        <div className="h-9 w-28 bg-muted rounded"></div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="h-9 flex-1 bg-muted rounded"></div>
        <div className="h-9 w-24 bg-muted rounded"></div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <th key={i} className="p-4">
                      <div className="h-4 w-20 bg-muted rounded"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border">
                    {Array.from({ length: 5 }).map((_, colIndex) => (
                      <td key={colIndex} className="p-4">
                        <div className="h-4 w-full bg-muted rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingCategories;
