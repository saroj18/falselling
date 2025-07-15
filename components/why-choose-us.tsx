"use client"

import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Premium materials and expert craftsmanship with lifetime warranty on all installations.",
    },
    {
      icon: Award,
      title: "Expert Team",
      description:
        "Certified professionals with 10+ years of experience in false ceiling installation.",
    },
    {
      icon: Users,
      title: "500+ Happy Customers",
      description:
        "Trusted by homeowners and businesses across Nepal with 5-star customer satisfaction.",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description:
        "Fast and efficient installation process with minimal disruption to your daily routine.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent border border-border text-primary text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nepal's Most <span className="text-primary">Trusted</span> Ceiling
            Specialists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We transform spaces with precision, quality, and care. Here's why
            thousands of customers choose us for their ceiling projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Customer Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 md:mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                What Makes Us Different?
              </h3>
              <div className="space-y-4">
                {[
                  "Free on-site consultation and design",
                  "Premium quality materials at competitive prices",
                  "Professional installation with clean-up service",
                  "Lifetime warranty on workmanship",
                  "Quick turnaround time (2-3 days)",
                  "24/7 customer support",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-4">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                Average Customer Rating
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Exceptional quality and service. They transformed our home
                beautifully!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
