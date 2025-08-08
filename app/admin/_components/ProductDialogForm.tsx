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
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Package, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ProductFormData,
  productSchema,
  productSchemaUpdate,
} from "@/zod-schema/product";
import Image from "next/image";
import { addProduct, updateProduct } from "@/actions/product";
import { IProduct } from "@/types/product";
import { toast } from "sonner";
import { getAllCategory } from "@/actions/category";
import { ICategory } from "@/types/category";

interface ProductFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
  product: IProduct;
}

const defaultProductValues: ProductFormData = {
  name: "Test Product",
  category: [],
  price: 1000,
  stock: 112,
  status: "in_stock",
  description: "this is a demo description for a test product",
  weight: 12,
  dimensions: "12*14",
  sku: "ssk",
  brand: "sony",
  warranty: "2",
  tags: ["okya", "cheap", "quality"],
  images: undefined,
  discount: 5,
  applications: ["okya", "cheap", "quality"],
  benefits: ["okya", "cheap", "quality"],
  installation: ["okya", "cheap", "quality"],
  specification: ["okya", "cheap", "quality"],
};

const ProductFormDialog = ({
  open,
  onOpenChange,
  mode,
  product,
}: ProductFormDialogProps) => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [category, setCategory] = useState<ICategory[]>([]);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(
      mode == "add" ? productSchema : productSchemaUpdate
    ) as any,
  });


  const onSubmit = async (data: ProductFormData) => {
    if (mode == "add") {
      console.log("pro", data);
      const response = await addProduct(data);
      if (response.success) {
        toast.success("Product added successfully");
      }
    } else {
      const response = await updateProduct({ data });
      if (response.success) {
        toast.success("Product updated successfully");
      }
    }
    onOpenChange(false);
    form.reset();
  };

  useEffect(() => {
    const getCategory = async () => {
      const cat = await getAllCategory();
      if (cat.success) {
        setCategory(cat.data as ICategory[]);
        const info = cat.data?.map((item) => {
          return { name: item.name, id: item.id };
        });
        form.setValue("category", info as { name: string; id: string }[]);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    if (product && mode !== "add") {
      form.reset({
        ...product,
        category: product.category
          ? Array.isArray(product.category)
            ? product.category
            : [{ id: product.category.id, name: product.category.name }]
          : [],
      });
    } else {
      form.reset(defaultProductValues);
    }
  }, [form, product, mode, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            {mode === "add" ? "Add New Product" : "Edit Product"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Information */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter product name" {...field} />
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
                          onValueChange={(id) => {
                            const selectedCat = category.find(
                              (cat) => cat.id === id
                            );
                            if (selectedCat) {
                              field.onChange([
                                { id: selectedCat.id, name: selectedCat.name },
                              ]);
                            }
                          }}
                          value={field.value?.[0]?.id ?? ""}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {category.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
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
                    <FormField
                      control={form.control}
                      name="stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0"
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

                  <div className="grid grid-cols-2 gap-4">
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
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="in_stock">In Stock</SelectItem>
                              <SelectItem value="out_of_stock">
                                Out of Stock
                              </SelectItem>
                              <SelectItem value="low_stock">
                                Low Stock
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="discount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Discount</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0"
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
                            placeholder="Enter product description"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Product Images */}
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
                  {product?.images?.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {product?.images.map((img: string, index: number) => (
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
            </div>

            {/* Additional Details */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Additional Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input placeholder="0.0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dimensions (L×W×H)</FormLabel>
                        <FormControl>
                          <Input placeholder="0×0×0 cm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sku"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SKU</FormLabel>
                        <FormControl>
                          <Input placeholder="SKU-001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter brand name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="warranty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Warranty Period</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2 years" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                  name="specification"
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
                        <FormLabel>Specification</FormLabel>
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
                              placeholder="Enter specification and press comma"
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
                  name="benefits"
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
                        <FormLabel>Benefits</FormLabel>
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
                              placeholder="Enter benefits and press comma"
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
                  name="applications"
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
                        <FormLabel>Applications</FormLabel>
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
                              placeholder="Enter benefits and press comma"
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
                  name="installation"
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
                        <FormLabel>Installation</FormLabel>
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
                              placeholder="Enter benefits and press comma"
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
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button disabled={form.formState.isSubmitting} type="submit">
                {mode === "add" ? "Add Product" : "Update Product"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormDialog;
