"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, Calendar, Edit } from "lucide-react";
import { ICategory } from "@/types/category";

interface CategoryDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: ICategory
}

const CategoryDetailsDialog = ({
  open,
  onOpenChange,
  category,
}: CategoryDetailsDialogProps) => {
  if (!category) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Category Details- <span className="text-green-500">{category.name}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Category Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Package className="h-4 w-4" />
                  Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {category.productCount || 0}
                </p>
                <p className="text-sm text-muted-foreground">Total products</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  Last Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Days ago</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {category.description || "No description available"}
              </p>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Category ID:
                </span>
                <span className="text-sm font-medium">{category.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Created:</span>
                <span className="text-sm font-medium">
                  {new Date(category?.createdAt).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDetailsDialog;
