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
import { TrendingUp } from "lucide-react";
import { CategoryFormData, categorySchema } from "@/zod-schema/category";
import { addCategory, updateCategory } from "@/actions/category";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CategoryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
  category?: {
    id: number;
    name: string;
    description: string;
  } | null;
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
      });
    }
  }, [open, category, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {mode === "add" ? "Add New Category" : "Edit Category"}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
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
