"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { ICategory } from "@/types/category";
import Image from "next/image";

const ProductShowcase = ({ products }: { products: ICategory[] }) => {

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of ceiling materials and integrated
            lighting solutions, carefully selected for quality and performance.
          </p>
        </div>

        {products.slice(4, 6).map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              {category.name}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products?.slice(0, 6)?.map((product, index) => (
                <Link href={`/products/${product.id}`} key={index}>
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
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {product.name.slice(0,20)}...
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {product.description.slice(0, 40)}...
                        </CardDescription>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {/* <Star className="h-4 w-4 fill-primary text-primary" /> */}
                          <span className="text-sm font-medium">
                            {/* {product.rating} */}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-primary">
                          Rs. {product.price} sq/ft
                        </span>
                      </div>

                      <Button className="w-full group" variant="outline">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
