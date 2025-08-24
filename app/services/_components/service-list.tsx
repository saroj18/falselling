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
  Clock,
  Award,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { IService } from "@/types/service";

const Services = ({ services }: { services: IService[] }) => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation & Site Visit",
      description:
        "Call or WhatsApp +977 9851187267. Share room size, purpose, and design idea. Our team conducts site measurement and inspection.",
    },
    {
      step: "02",
      title: "Design & Quotation",
      description:
        "We provide measurements, BOQ, ceiling/acoustic design with lighting, and a transparent quotation covering material and labor costs.",
    },
    {
      step: "03",
      title: "Material Selection",
      description:
        "Choose from gypsum, grid, PVC, wooden ceilings, Rockwool, Glasswool, aluminum foil insulation, acoustic panels, and decorative finishes.",
    },
    {
      step: "04",
      title: "Installation by Experts",
      description:
        "Our technicians install framework, ceilings, insulation, acoustic treatment, and lighting while maintaining clean and safe sites.",
    },
    {
      step: "05",
      title: "Quality Check & Handover",
      description:
        "We inspect joints, sealing, airtight insulation, and ceiling alignment before handing over with full warranty assurance.",
    },
    {
      step: "06",
      title: "After-Sales Support",
      description:
        "We provide responsive service support. Warranty covers both materials and workmanship for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional ceiling solutions from design to installation. We
              bring your vision to life with expert craftsmanship and premium
              materials.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final installation, we follow a
              systematic approach to ensure quality and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                 
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of ceiling services, each
              designed to meet specific needs and deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600 hover:bg-blue-700 z-10">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      {/* <service.icon className="h-8 w-8 text-blue-600" /> */}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {service.title}
                          </CardTitle>
                          <Badge variant="outline" className="mb-3">
                            {service?.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">
                            {service.price}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {service?.duration}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Link href={"/contact"}>
                      <Button
                        className="flex-1 group"
                        variant={service.popular ? "default" : "outline"}
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:9851187267">
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free consultation and quote for your ceiling project. Our
              experts are ready to help you create the perfect ceiling solution
              for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/9779851187267"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Quote on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="default"
                className="text-white border-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:9851187267" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9851187267
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
