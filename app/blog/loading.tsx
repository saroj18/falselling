"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" /> {/* Title */}
            <Skeleton className="h-6 w-80 mx-auto mb-8" /> {/* Subtitle */}
            <div className="max-w-md mx-auto">
              <Skeleton className="h-10 w-full" /> {/* Search Bar */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 w-fit">
            <Skeleton className="h-4 w-28" />
          </Badge>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <Skeleton className="w-full h-64 lg:h-full" /> {/* Image */}
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <Skeleton className="h-6 w-48 mb-2" /> {/* Title */}
                  <Skeleton className="h-4 w-64" /> {/* Excerpt */}
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                  <Skeleton className="h-4 w-32" /> {/* Author/Date */}
                  <Skeleton className="h-10 w-36" /> {/* Button */}
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full h-48" /> {/* Image */}
                <CardHeader className="space-y-2">
                  <Skeleton className="h-5 w-40" /> {/* Title */}
                  <Skeleton className="h-4 w-56" /> {/* Excerpt */}
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-32 mb-3" /> {/* Meta */}
                  <Skeleton className="h-8 w-full" /> {/* Button */}
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4" /> {/* Heading */}
          <Skeleton className="h-5 w-80 mx-auto mb-8" /> {/* Subtitle */}
          <div className="max-w-md mx-auto flex gap-2">
            <Skeleton className="h-10 w-full" /> {/* Input */}
            <Skeleton className="h-10 w-28" /> {/* Button */}
          </div>
        </div>
      </section>
    </div>
  );
}
