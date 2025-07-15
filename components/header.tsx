"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const productCategories = [
    {
      name: "🪵 Ceiling Materials",
      items: [
        { name: "Gypsum Boards", href: "/products/gypsum-boards" },
        { name: "PVC Panels", href: "/products/pvc-panels" },
        { name: "Metal Ceilings", href: "/products/metal-ceilings" },
        { name: "Acoustic Ceilings", href: "/products/acoustic-ceilings" },
        { name: "Wooden Ceilings", href: "/products/wooden-ceilings" },
      ],
    },
    {
      name: "💡 Integrated Ceiling Lights",
      items: [
        { name: "LED Panels", href: "/products/led-panels" },
        { name: "Cove Lighting", href: "/products/cove-lighting" },
        { name: "Hanging Lights", href: "/products/hanging-lights" },
      ],
    },
    {
      name: "🛠️ Accessories",
      items: [
        { name: "Ceiling Frames", href: "/products/ceiling-frames" },
        { name: "Hangers & Channels", href: "/products/hangers-channels" },
        { name: "Joint Compounds", href: "/products/joint-compounds" },
        { name: "Screws & Tapes", href: "/products/screws-tapes" },
      ],
    },
  ];

  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      categories: productCategories,
    },
    { name: "Ceiling Types", href: "/ceilingtypes" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Partners", href: "/partners" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              width={200}
              height={160}
              src="/logo.png"
              alt="FalseCeilingNepal Logo"
              className="h-12 w-auto sm:h-16 hover:scale-105 transition-transform duration-200"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.categories ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-sm">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[800px] gap-3 p-6 md:grid-cols-3">
                            {item.categories.map((category) => (
                              <div
                                key={category.name}
                                className="group relative"
                              >
                                <div className="mb-3 font-medium text-sm text-primary border-b border-border pb-2">
                                  {category.name}
                                </div>
                                <div className="space-y-2">
                                  {category.items.map((subItem) => (
                                    <NavigationMenuLink
                                      key={subItem.name}
                                      asChild
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="block rounded-md p-3 text-sm hover:bg-accent hover:text-primary transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </NavigationMenuLink>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div className="col-span-3 mt-4 pt-4 border-t border-border">
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/products"
                                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                                >
                                  View All Products →
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive(item.href)
                              ? "text-primary bg-accent"
                              : "text-foreground hover:text-primary hover:bg-muted"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Contact Button - Hidden on small screens */}
          <div className="hidden lg:flex items-center">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://wa.me/9779851187267"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <ScrollArea className="h-full">
                <div className="flex flex-col space-y-4 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src="/lovable-uploads/76a9e0e6-f29d-4304-bc9d-2f050ff8ad55.png"
                      alt="FalseCeilingNepal Logo"
                      className="h-8 w-auto"
                    />
                  </div>

                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary bg-accent"
                            : "text-foreground hover:text-primary hover:bg-muted"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.categories && (
                        <div className="ml-4 space-y-3 border-l border-border pl-4">
                          {item.categories.map((category) => (
                            <div key={category.name} className="space-y-2">
                              <div className="text-xs font-medium text-primary">
                                {category.name}
                              </div>
                              <div className="ml-2 space-y-1">
                                {category.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-2 py-1 text-xs text-muted-foreground hover:text-primary transition-colors rounded"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <a
                        href="https://wa.me/9779851187267"
                        className="flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
