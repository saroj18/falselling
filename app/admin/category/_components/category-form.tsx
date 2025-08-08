"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TrendingUp, Upload, X } from "lucide-react";
import { CategoryFormData, categorySchema } from "@/zod-schema/category";
import { addCategory, updateCategory } from "@/actions/category";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ICategory } from "@/types/category";

interface CategoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
  category: ICategory;
}

const CategoryFormDialog = ({
  open,
  onOpenChange,
  mode,
  category,
}: CategoryFormDialogProps) => {
  const [loading, setLoading] = useState(false);
  console.log("update", category);
  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  });
  const imageRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (data: CategoryFormData) => {
    if (mode == "add") {
      setLoading(true);
      const response = await addCategory(data);
      if (response.success) {
        toast.success("category added successfully");
      }
      setLoading(false);
      onOpenChange(false);
      form.reset();
    } else {
      setLoading(true);
      const response = await updateCategory(String(category?.id), data);
      if (response.success) {
        toast.success("category updated successfully");
      }
      setLoading(false);
      onOpenChange(false);
      form.reset();
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    form.reset();
  };

  useEffect(() => {
    if (open) {
      form.reset({
        name: category?.name || "",
        description: category?.description || "",
        images: category?.images || [],
        avg_price: category?.avg_price || 0,
      });
    }
  }, [open, category, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {mode === "add" ? "Add New Category" : "Edit Category"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="avg_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avg_Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0.00"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter category description"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-x-2">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Product Images</h3>

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
                              multiple
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
                                <Image
                                  width={200}
                                  height={200}
                                  alt="product images"
                                  src={imageSrc as any}
                                  className="rounded-lg"
                                />
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                  {category?.images?.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {category?.images.map((img: string, index: number) => (
                        <div key={index} className="relative group">
                          <div className=" border-4 border-green-400 bg-muted rounded-lg flex items-center justify-center">
                            <Image
                              width={200}
                              height={200}
                              alt="product images"
                              src={img}
                              className="rounded-lg"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
              <div className="p-2 border-2 border-gray-400 space-y-2 rounded-md">
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => {
                    const [inputValue, setInputValue] = useState("");
                    const tags = field.value || [];

                    const handleInputChange = (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setInputValue(e.target.value);
                    };

                    const handleInputKeyDown = (
                      e: React.KeyboardEvent<HTMLInputElement>
                    ) => {
                      if (e.key === "," || e.key === "Enter") {
                        e.preventDefault();
                        const newTag = inputValue.trim().replace(/,$/, "");
                        if (newTag && !tags.includes(newTag)) {
                          const newTags = [...tags, newTag];
                          field.onChange(newTags);
                        }
                        setInputValue("");
                      } else if (
                        e.key === "Backspace" &&
                        !inputValue &&
                        tags.length > 0
                      ) {
                        const newTags = tags.slice(0, -1);
                        field.onChange(newTags);
                      }
                    };

                    const handleRemoveTag = (tagToRemove: string) => {
                      const newTags = tags.filter(
                        (tag: string) => tag !== tagToRemove
                      );
                      field.onChange(newTags);
                    };

                    return (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {tags.map((tag: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="flex items-center bg-muted px-2 py-1 rounded text-sm"
                                >
                                  {tag}
                                  <button
                                    type="button"
                                    className="ml-1 text-muted-foreground hover:text-destructive"
                                    onClick={() => handleRemoveTag(tag)}
                                    tabIndex={-1}
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <Input
                              placeholder="Enter tags and press comma"
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleInputKeyDown}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => {
                    const [inputValue, setInputValue] = useState("");
                    const tags = field.value || [];

                    const handleInputChange = (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      setInputValue(e.target.value);
                    };

                    const handleInputKeyDown = (
                      e: React.KeyboardEvent<HTMLInputElement>
                    ) => {
                      if (e.key === "," || e.key === "Enter") {
                        e.preventDefault();
                        const newTag = inputValue.trim().replace(/,$/, "");
                        if (newTag && !tags.includes(newTag)) {
                          const newTags = [...tags, newTag];
                          field.onChange(newTags);
                        }
                        setInputValue("");
                      } else if (
                        e.key === "Backspace" &&
                        !inputValue &&
                        tags.length > 0
                      ) {
                        const newTags = tags.slice(0, -1);
                        field.onChange(newTags);
                      }
                    };

                    const handleRemoveTag = (tagToRemove: string) => {
                      const newTags = tags.filter(
                        (tag: string) => tag !== tagToRemove
                      );
                      field.onChange(newTags);
                    };

                    return (
                      <FormItem>
                        <FormLabel>Features</FormLabel>
                        <FormControl>
                          <div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {tags.map((tag: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="flex items-center bg-muted px-2 py-1 rounded text-sm"
                                >
                                  {tag}
                                  <button
                                    type="button"
                                    className="ml-1 text-muted-foreground hover:text-destructive"
                                    onClick={() => handleRemoveTag(tag)}
                                    tabIndex={-1}
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <Input
                              placeholder="Enter features and press comma"
                              value={inputValue}
                              onChange={handleInputChange}
                              onKeyDown={handleInputKeyDown}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">
                {mode === "add" ? "Add Category" : "Update Category"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryFormDialog;
