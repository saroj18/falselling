"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { IProduct } from "@/types/product";
import Image from "next/image";

// Utility to highlight search terms
function highlight(text: string, term: string) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-yellow-200 text-black rounded px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// Debounce hook
function useDebouncedValue<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

const Products = ({ products }: { products: IProduct[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const debouncedSearch = useDebouncedValue(searchTerm, 300);

  const categories = [
    { value: "all", label: "All Products" },
    { value: "ceiling-materials", label: "Ceiling Materials" },
    { value: "lighting", label: "Integrated Lighting" },
    { value: "accessories", label: "Accessories" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const search = debouncedSearch.trim().toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(search)));
      const matchesCategory =
        selectedCategory === "all" || product.category?.name === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedSearch, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our comprehensive range of premium ceiling materials and
              lighting solutions, carefully selected for quality, durability,
              and style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              {/* <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> */}
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredProducts.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div
                      className={`h-48 rounded-lg ${product.images[0]} mb-4 flex items-center justify-center relative overflow-hidden`}
                    >
                      <Image
                        width={700}
                        height={200}
                        alt="product images"
                        src={product.images[0]}
                        className="rounded-lg mx-auto my-2"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-green-600">
                          {product.discount}% off
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">
                        {highlight(product.name.slice(0, 20), debouncedSearch)}...
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {highlight(product.description.slice(0, 60), debouncedSearch)}...
                      </CardDescription>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.tags &&
                        product.tags.slice(0, 2).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {highlight(feature, debouncedSearch)}
                          </Badge>
                        ))}
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-blue-600">
                          {product.price -
                            (product.price * product.discount) / 100}
                          /sq.ft
                        </span>
                        {product.discount > 0 && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.price +
                              (product.price * product.discount) / 100}
                            /sq.ft
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
