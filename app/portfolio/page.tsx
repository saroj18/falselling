
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, MapPin, Calendar, Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex - Kathmandu",
      category: "Commercial",
      location: "Kathmandu",
      date: "2024",
      description:
        "Complete false ceiling installation with acoustic panels and LED integration",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      rating: 5,
      area: "2500 sq ft",
    },
    {
      id: 2,
      title: "Luxury Villa - Pokhara",
      category: "Residential",
      location: "Pokhara",
      date: "2024",
      description: "Wooden ceiling design with cove lighting for premium home",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      rating: 5,
      area: "1800 sq ft",
    },
    {
      id: 3,
      title: "Restaurant Chain - Lalitpur",
      category: "Commercial",
      location: "Lalitpur",
      date: "2023",
      description:
        "Acoustic ceiling with decorative PVC panels and ambient lighting",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      rating: 5,
      area: "3200 sq ft",
    },
    {
      id: 4,
      title: "Boutique Hotel - Bhaktapur",
      category: "Hospitality",
      location: "Bhaktapur",
      date: "2023",
      description:
        "Traditional design with modern gypsum ceiling and integrated lighting",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      rating: 5,
      area: "4500 sq ft",
    },
    {
      id: 5,
      title: "Medical Center - Chitwan",
      category: "Healthcare",
      location: "Chitwan",
      date: "2023",
      description: "Hygienic metal ceiling with antibacterial coating",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      rating: 5,
      area: "1200 sq ft",
    },
    {
      id: 6,
      title: "Shopping Mall - Biratnagar",
      category: "Retail",
      location: "Biratnagar",
      date: "2022",
      description:
        "Large scale installation with fireproof materials and emergency lighting",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      rating: 5,
      area: "8000 sq ft",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      project: "Office Complex",
      rating: 5,
      comment:
        "Outstanding work! The team was professional and delivered exactly what we wanted.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Priya Thapa",
      project: "Luxury Villa",
      rating: 5,
      comment:
        "Beautiful ceiling design that transformed our home completely. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Kumar Patel",
      project: "Restaurant",
      rating: 5,
      comment:
        "The acoustic ceiling solution improved our restaurant's ambiance significantly.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const categories = [
    "All",
    "Commercial",
    "Residential",
    "Hospitality",
    "Healthcare",
    "Retail",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our completed projects across Nepal. From modern offices to
            luxury homes, we've transformed spaces with innovative ceiling
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Badge variant="secondary">500+ Projects</Badge>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="secondary">50+ Cities</Badge>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="secondary">100% Satisfaction</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-6 w-full max-w-3xl mx-auto mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(
                      (project) =>
                        category === "All" || project.category === category
                    )
                    .map((project) => (
                      <Card
                        key={project.id}
                        className="group hover:shadow-lg transition-all duration-300"
                      >
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 text-black hover:bg-white">
                              {project.category}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-full w-8 h-8 p-0"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {project.date}
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">
                            {project.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              {[...Array(project.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <Badge variant="outline">{project.area}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who chose FalseCeilingNepal for
            their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
