"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "False Ceiling Design",
    "POP Ceiling Installation",
    "Gypsum Board Ceiling",
    "Acoustic Solutions",
    "LED Integration",
    "Custom Designs",
  ];

  const products = [
    "Gypsum Boards",
    "PVC Panels",
    "Metal Ceilings",
    "LED Panels",
    "Acoustic Panels",
    "Wooden Ceilings",
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Image
                width={200}
                height={160}
                src="/logo.png"
                alt="FalseCeilingNepal Logo"
                className="h-12 cursor-pointer w-auto sm:h-16 hover:scale-105 transition-transform duration-200"
                priority
                quality={100}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Transform your ceiling, redefine your space. We provide premium
              false ceiling solutions across Nepal with expert design and
              installation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>9851187267</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="break-all">info@falseceilingnepal.shop</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary text-sm transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-secondary-foreground/80 text-sm py-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-primary">
              Stay Connected
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
              Get updates on latest ceiling trends and special offers.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-secondary/50 border-secondary-foreground/20 text-white placeholder:text-secondary-foreground/60 flex-1"
                />
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-secondary/50"
                asChild
              >
                <a href="https://wa.me/9779851187267" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-secondary/50"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-secondary/50"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-secondary-foreground/60 text-center lg:text-left">
            © 2024 FalseCeilingNepal.shop. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-secondary-foreground/60">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund"
              className="hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-secondary-foreground/60">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>Verified by NepalBuild.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>5★ Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
