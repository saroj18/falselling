"use client";

import { useState } from "react";
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

const Products = ({ products }: { products: IProduct[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Products" },
    { value: "ceiling-materials", label: "Ceiling Materials" },
    { value: "lighting", label: "Integrated Lighting" },
    { value: "accessories", label: "Accessories" },
  ];

  //   const products = [
  //     {
  //       id: 1,
  //       name: "Premium Gypsum Boards",
  //       category: "ceiling-materials",
  //       description:
  //         "High-quality gypsum boards perfect for residential and commercial false ceiling installations",
  //       price: "From NPR 450/sq.ft",
  //       originalPrice: "NPR 520/sq.ft",
  //       rating: 4.8,
  //       reviews: 124,
  //       image: "bg-gradient-to-br from-slate-100 to-slate-200",
  //       features: [
  //         "Fire Resistant",
  //         "Easy Installation",
  //         "Smooth Finish",
  //         "Durable",
  //       ],
  //       popular: true,
  //       discount: "13% OFF",
  //     },
  //     {
  //       id: 2,
  //       name: "Waterproof PVC Panels",
  //       category: "ceiling-materials",
  //       description:
  //         "Waterproof and easy-to-maintain PVC panels ideal for bathrooms and kitchens",
  //       price: "From NPR 320/sq.ft",
  //       originalPrice: "NPR 380/sq.ft",
  //       rating: 4.6,
  //       reviews: 89,
  //       image: "bg-gradient-to-br from-blue-100 to-blue-200",
  //       features: [
  //         "100% Waterproof",
  //         "Anti-Bacterial",
  //         "Easy Clean",
  //         "Lightweight",
  //       ],
  //       popular: false,
  //       discount: "16% OFF",
  //     },
  //     {
  //       id: 3,
  //       name: "Aluminum Metal Ceilings",
  //       category: "ceiling-materials",
  //       description:
  //         "Durable aluminum ceiling systems perfect for modern commercial and residential spaces",
  //       price: "From NPR 580/sq.ft",
  //       originalPrice: "",
  //       rating: 4.7,
  //       reviews: 67,
  //       image: "bg-gradient-to-br from-gray-100 to-gray-300",
  //       features: [
  //         "Corrosion Resistant",
  //         "Modern Design",
  //         "Long Lasting",
  //         "Recyclable",
  //       ],
  //       popular: false,
  //       discount: "",
  //     },
  //     {
  //       id: 4,
  //       name: "LED Panel Lights (Integrated)",
  //       category: "lighting",
  //       description:
  //         "Energy-efficient LED panel lights designed to integrate seamlessly with false ceilings",
  //       price: "From NPR 2,500/piece",
  //       originalPrice: "NPR 3,200/piece",
  //       rating: 4.9,
  //       reviews: 156,
  //       image: "bg-gradient-to-br from-yellow-100 to-yellow-200",
  //       features: ["Energy Efficient", "Long Life", "Uniform Light", "Dimmable"],
  //       popular: true,
  //       discount: "22% OFF",
  //     },
  //     {
  //       id: 5,
  //       name: "Cove Lighting System",
  //       category: "lighting",
  //       description:
  //         "Elegant indirect lighting solutions for creating ambient illumination in any space",
  //       price: "From NPR 1,800/meter",
  //       originalPrice: "",
  //       rating: 4.7,
  //       reviews: 92,
  //       image: "bg-gradient-to-br from-amber-100 to-amber-200",
  //       features: [
  //         "Indirect Lighting",
  //         "Customizable",
  //         "Energy Saving",
  //         "Easy Install",
  //       ],
  //       popular: false,
  //       discount: "",
  //     },
  //     {
  //       id: 6,
  //       name: "Acoustic Ceiling Panels",
  //       category: "ceiling-materials",
  //       description:
  //         "Professional-grade acoustic panels for superior sound control in offices and studios",
  //       price: "From NPR 650/sq.ft",
  //       originalPrice: "NPR 780/sq.ft",
  //       rating: 4.8,
  //       reviews: 73,
  //       image: "bg-gradient-to-br from-green-100 to-green-200",
  //       features: [
  //         "Sound Absorption",
  //         "Professional Grade",
  //         "Fire Rated",
  //         "Easy Maintenance",
  //       ],
  //       popular: false,
  //       discount: "17% OFF",
  //     },
  //     {
  //       id: 7,
  //       name: "Wooden Ceiling Panels",
  //       category: "ceiling-materials",
  //       description:
  //         "Premium wooden ceiling panels for a natural, warm aesthetic in residential spaces",
  //       price: "From NPR 890/sq.ft",
  //       originalPrice: "",
  //       rating: 4.9,
  //       reviews: 45,
  //       image: "bg-gradient-to-br from-orange-100 to-orange-200",
  //       features: [
  //         "Natural Wood",
  //         "Eco-Friendly",
  //         "Unique Grain",
  //         "Premium Finish",
  //       ],
  //       popular: false,
  //       discount: "",
  //     },
  //     {
  //       id: 8,
  //       name: "Ceiling Grid System",
  //       category: "accessories",
  //       description:
  //         "Complete grid system for suspended ceiling installations with all necessary components",
  //       price: "From NPR 180/sq.ft",
  //       originalPrice: "NPR 220/sq.ft",
  //       rating: 4.5,
  //       reviews: 112,
  //       image: "bg-gradient-to-br from-purple-100 to-purple-200",
  //       features: [
  //         "Complete System",
  //         "Easy Assembly",
  //         "Adjustable",
  //         "Galvanized Steel",
  //       ],
  //       popular: false,
  //       discount: "18% OFF",
  //     },
  //   ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Select
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
              </Select>
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
                      {/* {product.popular && (
                        <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                          Popular
                        </Badge>
                      )} */}
                        <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                          {product.discount}
                        </Badge>
                      
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {product.description}
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
                            {feature}
                          </Badge>
                        ))}
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {/* <span className="font-medium">{product.rating}</span>
                        <span className="text-gray-500">
                          ({product.reviews})
                        </span> */}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-blue-600">
                          {product.price}
                        </span>
                        {product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.price}
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
