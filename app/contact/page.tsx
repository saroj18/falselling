import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // toast({
    //   title: "Message Sent!",
    //   description: "We'll get back to you within 24 hours.",
    // });
    toast("Message Sent");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "9851187267",
      action: "tel:9851187267",
      available: "Available 7 days a week",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "9851187267",
      action: "https://wa.me/9779851187267",
      available: "Quick response guaranteed",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@falseceilingnepal.shop",
      action: "mailto:info@falseceilingnepal.shop",
      available: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kathmandu, Nepal",
      action: "#",
      available: "Site visits available",
    },
  ];

  const serviceOptions = [
    "False Ceiling Design & Installation",
    "POP Ceiling Design",
    "Gypsum Ceiling Services",
    "Acoustic Ceiling Solutions",
    "Waterproof & Fireproof Ceilings",
    "Site Visit & Consultation",
    "Custom Ceiling Projects",
    "Repair & Maintenance",
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Emergency", hours: "24/7 Available" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our experts for a
              free consultation and personalized quote for your ceiling project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Free Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a
                    detailed quote within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="98XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project - room size, design preferences, timeline, etc."
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      By submitting this form, you agree to our terms and
                      privacy policy.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <info.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-gray-600">{info.content}</p>
                          <p className="text-sm text-gray-500">
                            {info.available}
                          </p>
                          {info.action !== "#" && (
                            <Button
                              variant="link"
                              className="p-0 h-auto mt-1"
                              asChild
                            >
                              <a href={info.action}>
                                {info.title === "WhatsApp"
                                  ? "Chat Now"
                                  : "Contact"}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href="https://wa.me/9779851187267">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <a href="tel:9851187267">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 9851187267
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does installation take?",
                answer:
                  "Most residential projects take 3-7 days depending on size and complexity. We provide exact timelines during consultation.",
              },
              {
                question: "Do you provide free site visits?",
                answer:
                  "Yes! We offer free site visits and consultations within Kathmandu valley. Minimal charges may apply for distant locations.",
              },
              {
                question: "What warranty do you provide?",
                answer:
                  "We provide 1 year comprehensive warranty on all installations, covering both materials and workmanship.",
              },
              {
                question: "Can you work with existing lighting?",
                answer:
                  "Absolutely! We can integrate with existing lighting or help you upgrade to modern LED solutions.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, bank transfers, and digital payments. Payment schedule is typically 50% advance and 50% on completion.",
              },
              {
                question: "Do you clean up after installation?",
                answer:
                  "Yes, complete cleanup is included in our service. We leave your space clean and ready to use.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
