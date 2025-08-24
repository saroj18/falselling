
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "False Ceiling FAQs | Common Questions in Nepal",
  description:
    "Find answers to frequently asked questions about false ceilings, acoustic panels, and insulation services in Nepal.",
  keywords: [
    "false ceiling FAQs Nepal",
    "gypsum ceiling questions",
    "acoustic panel FAQs",
  ],
};

const FAQs = () => {
  const faqCategories = [
    {
      category: "General Information",
      icon: "ℹ️",
      faqs: [
        {
          question: "What is a false ceiling?",
          answer:
            "A false ceiling, also known as a dropped ceiling or suspended ceiling, is a secondary ceiling hung below the structural ceiling. It's used for aesthetic purposes, to hide structural elements, improve acoustics, and house lighting, HVAC, and electrical systems.",
        },
        {
          question: "What materials are used for false ceilings?",
          answer:
            "We use various materials including gypsum boards, PVC panels, metal tiles, acoustic panels, and wooden panels. Each material has specific benefits - gypsum for versatility, PVC for moisture resistance, metal for durability, and wood for natural aesthetics.",
        },
        {
          question: "Do you provide services across Nepal?",
          answer:
            "Yes, we provide false ceiling services across major cities in Nepal including Kathmandu, Pokhara, Lalitpur, Bhaktapur, Chitwan, and many other locations. Contact us to confirm service availability in your area.",
        },
      ],
    },
    {
      category: "Pricing & Quotes",
      icon: "💰",
      faqs: [
        {
          question: "How much does false ceiling installation cost?",
          answer:
            "Pricing varies based on material choice, design complexity, and area size. Generally, basic gypsum ceiling costs start from NPR 200-400 per sq ft, while premium materials and designs can range from NPR 500-1200 per sq ft. We provide free detailed quotes after site inspection.",
        },
        {
          question: "Is the quote inclusive of materials and labor?",
          answer:
            "Yes, our quotes include all materials (boards, frames, accessories), labor costs, and basic finishing. Additional charges may apply for premium finishes, complex designs, or electrical work that requires certified electricians.",
        },
        {
          question: "Do you offer discounts for large projects?",
          answer:
            "Yes, we offer attractive discounts for projects above 1000 sq ft. Bulk discounts range from 5-15% depending on the project size. Contact us for customized pricing on large commercial or residential projects.",
        },
      ],
    },
    {
      category: "Installation Process",
      icon: "🔧",
      faqs: [
        {
          question: "How long does installation take?",
          answer:
            "Installation time depends on the area and complexity. Typically, a standard room (150-200 sq ft) takes 2-3 days, while larger areas may take 1-2 weeks. We provide a detailed timeline during the planning phase.",
        },
        {
          question: "Is the installation process messy?",
          answer:
            "We take precautions to minimize mess, including covering furniture and using dust protection sheets. However, some dust and debris are inevitable during cutting and installation. We clean up thoroughly after completion.",
        },
        {
          question: "Can false ceiling be installed in existing homes?",
          answer:
            "Absolutely! False ceilings can be installed in existing homes without major renovations. We work around your furniture and daily routine to minimize disruption.",
        },
        {
          question: "What preparation is needed before installation?",
          answer:
            "Clear the room of fragile items, ensure electrical points are planned, and provide access to the ceiling area. We'll guide you through specific preparations during the site visit.",
        },
      ],
    },
    {
      category: "Maintenance & Durability",
      icon: "🛠️",
      faqs: [
        {
          question: "How long do false ceilings last?",
          answer:
            "Quality false ceilings can last 15-25 years with proper maintenance. Gypsum and metal ceilings typically have longer lifespans compared to PVC, which may need replacement after 10-15 years.",
        },
        {
          question: "How do I maintain my false ceiling?",
          answer:
            "Regular dusting, avoiding water exposure (except for moisture-resistant materials), and periodic inspection for sagging or cracks. We provide detailed maintenance guidelines and offer annual maintenance services.",
        },
        {
          question: "What if panels get damaged?",
          answer:
            "Individual panels can usually be replaced without affecting the entire ceiling. We maintain stock of common materials and provide repair services. Keep some spare panels for future repairs.",
        },
        {
          question: "Are false ceilings suitable for Nepal's climate?",
          answer:
            "Yes, when properly installed with appropriate materials. We use moisture-resistant materials in areas prone to humidity and ensure proper ventilation to prevent fungal growth during monsoon season.",
        },
      ],
    },
    {
      category: "Design & Customization",
      icon: "🎨",
      faqs: [
        {
          question: "Can you create custom designs?",
          answer:
            "Yes, we specialize in custom designs including multi-level ceilings, curved surfaces, integrated lighting, and artistic patterns. Our design team works with you to create unique solutions that match your vision.",
        },
        {
          question: "Can lights be integrated into false ceilings?",
          answer:
            "Absolutely! We can integrate various lighting options including LED panels, cove lighting, spotlights, and chandeliers. Proper planning ensures easy maintenance and optimal light distribution.",
        },
        {
          question: "Do you provide 3D design previews?",
          answer:
            "Yes, for larger projects, we provide 3D visualizations to help you see how the final ceiling will look before installation begins.",
        },
      ],
    },
    {
      category: "Technical Questions",
      icon: "⚙️",
      faqs: [
        {
          question: "What is the minimum ceiling height required?",
          answer:
            "We recommend a minimum ceiling height of 9 feet for false ceiling installation. This allows for proper clearance while maintaining comfortable room proportions. For lower ceilings, we offer slim profile solutions.",
        },
        {
          question: "Can false ceilings support heavy fixtures?",
          answer:
            "Standard false ceilings can support light fixtures up to 15-20 kg. For heavier installations like large chandeliers, we install additional structural support systems.",
        },
        {
          question: "Are false ceilings fire-resistant?",
          answer:
            "We offer fire-resistant materials including special gypsum boards and metal panels with fire ratings. These are especially important for commercial installations and are available upon request.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about false ceiling installation,
            materials, pricing, and maintenance.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search FAQs..." className="pl-10" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                  <Badge variant="secondary">
                    {category.faqs.length} Questions
                  </Badge>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here
              to help you with any questions about false ceiling solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers through WhatsApp chat support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a
                    href="https://wa.me/9779851187267"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
                <CardDescription>
                  Speak directly with our technical experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:9851187267">Call: 9851187267</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <HelpCircle className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-lg">Site Visit</CardTitle>
                <CardDescription>
                  Schedule a free consultation at your location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Book Free Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQs;
