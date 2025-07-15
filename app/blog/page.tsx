import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, TrendingUp } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Latest False Ceiling Trends for Modern Homes in 2024",
      excerpt:
        "Discover the most popular ceiling designs that are transforming homes across Nepal this year.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=300&fit=crop",
      category: "Trends",
      author: "Design Team",
      date: "January 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Complete Guide to Gypsum Ceiling Installation",
      excerpt:
        "Everything you need to know about gypsum ceiling installation, maintenance, and benefits.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop",
      category: "Installation",
      author: "Technical Team",
      date: "January 10, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Acoustic Ceilings: Sound Solutions for Your Space",
      excerpt:
        "How acoustic ceiling solutions can improve your home or office environment.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=300&fit=crop",
      category: "Design Ideas",
      author: "Acoustic Expert",
      date: "January 8, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Ceiling Maintenance Tips for Nepal's Climate",
      excerpt:
        "Essential maintenance tips to keep your false ceiling in perfect condition through monsoon and dry seasons.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
      category: "Maintenance",
      author: "Maintenance Team",
      date: "January 5, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 5,
      title: "DIY vs Professional Installation: What to Choose?",
      excerpt:
        "A comprehensive comparison to help you decide between DIY ceiling installation and professional services.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop",
      category: "DIY Tips",
      author: "Installation Expert",
      date: "December 28, 2023",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Cost-Effective Ceiling Solutions for Small Spaces",
      excerpt:
        "Budget-friendly false ceiling ideas that make small rooms look bigger and more elegant.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=300&fit=crop",
      category: "Budget Tips",
      author: "Design Consultant",
      date: "December 25, 2023",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Trends",
    "Installation",
    "Design Ideas",
    "Maintenance",
    "DIY Tips",
    "Budget Tips",
  ];
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ceiling Design Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights, design inspiration, and practical tips for your
              ceiling projects
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="mb-4 flex items-center gap-1 w-fit">
                <TrendingUp className="h-3 w-3" />
                Featured Article
              </Badge>
            </div>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">
                    {featuredPost.category}
                  </Badge>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Button>Read Full Article</Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-blue-50"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white">
                    {post.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest ceiling design trends,
            tips, and project updates.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
