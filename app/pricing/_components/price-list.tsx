"use client";

import { useEffect, useState } from "react";
import {
  Calculator,
  Package,
  Wrench,
  MessageSquare,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IProduct } from "@/types/product";

const Pricing = ({ materialPricing }: { materialPricing: IProduct[] }) => {
  const [selectedArea, setSelectedArea] = useState(100);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [total, setTotal] = useState(0);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      area: "",
      message: "",
    },
  });

  const bulkDiscounts = [
    { range: "100-300 sq ft", discount: "5%", savings: "Save up to Rs. 1,500" },
    {
      range: "300-500 sq ft",
      discount: "10%",
      savings: "Save up to Rs. 5,000",
    },
    {
      range: "500-1000 sq ft",
      discount: "15%",
      savings: "Save up to Rs. 15,000",
    },
    {
      range: "1000+ sq ft",
      discount: "20%",
      savings: "Save up to Rs. 30,000+",
    },
  ];

  const onSubmit = (data: any) => {
    console.log("Quote request:", data);
    // Handle form submission
  };

  useEffect(() => {
    const findPrice = materialPricing.find((item) => {
      return item.id == selectedMaterial;
    });
    if (!findPrice) {
      setTotal(0);
      return;
    }
    const pricePerSqFt =
      Number(findPrice.price) -
      (Number(findPrice.price) * Number(findPrice.discount || 0)) / 100;
    const totalPrice = pricePerSqFt * selectedArea;
    setTotal(Math.round(totalPrice));
  }, [selectedArea, selectedMaterial, materialPricing]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No hidden costs, no surprises. Get clear pricing for your ceiling
              project with material costs and installation included.
            </p>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Calculator className="inline-block mr-2 h-8 w-8 text-blue-600" />
              Price Calculator
            </h2>
            <p className="text-gray-600">
              Calculate your project cost instantly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Cost Estimate</CardTitle>
                <CardDescription>
                  Select your area size and material type to get an instant
                  quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="area">Area (Square Feet)</Label>
                    <Input
                      id="area"
                      type="number"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(Number(e.target.value))}
                      placeholder="Enter area in sq ft"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="material">Material Type</Label>
                    <Select
                      value={selectedMaterial}
                      onValueChange={setSelectedMaterial}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Select material type" />
                      </SelectTrigger>
                      <SelectContent>
                        {materialPricing.map((product) => {
                          return (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Total Estimated Cost: Rs. {total}
                  </h3>
                  <p className="text-gray-600">
                    Includes material cost + installation for {selectedArea} sq
                    ft
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Package className="inline-block mr-2 h-8 w-8 text-blue-600" />
              Material Pricing
            </h2>
            <p className="text-gray-600">
              Transparent pricing for all ceiling materials
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Material Type</TableHead>
                      <TableHead>Material Cost (per sq ft)</TableHead>
                      <TableHead>Installation Cost (per sq ft)</TableHead>
                      <TableHead>Total Cost (per sq ft)</TableHead>
                      <TableHead>Features</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {materialPricing.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-semibold">
                          {item.name}
                        </TableCell>
                        <TableCell>Rs. {item.price}</TableCell>
                        <TableCell>Rs. {item.installation}</TableCell>
                        <TableCell className="font-bold text-blue-600">
                          Rs. {item.price + 125}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {item.benefits &&
                              item.benefits.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center text-sm"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                  {feature}
                                </div>
                              ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bulk Discounts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bulk Order Discounts
            </h2>
            <p className="text-gray-600">Save more on larger projects</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bulkDiscounts.map((discount, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{discount.range}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {discount.discount}
                    </div>
                    <p className="text-sm text-gray-600">{discount.savings}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Form */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <MessageSquare className="inline-block mr-2 h-8 w-8" />
              Request Custom Quote
            </h2>
            <p className="text-blue-100">
              Get a personalized quote for your specific project requirements
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Custom Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="9851187267" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger className="w-full mt-2">
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="residential">
                                    Residential
                                  </SelectItem>
                                  <SelectItem value="commercial">
                                    Commercial
                                  </SelectItem>
                                  <SelectItem value="office">Office</SelectItem>
                                  <SelectItem value="showroom">
                                    Showroom
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="area"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Area (Square Feet)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              placeholder="Tell us about your project requirements..."
                              className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Get Custom Quote
                      </Button>
                      <Button
                        type="button"
                        variant="default"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href="tel:9851187267"
                          className="flex items-center justify-center"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Installation Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All prices include professional installation by our
                    certified technicians
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    2-year warranty on all materials and workmanship
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complimentary site visit and design consultation for all
                    projects
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
