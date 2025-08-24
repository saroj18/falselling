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
          question: "What types of false ceilings do you provide?",
          answer:
            "We offer:\n• Gypsum Board Ceilings (plain, designer, cove, step)\n• T-Grid / Mineral Fiber Ceilings (for offices, schools, retail)\n• PVC / Metal Ceilings (moisture & service areas)\n• Wooden & Louver Ceilings (premium interiors)",
        },
        {
          question: "Do you provide both supply and installation?",
          answer:
            "Yes. We provide:\n• Material supply only (if you have your own installer)\n• Supply & installation (recommended for best finish and warranty)",
        },
        {
          question: "Do you handle small projects (like a single room)?",
          answer:
            "Yes. We take on homes, single rooms, and large commercial projects. No project is too small.",
        },
        {
          question: "Where do you provide service?",
          answer:
            "We are based in Khumaltar, Lalitpur (Kathmandu Valley) and provide services nationwide: Kathmandu • Pokhara • Chitwan • Butwal • Biratnagar • Dharan • Nepalgunj",
        },
        {
          question: "Do you offer free site visits?",
          answer:
            "Yes. We provide free site visit & consultation in Kathmandu Valley. For other cities, travel costs may apply.",
        },
      ],
    },
    {
      category: "Pricing & Quotes",
      icon: "💰",
      faqs: [
        {
          question: "How much does a false ceiling cost in Nepal?",
          answer:
            "• Gypsum ceilings: NPR 180–250/sq.ft (design dependent)\n• T-Grid ceilings: NPR 120–180/sq.ft\n• Wooden / designer ceilings: Custom pricing\n👉 Final cost depends on material, design, lighting integration, and site condition.",
        },
        {
          question: "How do I request a quotation?",
          answer:
            "Simply:\n• Call / WhatsApp: +977 9851187267\n• Send room dimensions + site photos\n• Our team will prepare a BOQ (Bill of Quantity) & quotation within 24–48 hours",
        },
      ],
    },
    {
      category: "Performance & Benefits",
      icon: "🎯",
      faqs: [
        {
          question: "Can false ceilings reduce heat and noise?",
          answer:
            "Yes. With Rockwool / Glasswool insulation above the ceiling, false ceilings help to:\n• Reduce heat transfer from metal roofs\n• Absorb noise & echo in offices, cafés, studios",
        },
        {
          question: "Will acoustic panels block outside noise?",
          answer:
            "Acoustic panels reduce echo and reverb inside the room. To block external noise, we install additional isolation layers (dense boards, decoupling frames, seals).",
        },
        {
          question: "How do we stop dew drops/condensation on steel ceilings?",
          answer:
            "By installing:\n• Rockwool (50–75 mm) under steel panels\n• Covered with aluminum foil vapor barrier (airtight, taped seams)\nThis ensures the ceiling stays warm and dry → no dripping water.",
        },
      ],
    },
    {
      category: "Installation & Warranty",
      icon: "🔧",
      faqs: [
        {
          question: "How long does installation take?",
          answer:
            "• Small room (100 sq.ft): 2–3 days\n• Medium hall (500–800 sq.ft): 1–2 weeks\n• Large projects (factories, showrooms): Timeline given after site visit",
        },
        {
          question: "What is the warranty on your work?",
          answer:
            "• Workmanship warranty: 1 year\n• Material warranty: As per manufacturer (usually 5–10 years)",
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
