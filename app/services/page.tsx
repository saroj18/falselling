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

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: "False Ceiling Design & Installation",
      shortDesc: "Complete design and installation services",
      description:
        "Transform your space with our comprehensive false ceiling design and installation services. We provide end-to-end solutions from initial consultation to final finishing, ensuring your vision comes to life with precision and quality.",
      features: [
        "3D Design Mockups & Visualization",
        "Professional Installation Team",
        "Premium Quality Materials",
        "1 Year Comprehensive Warranty",
        "Post-Installation Support",
        "Customized Lighting Integration",
      ],
      price: "From NPR 400/sq.ft",
      duration: "3-7 days",
      popular: false,
      category: "Design & Installation",
    },
    {
      id: 2,
      icon: Home,
      title: "Pop Ceiling Design",
      shortDesc: "Elegant POP ceiling designs",
      description:
        "Create stunning decorative elements with our specialized POP (Plaster of Paris) ceiling designs. Perfect for adding character, elegance, and architectural interest to residential and commercial spaces.",
      features: [
        "Custom Pattern Design",
        "Decorative Elements & Moldings",
        "Premium Paint Finish",
        "Expert Craftsmanship",
        "Design Consultation",
        "Traditional & Modern Styles",
      ],
      price: "From NPR 350/sq.ft",
      duration: "4-8 days",
      popular: true,
      category: "Decorative Ceilings",
    },
    {
      id: 3,
      icon: Building,
      title: "Gypsum Ceiling Services",
      shortDesc: "Professional gypsum board installation",
      description:
        "Experience the benefits of modern gypsum board ceiling systems. Our professional installation ensures durability, fire resistance, and a perfectly smooth finish that serves as an excellent base for any interior design.",
      features: [
        "Fire Resistant Materials",
        "Superior Sound Insulation",
        "Easy Maintenance & Repair",
        "Perfectly Smooth Finish",
        "Moisture Resistant Options",
        "Quick Installation Process",
      ],
      price: "From NPR 450/sq.ft",
      duration: "2-5 days",
      popular: false,
      category: "Standard Ceilings",
    },
    {
      id: 4,
      icon: Shield,
      title: "Acoustic Ceiling Solutions",
      shortDesc: "Professional sound control systems",
      description:
        "Enhance your space's acoustics with our specialized acoustic ceiling solutions. Perfect for offices, conference rooms, recording studios, restaurants, and any space where sound quality matters.",
      features: [
        "Superior Noise Reduction",
        "Enhanced Sound Quality",
        "Professional Grade Materials",
        "Customized Solutions",
        "Aesthetic Appeal",
        "Easy Maintenance",
      ],
      price: "From NPR 650/sq.ft",
      duration: "3-6 days",
      popular: false,
      category: "Specialized Solutions",
    },
    {
      id: 5,
      icon: Wrench,
      title: "Waterproof & Fireproof Ceilings",
      shortDesc: "Safety-first ceiling solutions",
      description:
        "Ensure maximum safety and durability with our waterproof and fireproof ceiling installations. Specially designed for high-risk areas like kitchens, bathrooms, and commercial kitchens.",
      features: [
        "100% Water Resistant",
        "Fire Retardant Materials",
        "Mold & Mildew Resistant",
        "Long-lasting Durability",
        "Easy to Clean",
        "Safety Certified",
      ],
      price: "From NPR 520/sq.ft",
      duration: "3-7 days",
      popular: false,
      category: "Safety Solutions",
    },
    {
      id: 6,
      icon: Users,
      title: "Site Visit & Consultation",
      shortDesc: "Expert consultation and assessment",
      description:
        "Get professional advice and detailed project planning with our comprehensive site visit and consultation service. Our experts assess your space and provide detailed recommendations and quotations.",
      features: [
        "Free Initial Site Visit",
        "Expert Professional Advice",
        "Detailed Cost Estimation",
        "Project Timeline Planning",
        "Material Recommendations",
        "Design Suggestions",
      ],
      price: "Free Consultation",
      duration: "1-2 hours",
      popular: true,
      category: "Consultation",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Free site visit and requirement analysis",
    },
    {
      step: "02",
      title: "Design",
      description: "3D mockup and material selection",
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional installation by experts",
    },
    {
      step: "04",
      title: "Finishing",
      description: "Quality check and final touches",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                  )}
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
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {service.title}
                          </CardTitle>
                          <Badge variant="outline" className="mb-3">
                            {service.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">
                            {service.price}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
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
                    <Button
                      className="flex-1 group"
                      variant={service.popular ? "default" : "outline"}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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
                variant="outline"
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
