import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, CheckCircle } from "lucide-react";
import { ICategory } from "@/types/category";
import Image from "next/image";

const CeilingTypes = ({ ceilingTypes }: { ceilingTypes: ICategory[] }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ceiling <span className="text-blue-600">Types</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of false ceiling solutions. From
            budget-friendly options to premium designer ceilings, we have the
            perfect solution for every space.
          </p>
        </div>
      </section>

      {/* Ceiling Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceilingTypes.map((ceiling) => (
              <Card
                key={ceiling.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* {ceiling.popular && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                        Popular
                      </Badge>
                    )}
                    {ceiling.premium && (
                      <Badge className="absolute top-3 right-3 bg-gold-500 hover:bg-gold-600">
                        Premium
                      </Badge>
                    )} */}
                    <Image
                      width={400}
                      height={200}
                      alt="product images"
                      src={ceiling.images[0]||'https://via.placeholder.com/300'}
                      className="rounded-lg mx-auto my-2"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{ceiling.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium"></span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600">
                    {ceiling.description}
                  </CardDescription>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {ceiling.features &&
                          ceiling.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-1"
                            >
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span className="text-xs text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {ceiling.tags &&
                          ceiling.tags.map((app, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {app}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-lg font-bold text-blue-600">
                        Avg_Price:
                        <span className="text-black mx-2">
                          Rs {ceiling.avg_price}
                        </span>
                      </span>
                      <p className="text-sm text-green-500">
                        (this is not a acurate price)
                      </p>
                    </div>
                    <Button className="group" size="sm">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Ceiling?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Our experts are here to help you select the perfect ceiling solution
            for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a href="https://wa.me/9779851187267">WhatsApp Consultation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <a href="tel:9851187267">Call: 9851187267</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeilingTypes;
