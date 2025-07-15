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

const CeilingTypes = () => {
  const ceilingTypes = [
    {
      id: 1,
      name: "Gypsum False Ceiling",
      description:
        "Versatile and cost-effective ceiling solution perfect for residential and commercial spaces",
      image: "bg-gradient-to-br from-slate-100 to-slate-200",
      price: "From NPR 450/sq.ft",
      rating: 4.8,
      features: [
        "Fire Resistant",
        "Easy Installation",
        "Smooth Finish",
        "Paint Ready",
      ],
      applications: ["Living Rooms", "Bedrooms", "Offices", "Restaurants"],
      popular: true,
    },
    {
      id: 2,
      name: "PVC False Ceiling",
      description:
        "Waterproof and maintenance-free ceiling ideal for humid environments",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      price: "From NPR 320/sq.ft",
      rating: 4.6,
      features: [
        "100% Waterproof",
        "Termite Proof",
        "Easy Clean",
        "Lightweight",
      ],
      applications: ["Bathrooms", "Kitchens", "Balconies", "Outdoor Areas"],
    },
    {
      id: 3,
      name: "Metal False Ceiling",
      description:
        "Modern aluminum ceiling systems for contemporary architectural designs",
      image: "bg-gradient-to-br from-gray-100 to-gray-300",
      price: "From NPR 580/sq.ft",
      rating: 4.7,
      features: ["Durable", "Modern Look", "Fire Safe", "Recyclable"],
      applications: ["Offices", "Malls", "Hospitals", "Hotels"],
    },
    {
      id: 4,
      name: "Wooden False Ceiling",
      description:
        "Premium wooden ceiling for luxury interiors and traditional designs",
      image: "bg-gradient-to-br from-amber-100 to-amber-200",
      price: "From NPR 850/sq.ft",
      rating: 4.9,
      features: [
        "Natural Beauty",
        "Insulation",
        "Acoustic Properties",
        "Long Lasting",
      ],
      applications: ["Luxury Homes", "Hotels", "Restaurants", "Clubs"],
      premium: true,
    },
    {
      id: 5,
      name: "Acoustic False Ceiling",
      description:
        "Sound-absorbing ceiling tiles for noise control and better acoustics",
      image: "bg-gradient-to-br from-green-100 to-green-200",
      price: "From NPR 680/sq.ft",
      rating: 4.5,
      features: [
        "Sound Absorption",
        "Noise Reduction",
        "Professional Grade",
        "Easy Access",
      ],
      applications: ["Studios", "Auditoriums", "Conference Rooms", "Theaters"],
    },
    {
      id: 6,
      name: "Designer False Ceiling",
      description:
        "Custom artistic ceiling designs with integrated lighting solutions",
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
      price: "From NPR 1200/sq.ft",
      rating: 4.8,
      features: [
        "Custom Design",
        "LED Integration",
        "Artistic Patterns",
        "Premium Finish",
      ],
      applications: [
        "Luxury Homes",
        "Showrooms",
        "Boutiques",
        "Premium Offices",
      ],
      premium: true,
    },
  ];

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
                    className={`h-48 rounded-lg ${ceiling.image} mb-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    {ceiling.popular && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                        Popular
                      </Badge>
                    )}
                    {ceiling.premium && (
                      <Badge className="absolute top-3 right-3 bg-gold-500 hover:bg-gold-600">
                        Premium
                      </Badge>
                    )}
                    <span className="text-gray-600 font-medium text-lg">
                      {ceiling.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{ceiling.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {ceiling.rating}
                      </span>
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
                        {ceiling.features.map((feature, index) => (
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
                        {ceiling.applications.map((app, index) => (
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
                    <span className="text-lg font-bold text-blue-600">
                      {ceiling.price}
                    </span>
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
