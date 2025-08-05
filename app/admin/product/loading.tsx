"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsContentLoading() {
  return (
    <div className="space-y-6 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Skeleton className="h-6 w-48" /> {/* Title */}
        <Skeleton className="h-10 w-32" /> {/* Add Product Button */}
      </div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Skeleton className="h-10 w-full sm:w-64" /> {/* Search */}
        <Skeleton className="h-10 w-24" /> {/* Filter */}
      </div>

      {/* Table Skeleton */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  {Array(8)
                    .fill(0)
                    .map((_, idx) => (
                      <th key={idx} className="text-left p-4 font-medium">
                        <Skeleton className="h-4 w-16" />
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border last:border-0"
                    >
                      {Array(8)
                        .fill(0)
                        .map((_, cellIdx) => (
                          <td key={cellIdx} className="p-4">
                            <Skeleton className="h-4 w-full" />
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
}
