"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Calendar,
  User,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Blog,
  blogSchema,
  blogSchemaUpdate,
  BlogUpdate,
} from "@/zod-schema/blog";
import Image from "next/image";
import { addBlog, deleteBlog, updateBlog } from "@/actions/blog";
import { toast } from "sonner";
import { IBlog } from "@/types/blog";
import { Skeleton } from "@/components/ui/skeleton";

const BlogContent = ({ blogs }: { blogs: IBlog[] }) => {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [blogFormOpen, setBlogFormOpen] = useState(false);
  const [blogDetailsOpen, setBlogDetailsOpen] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [loading, setLoading] = useState(false);

  const form = useForm<Blog | BlogUpdate>({
    resolver: zodResolver(
      formMode === "add" ? blogSchema : blogSchemaUpdate
    ) as any,
  });
  const imageRef = useRef<HTMLInputElement | null>(null);

  const categories = [
    "Design Trends",
    "Maintenance",
    "Lighting",
    "Installation",
    "Materials",
  ];

  const onSubmit = async (data: Blog | BlogUpdate) => {
    console.log("data>>", data);
    try {
      setLoading(true);

      if (formMode === "add") {
        const response = await addBlog(data as Blog);
        if (response.success) {
          toast.success("Blog added successfully");
        }
      } else {
        const response = await updateBlog(data as BlogUpdate); // 🔹 pass data directly
        if (response.success) {
          toast.success("Blog updated successfully");
        }
      }

      setBlogFormOpen(false);
      form.reset();
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBlog = () => {
    setFormMode("add");
    form.reset({
      title: "",
      excerpt: "",
      category: "",
      author: "",
      status: "Draft",
      featured: false,
      content: "",
      tags: [],
      images: [],
    });
    setBlogFormOpen(true);
  };

  const handleEditBlog = (blog: any) => {
    setFormMode("edit");
    form.reset({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      status: blog.status,
      featured: blog.featured,
      tags: blog.tags,
      images: blog.images || [],
      id: blog.id,
    });
    setSelectedBlog(blog);
    setBlogFormOpen(true);
  };

  const handleViewBlog = (blog: any) => {
    setSelectedBlog(blog);
    setBlogDetailsOpen(true);
  };

  const handleDeleteBlog = async (id: string) => {
    setLoading(true);
    const response = await deleteBlog(id);
    if (response.success) {
      toast.success("blog deleted successfully");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <Button onClick={handleAddBlog}>
          <Plus className="h-4 w-4 mr-2" />
          Add Blog Post
        </Button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search blog posts..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="aspect-square hover:shadow-md transition-shadow"
          >
            <Image
              width={400}
              height={200}
              alt="product images"
              src={blog.images[0]}
              className="rounded-lg"
            />
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge
                  variant={
                    blog.status === "Published" ? "default" : "secondary"
                  }
                >
                  {blog.status}
                </Badge>
                {blog.featured && (
                  <Badge variant="outline" className="text-yellow-600">
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle className="text-lg line-clamp-2">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-muted-foreground">
                  <User className="h-3 w-3 mr-1" />
                  {blog.author}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {blog.createdAt.toString() || "Not published"}
                </div>
                <Badge variant="outline" className="text-xs">
                  {blog.category}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                {/* <span className="text-xs text-muted-foreground">
                  {blog.} views
                </span> */}
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewBlog(blog)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditBlog(blog)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Blog Form Dialog */}
      <Dialog open={blogFormOpen} onOpenChange={setBlogFormOpen}>
        <DialogContent className="!max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {formMode === "add" ? "Add New Blog Post" : "Edit Blog Post"}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Title + Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Excerpt + Content */}
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter blog excerpt"
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter blog content"
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Blog Images</h3>

                  <div
                    role="button"
                    onClick={() => imageRef.current?.click()}
                    className="border-2 cursor-pointer border-dashed border-border rounded-lg p-6 text-center"
                  >
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop images here or click to browse
                    </p>
                    <FormField
                      control={form.control}
                      name="images"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input
                              onChange={(e) =>
                                form.setValue(
                                  "images",
                                  e.target.files as FileList
                                )
                              }
                              accept=".jpeg,.png"
                              type="file"
                              ref={imageRef}
                              hidden
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {form.watch("images")?.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {Array.from(form.getValues("images"))?.map(
                        (img, index) => {
                          const isFile = img instanceof File;
                          const imageSrc = isFile
                            ? URL.createObjectURL(img)
                            : img;
                          return (
                            <div key={index} className="relative group">
                              <div className=" border-4 border-green-400 bg-muted rounded-lg flex items-center justify-center">
                                {imageSrc ? (
                                  <Image
                                    width={200}
                                    height={200}
                                    alt="product images"
                                    src={imageSrc as any}
                                    className="rounded-lg"
                                  />
                                ) : (
                                  <Skeleton className="h-[200px] w-[200px] rounded-lg" />
                                )}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Tags Input */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => {
                  const [inputValue, setInputValue] = useState("");
                  const tags = Array.isArray(field.value) ? field.value : [];

                  const handleInputChange = (
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    setInputValue(e.target.value);
                  };

                  const handleKeyDown = (
                    e: React.KeyboardEvent<HTMLInputElement>
                  ) => {
                    if (e.key === "," || e.key === "Enter") {
                      e.preventDefault();
                      const newTag = inputValue.trim().replace(/,$/, "");
                      if (newTag && !tags.includes(newTag)) {
                        field.onChange([...tags, newTag]);
                      }
                      setInputValue("");
                    } else if (
                      e.key === "Backspace" &&
                      !inputValue &&
                      tags.length > 0
                    ) {
                      field.onChange(tags.slice(0, -1));
                    }
                  };

                  const handleRemoveTag = (tagToRemove: string) => {
                    field.onChange(tags.filter((tag) => tag !== tagToRemove));
                  };

                  return (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {tags.map((tag, index) => (
                              <span
                                key={index}
                                className="flex items-center bg-muted px-2 py-1 rounded text-sm"
                              >
                                {tag}
                                <button
                                  type="button"
                                  className="ml-1 text-muted-foreground hover:text-destructive"
                                  onClick={() => handleRemoveTag(tag)}
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                          <Input
                            placeholder="Enter tags and press comma or Enter"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              {/* Author + Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter author name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Featured Switch */}
              <FormField
                control={form.control}
                name="featured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Featured Post</FormLabel>
                      <div className="text-sm text-muted-foreground">
                        Mark this post as featured
                      </div>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setBlogFormOpen(false)}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  {formMode === "add" ? "Create Post" : "Update Post"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Blog Details Dialog */}
      <Dialog open={blogDetailsOpen} onOpenChange={setBlogDetailsOpen}>
        <DialogContent className="!max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Blog Post Details</DialogTitle>
          </DialogHeader>
          {selectedBlog && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    selectedBlog.status === "Published"
                      ? "default"
                      : "secondary"
                  }
                >
                  {selectedBlog.status}
                </Badge>
                {selectedBlog.featured && (
                  <Badge variant="outline" className="text-yellow-600">
                    Featured
                  </Badge>
                )}
              </div>
              <div>
                <Image
                  width={700}
                  height={200}
                  alt="product images"
                  src={selectedBlog.images[0]}
                  className="rounded-lg mx-auto my-2"
                />
                <h3 className="text-xl font-bold mb-2">{selectedBlog.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span>By {selectedBlog.author}</span>
                  <span>{selectedBlog.publishDate || "Not published"}</span>
                  <span>{selectedBlog.views} views</span>
                </div>
                <Badge variant="outline" className="mb-4">
                  {selectedBlog.category}
                </Badge>
              </div>
              <div>
                <h4 className="font-medium mb-2">Content</h4>
                <p className="text-muted-foreground">{selectedBlog.content}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogContent;
