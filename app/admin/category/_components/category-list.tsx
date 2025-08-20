"use client";

import { useState, useMemo } from "react";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CategoryFormDialog from "./category-form";
import CategoryDetailsDialog from "./category-details";
import { ICategory } from "@/types/category";
import { deleteCategory } from "@/actions/category";
import { toast } from "sonner";

const CategoriesContent = ({ categories }: { categories: ICategory[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categoryFormOpen, setCategoryFormOpen] = useState(false);
  const [categoryDetailsOpen, setCategoryDetailsOpen] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleAddCategory = () => {
    setFormMode("add");
    setSelectedCategory(null);
    setCategoryFormOpen(true);
  };

  const handleEditCategory = (category: any) => {
    setFormMode("edit");
    setSelectedCategory(category);
    setCategoryFormOpen(true);
  };

  const handleViewCategory = (category: any) => {
    setSelectedCategory(category);
    setCategoryDetailsOpen(true);
  };

  const handleDeleteCategory = async (id: any) => {
    setLoading(true);
    const response = await deleteCategory(id);
    if (response.success) {
      toast.success("category deleted successfully");
    }
    setLoading(false);
  };

  // Filter categories based on search input
  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const lower = search.toLowerCase();
    return categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(lower) ||
        cat.description.toLowerCase().includes(lower)
    );
  }, [categories, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Categories Management</h2>
        <Button onClick={handleAddCategory}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-center p-4 font-medium">Description</th>
                  <th className="text-center p-4 font-medium">
                    Total Products
                  </th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="p-4 ">
                      <div className="flex mx-auto items-center space-x-3">
                        <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {category.description.slice(0, 60)}...
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary">
                        {category.productCount} products
                      </Badge>
                    </td>

                    <td className="p-4 flex justify-center">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewCategory(category)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditCategory(category)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteCategory(category.id)}
                          variant="ghost"
                          size="sm"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredCategories.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-muted-foreground">
                      No categories found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <CategoryFormDialog
        open={categoryFormOpen}
        onOpenChange={setCategoryFormOpen}
        mode={formMode}
        category={selectedCategory}
      />

      <CategoryDetailsDialog
        open={categoryDetailsOpen}
        onOpenChange={setCategoryDetailsOpen}
        category={selectedCategory}
      />
    </div>
  );
};

export default CategoriesContent;
