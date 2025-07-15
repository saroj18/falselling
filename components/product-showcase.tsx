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

const ProductShowcase = () => {
  const products = [
    {
      category: "Ceiling Materials",
      items: [
        {
          id: 1,
          name: "Gypsum Boards",
          description:
            "High-quality gypsum boards perfect for residential and commercial spaces",
          price: "From NPR 450/sq.ft",
          rating: 4.8,
          image: "bg-gradient-to-br from-muted to-secondary/10",
          popular: true,
        },
        {
          id: 2,
          name: "PVC Panels",
          description:
            "Waterproof and easy-to-maintain panels ideal for bathrooms and kitchens",
          price: "From NPR 320/sq.ft",
          rating: 4.6,
          image: "bg-gradient-to-br from-accent to-primary/10",
        },
        {
          id: 3,
          name: "Metal Ceilings",
          description:
            "Durable aluminum and steel ceiling systems for modern spaces",
          price: "From NPR 580/sq.ft",
          rating: 4.7,
          image: "bg-gradient-to-br from-muted to-secondary/20",
        },
      ],
    },
    {
      category: "Integrated Ceiling Lights",
      items: [
        {
          id: 4,
          name: "LED Panels",
          description:
            "Energy-efficient LED panel lights integrated seamlessly into ceilings",
          price: "From NPR 2,500/piece",
          rating: 4.9,
          image: "bg-gradient-to-br from-primary/20 to-accent",
          popular: true,
        },
        {
          id: 5,
          name: "Cove Lighting",
          description:
            "Elegant indirect lighting solutions for ambient illumination",
          price: "From NPR 1,800/meter",
          rating: 4.7,
          image: "bg-gradient-to-br from-accent to-secondary/10",
        },
        {
          id: 6,
          name: "Hanging Lights",
          description:
            "Stylish pendant and chandelier installations for focal points",
          price: "From NPR 3,200/piece",
          rating: 4.8,
          image: "bg-gradient-to-br from-muted to-primary/10",
        },
      ],
    },
  ];

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

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              {category.category}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, index) => (
                <Link href={`/products/${product.id}`} key={index}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardHeader className="pb-4">
                      <div
                        className={`h-48 rounded-lg ${product.image} mb-4 flex items-center justify-center relative overflow-hidden`}
                      >
                        {product.popular && (
                          <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90">
                            Popular
                          </Badge>
                        )}
                        <span className="text-foreground font-medium text-lg">
                          {product.name}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {product.description}
                        </CardDescription>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm font-medium">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-primary">
                          {product.price}
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
