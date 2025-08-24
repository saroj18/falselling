"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { ContactFormInputs, contactFormSchema } from "@/zod-schema/contact";
import { sendContact } from "../../actions/contact";
import { useState } from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact FalseCeilingNepal.shop | Free Site Visit in Nepal",
  description:
    "Get in touch for false ceiling, acoustic panel, and insulation services in Nepal. Call +977 9851187267 for a free consultation.",
  keywords: [
    "contact false ceiling Nepal",
    "ceiling services Nepal",
    "acoustic consultation Nepal",
  ],
};

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

const workingHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  { day: "Emergency", hours: "24/7 Available" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Form submitted:", data);
      setLoading(true);
      const response = await sendContact(data);
      if (response.success) {
        toast.success(response.message);
        reset();
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          {...register("name")}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="98XXXXXXXX"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                            defaultValue=""
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
                        )}
                      />
                      {errors.service && (
                        <span className="text-red-500 text-xs">
                          {errors.service.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project - room size, design preferences, timeline, etc."
                        rows={4}
                        {...register("message")}
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <Button
                      disabled={loading}
                      type="submit"
                      size="lg"
                      className="w-full"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {loading ? "Sending...." : "Send Message"}
                    </Button>
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
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
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
