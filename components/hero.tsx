"use client";

import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Transform Your Ceiling",
      subtitle: "Redefine Your Space",
      description:
        "Premium false ceiling solutions that blend beauty with functionality",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      title: "Premium Materials",
      subtitle: "Exceptional Quality",
      description:
        "High-grade materials for lasting durability and stunning aesthetics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Expert Installation",
      subtitle: "Professional Service",
      description:
        "Skilled craftsmen delivering flawless installation every time",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider with Enhanced Blur */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80 backdrop-blur-[2px]" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-background/10 backdrop-blur-md hover:bg-background/20 transition-all duration-300 border border-background/20"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-background drop-shadow-lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-background/10 backdrop-blur-md hover:bg-background/20 transition-all duration-300 border border-background/20"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-background drop-shadow-lg" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-background w-8"
                : "bg-background/50 w-2 hover:bg-background/70"
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-20">
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          {/* Centered Hero Content */}
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 text-background/90 text-xs md:text-sm font-medium">
                <Star className="h-3 w-3 md:h-4 md:w-4 mr-2 text-yellow-400" />
                Nepal's #1 Ceiling Specialists
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-background block">
                  {slides[currentSlide].title}
                </span>
                <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent block mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed px-4">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto px-4">
              {[
                "Expert Installation",
                "Premium Materials",
                "Custom Designs",
                "Affordable Pricing",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg bg-background/5 backdrop-blur-sm border border-background/10"
                >
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-background font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 md:space-y-6 px-4">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg text-sm md:text-base"
                  asChild
                >
                  <a href="https://wa.me/9779851187267">
                    <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    WhatsApp Now
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-background/30 text-background hover:bg-background/10 backdrop-blur-sm text-sm md:text-base"
                  asChild
                >
                  <a href="tel:9851187267">
                    <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Call: 9851187267
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg text-sm md:text-base"
                >
                  Book Free Visit
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-4 md:space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-300">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-background/70">
                    Projects Done
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-xl md:text-2xl font-bold text-yellow-400">
                    5
                    <Star className="h-4 w-4 md:h-5 md:w-5 ml-1 fill-current" />
                  </div>
                  <div className="text-xs md:text-sm text-background/70">
                    Customer Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-green-400">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-background/70">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
