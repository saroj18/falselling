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
import {
  Palette,
  Wrench,
  Home,
  Building,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "False Ceiling Design & Installation",
      description:
        "Complete design and installation services for residential and commercial spaces",
      features: [
        "3D Design Mockups",
        "Professional Installation",
        "Quality Materials",
        "1 Year Warranty",
      ],
      price: "From NPR 400/sq.ft",
      popular: false,
    },
    {
      icon: Home,
      title: "Pop Ceiling Design",
      description:
        "Elegant POP ceiling designs that add character and style to your interiors",
      features: [
        "Custom Patterns",
        "Decorative Elements",
        "Paint Finish",
        "Expert Craftsmanship",
      ],
      price: "From NPR 350/sq.ft",
      popular: true,
    },
    {
      icon: Building,
      title: "Gypsum Ceiling Services",
      description:
        "Professional gypsum board ceiling installation with modern techniques",
      features: [
        "Fire Resistant",
        "Sound Insulation",
        "Easy Maintenance",
        "Smooth Finish",
      ],
      price: "From NPR 450/sq.ft",
      popular: false,
    },
    {
      icon: Shield,
      title: "Acoustic Ceiling Setup",
      description:
        "Specialized acoustic solutions for offices, studios, and commercial spaces",
      features: [
        "Noise Reduction",
        "Sound Quality",
        "Professional Grade",
        "Custom Solutions",
      ],
      price: "From NPR 650/sq.ft",
      popular: false,
    },
    {
      icon: Wrench,
      title: "Waterproof & Fireproof Ceilings",
      description:
        "Safety-first ceiling solutions for kitchens, bathrooms, and high-risk areas",
      features: [
        "Water Resistant",
        "Fire Retardant",
        "Mold Resistant",
        "Long Lasting",
      ],
      price: "From NPR 520/sq.ft",
      popular: false,
    },
    {
      icon: Users,
      title: "Site Visit & Consultation",
      description:
        "Professional consultation and site assessment for your ceiling project",
      features: [
        "Free Site Visit",
        "Expert Advice",
        "Detailed Quote",
        "Project Planning",
      ],
      price: "Free Consultation",
      popular: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From design consultation to final installation, we provide
            comprehensive ceiling solutions tailored to your specific needs and
            budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 z-10">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>

                  <Button
                    className="w-full group"
                    variant={service.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
