"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
      </section>

      {/* Filters Skeleton */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Skeleton className="h-10 w-full sm:w-64" />
              <Skeleton className="h-10 w-full sm:w-48" />
            </div>
            <Skeleton className="h-5 w-32" />
          </div>
        </div>
      </section>

      {/* Products Grid Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border bg-white shadow-sm p-4 space-y-4"
                >
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
