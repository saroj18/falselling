"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Skeleton className="h-8 w-32" /> {/* Back to Blog Button */}
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <Skeleton className="h-5 w-24 mb-4" />

          {/* Title */}
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-10 w-1/2 mb-6" />

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-28" />
              ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>

          {/* Featured Image */}
          <Skeleton className="w-full h-64 md:h-96 mb-8" />

          {/* Article Content */}
          <div className="space-y-4 mb-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-border">
            <Skeleton className="h-6 w-20 mb-4" />
            <div className="flex flex-wrap gap-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-5 w-16" />
                ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-40 mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Skeleton className="w-full h-48" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-5 w-24" /> {/* Category */}
                    <Skeleton className="h-6 w-3/4" /> {/* Title */}
                    <Skeleton className="h-4 w-20" /> {/* Read time */}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
