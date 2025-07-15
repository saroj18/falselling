
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Handshake,
  TrendingUp,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Partners = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "High Profit Margins",
      description:
        "Enjoy competitive pricing with profit margins up to 25-35% on all products and services.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Training & Support",
      description:
        "Comprehensive training programs and ongoing technical support for your team.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Brand Recognition",
      description:
        "Leverage our established brand reputation and marketing materials.",
    },
    {
      icon: <Building className="h-8 w-8 text-orange-600" />,
      title: "Territory Protection",
      description:
        "Exclusive territory rights to minimize competition and maximize growth.",
    },
  ];

  const requirements = [
    "Minimum 2 years experience in construction/interior industry",
    "Financial capability to maintain inventory worth NPR 5-10 lakhs",
    "Dedicated showroom or display space (minimum 200 sq ft)",
    "Technical team for installation services",
    "Valid business registration and tax clearance",
    "Commitment to brand standards and customer service",
  ];

  const currentPartners = [
    {
      name: "Premium Interiors Pvt. Ltd.",
      location: "Kathmandu",
      since: "2020",
      specialty: "Commercial Projects",
      contact: "+977-1-4567890",
    },
    {
      name: "Modern Ceiling Solutions",
      location: "Pokhara",
      since: "2021",
      specialty: "Residential & Hotels",
      contact: "+977-61-567890",
    },
    {
      name: "Elite Construction Co.",
      location: "Lalitpur",
      since: "2019",
      specialty: "Corporate Offices",
      contact: "+977-1-5567890",
    },
    {
      name: "Himalayan Interiors",
      location: "Chitwan",
      since: "2022",
      specialty: "Healthcare & Education",
      contact: "+977-56-567890",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Nepal's leading false ceiling solutions network. Become our
              authorized dealer and grow your business with proven systems and
              support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-sm px-4 py-2">50+ Active Partners</Badge>
              <Badge className="text-sm px-4 py-2">15+ Cities Covered</Badge>
              <Badge className="text-sm px-4 py-2">Growing Network</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Partner With FalseCeilingNepal?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in the false ceiling
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Partnership Opportunities
            </h2>
          </div>

          <Tabs defaultValue="dealer" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dealer">Authorized Dealer</TabsTrigger>
              <TabsTrigger value="distributor">
                Regional Distributor
              </TabsTrigger>
              <TabsTrigger value="installer">Installation Partner</TabsTrigger>
            </TabsList>

            <TabsContent value="dealer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-5 w-5" />
                    Authorized Dealer Program
                  </CardTitle>
                  <CardDescription>
                    Perfect for established contractors and interior designers
                    looking to expand their service offerings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Investment Range:</h4>
                    <p className="text-gray-600">
                      NPR 5-10 lakhs (inventory + setup)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Territory:</h4>
                    <p className="text-gray-600">
                      City/District level exclusivity
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Provided:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Product training and certification</li>
                      <li>• Marketing materials and brand support</li>
                      <li>• Technical installation guidance</li>
                      <li>• Regular business development support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="distributor" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Regional Distributor Program
                  </CardTitle>
                  <CardDescription>
                    For established businesses ready to manage multiple dealers
                    in a region
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Investment Range:</h4>
                    <p className="text-gray-600">
                      NPR 20-50 lakhs (warehouse + inventory)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Territory:</h4>
                    <p className="text-gray-600">
                      Provincial/Regional level rights
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Manage sub-dealers in assigned region</li>
                      <li>• Maintain regional inventory and logistics</li>
                      <li>• Provide first-level support to dealers</li>
                      <li>• Regional marketing and brand building</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Installation Partner Program
                  </CardTitle>
                  <CardDescription>
                    For skilled contractors specializing in false ceiling
                    installation services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Investment Range:</h4>
                    <p className="text-gray-600">
                      NPR 2-5 lakhs (tools + equipment)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focus:</h4>
                    <p className="text-gray-600">
                      Installation services only, materials provided
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Steady project pipeline</li>
                      <li>• Technical training and certification</li>
                      <li>• Competitive installation rates</li>
                      <li>• Quality assurance support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Partnership Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-gray-600">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Apply for Partnership</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will contact you within
                    48 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+977-XX-XXXXXXX" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City/Location *</Label>
                      <Input id="city" placeholder="Your city" />
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        placeholder="Years in construction/interior"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partnership">Partnership Type *</Label>
                    <Select>
                      <SelectTrigger id="partnership" className="w-full">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dealer">Authorized Dealer</SelectItem>
                        <SelectItem value="distributor">Regional Distributor</SelectItem>
                        <SelectItem value="installer">Installation Partner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current business, team size, and why you want to partner with us..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full">
                    Submit Partnership Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Success Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet some of our successful partners who are growing their
              businesses with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {partner.location}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Partner Since:</span>{" "}
                    {partner.since}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Specialty:</span>{" "}
                    {partner.specialty}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Phone className="h-3 w-3" />
                    {partner.contact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Network?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our partnership team to discuss opportunities and get
            detailed information about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Call: 9851187267
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Partnership Team
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Partners;
