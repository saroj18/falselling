"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" /> {/* Title */}
          <Skeleton className="h-6 w-96 mx-auto" /> {/* Subtitle */}
        </div>
      </section>

      {/* Filters Section Skeleton */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <Skeleton className="h-10 w-full sm:w-64" /> {/* Search */}
            <Skeleton className="h-10 w-48" /> {/* Category */}
          </div>
          <Skeleton className="h-4 w-32" /> {/* Count */}
        </div>
      </section>

      {/* Products Grid Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <Card key={idx} className="group">
                <CardHeader className="pb-4">
                  <Skeleton className="h-48 w-full rounded-lg" /> {/* Image */}
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-6 w-40" /> {/* Product Name */}
                  <Skeleton className="h-4 w-full" /> {/* Description */}
                  <Skeleton className="h-4 w-24" /> {/* Price */}
                  <Skeleton className="h-10 w-full" /> {/* Button */}
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
