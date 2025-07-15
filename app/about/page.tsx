import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  Star,
  Phone,
  MessageCircle,
  Shield,
  Clock,
  ThumbsUp,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Customers" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We use only premium materials and follow strict quality control measures to ensure lasting results.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision.",
    },
    {
      icon: ThumbsUp,
      title: "Expert Craftsmanship",
      description:
        "Our skilled technicians bring years of experience and attention to detail to every project.",
    },
    {
      icon: Target,
      title: "Timely Delivery",
      description:
        "We respect your time and complete projects within the agreed timeline without compromising quality.",
    },
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Lead Designer",
      experience: "8 years",
      specialty: "Architectural Design",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      name: "Prakash Thapa",
      role: "Installation Manager",
      experience: "6 years",
      specialty: "Project Management",
      image: "bg-gradient-to-br from-green-100 to-green-200",
    },
    {
      name: "Suresh Gurung",
      role: "Senior Technician",
      experience: "7 years",
      specialty: "Gypsum & POP Work",
      image: "bg-gradient-to-br from-purple-100 to-purple-200",
    },
    {
      name: "Anita Rai",
      role: "Interior Consultant",
      experience: "4 years",
      specialty: "Design Consultation",
      image: "bg-gradient-to-br from-pink-100 to-pink-200",
    },
  ];

  const achievements = [
    "Certified by Nepal Bureau of Standards",
    "Member of Nepal Builders Association",
    "ISO 9001:2015 Quality Management",
    "Green Building Council Member",
    "Best Contractor Award 2023",
    "Customer Choice Award 2022",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About FalseCeilingNepal
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Leading provider of premium false ceiling solutions in Nepal,
              transforming spaces with innovative designs and expert
              craftsmanship since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019 with a vision to revolutionize ceiling
                  solutions in Nepal, FalseCeilingNepal has grown from a small
                  team of passionate craftsmen to the leading provider of
                  premium false ceiling services across the country.
                </p>
                <p>
                  Our journey began when our founder, Rajesh Sharma, recognized
                  the lack of quality ceiling solutions in the Nepali market.
                  With his background in architecture and construction, he
                  assembled a team of skilled professionals committed to
                  delivering excellence.
                </p>
                <p>
                  Today, we pride ourselves on having completed over 500
                  projects, from residential homes to commercial complexes, each
                  one reflecting our commitment to quality, innovation, and
                  customer satisfaction.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="https://wa.me/9779851187267">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Started Today
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:9851187267">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2019</span>
                  </div>
                  <h3 className="font-semibold mb-2">Founded</h3>
                  <p className="text-sm text-gray-600">Started with a vision</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow mt-8">
                <CardContent className="p-6 text-center">
                  <div className="h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">100+</span>
                  </div>
                  <h3 className="font-semibold mb-2">First Year</h3>
                  <p className="text-sm text-gray-600">Projects completed</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow -mt-4">
                <CardContent className="p-6 text-center">
                  <div className="h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2022</span>
                  </div>
                  <h3 className="font-semibold mb-2">Expansion</h3>
                  <p className="text-sm text-gray-600">Nationwide services</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow mt-4">
                <CardContent className="p-6 text-center">
                  <div className="h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">Today</span>
                  </div>
                  <h3 className="font-semibold mb-2">Industry Leader</h3>
                  <p className="text-sm text-gray-600">500+ happy customers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our
              commitment to delivering exceptional ceiling solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <value.icon className="h-12 w-12 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of experience and
              passion for excellence to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div
                    className={`h-32 w-32 rounded-full ${member.image} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Experience: {member.experience}</p>
                    <p>Specialty: {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and certifications that demonstrate our commitment to
              excellence and professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join hundreds of satisfied customers who have transformed their
              spaces with our expert ceiling solutions. Let's bring your vision
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/9779851187267">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Your Project
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/portfolio">View Our Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
