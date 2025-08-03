"use client";

import { useState } from "react";
import { Plus, Search, Filter, Eye, Edit, Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductDetailsDialog from "../../_components/ProductDetailsDialogBox";
import ProductFormDialog from "../../_components/ProductDialogForm";
import { IProduct } from "@/types/product";
import Image from "next/image";

type ProductsContentProps = {
  products: IProduct[];
};

const ProductsContent = ({ products }: ProductsContentProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [productFormOpen, setProductFormOpen] = useState(false);
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");

  const handleAddProduct = () => {
    setFormMode("add");
    setSelectedProduct(null);
    setProductFormOpen(true);
  };

  const handleEditProduct = (product: any) => {
    setFormMode("edit");
    setSelectedProduct(product);
    setProductFormOpen(true);
  };

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setProductDetailsOpen(true);
  };

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Products Management</h2>
        <Button onClick={handleAddProduct}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-10" />
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
                  <th className="text-left p-4 font-medium">Product</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Stock</th>
                  <th className="text-left p-4 font-medium">Weight</th>
                  <th className="text-left p-4 font-medium">Warranty</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                          <Image
                            alt="product image"
                            src={product.images[0]}
                            width={50}
                            height={50}
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {product.category}
                    </td>
                    <td className="p-4 font-medium">{product.price}</td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{product.weight}</td>
                    <td className="p-4">{product.warranty}</td>
                    <td className="p-4">
                      <Badge
                        variant={
                          product.status === "in_stock"
                            ? "default"
                            : product.status === "low_stock"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewProduct(product)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditProduct(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <ProductFormDialog
        open={productFormOpen}
        onOpenChange={setProductFormOpen}
        mode={formMode}
        product={selectedProduct}
      />

      <ProductDetailsDialog
        open={productDetailsOpen}
        onOpenChange={setProductDetailsOpen}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductsContent;
