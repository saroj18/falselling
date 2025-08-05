"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Back Button */}
        <Skeleton className="h-6 w-32" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-96 w-full rounded-lg" />
            <div className="grid grid-cols-3 gap-4">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="h-24 w-full rounded-lg" />
                ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-16" />
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="h-5 w-20" />
                ))}
            </div>

            {/* Pricing */}
            <Skeleton className="h-12 w-full rounded-lg" />

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} className="h-5 w-32" />
                ))}
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <Skeleton key={idx} className="h-8 w-24" />
              ))}
          </div>
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>

        {/* Contact Section */}
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>
    </div>
  );
}
