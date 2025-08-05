"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  ArrowLeft,
  Phone,
  MessageCircle,
  Shield,
  Truck,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { IProduct } from "@/types/product";
import Image from "next/image";

const ProductDetail = ({ product }: { product: IProduct }) => {
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>← Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div
              className={`h-96 rounded-lg ${product.images[0]} flex items-center justify-center relative overflow-hidden`}
            >
              {/* {product.popular && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                  Popular
                </Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                  {product.discount}
                </Badge>
              )} */}
              <Image
                width={700}
                height={200}
                alt="product images"
                src={product.images[0]}
                className="rounded-lg mx-auto my-2"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image: string, index: number) => (
                <div
                  key={index}
                  className={`h-24 rounded-lg ${image} cursor-pointer hover:opacity-80 transition-opacity`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                {/* <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span> */}
              </div>
              {product.stock && (
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  In Stock
                </Badge>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags &&
                  product.tags.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl font-bold text-blue-600">
                  {product.price}
                </span>
                {product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.price}
                  </span>
                )}
              </div>
              {/* <p className="text-sm text-gray-600 mb-4">
                Installation available • Delivery: {product.estimatedDelivery}
              </p> */}

              <div className="grid grid-cols-2 gap-3">
                <Button className="w-full">Get Quote</Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://wa.me/9779851187267"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-blue-600" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-purple-600" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700">
                          {key}:
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul> */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ideal Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="grid md:grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="h-2 w-2 bg-green-600 rounded-full" />
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Installation & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Professional Installation Available
                    </h4>
                    <p className="text-blue-800">
                      Our certified technicians provide complete installation
                      services with warranty coverage.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Free Site Visit
                    </h4>
                    <p className="text-green-800">
                      Schedule a free consultation to assess your space and get
                      accurate measurements.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">
                      24/7 Support
                    </h4>
                    <p className="text-purple-800">
                      Post-installation support and maintenance guidance
                      available round the clock.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-blue-100 mb-6">
                Our experts are here to help you select the perfect ceiling
                solution for your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild>
                  <a
                    href="tel:9851187267"
                    className="flex items-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call: 9851187267</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a
                    href="https://wa.me/9779851187267"
                    className="flex items-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Chat</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
