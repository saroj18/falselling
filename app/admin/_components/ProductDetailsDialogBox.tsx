"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Edit, Trash2, Star, Share, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    stock: number;
    status: string;
  } | null;
}

const ProductDetailsDialog = ({ open, onOpenChange, product }: ProductDetailsDialogProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Product Details - {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Action Bar */}
          <div className="flex items-center justify-between border-b pb-4">
            <Badge 
              variant={
                product.status === 'In Stock' ? 'default' : 
                product.status === 'Low Stock' ? 'secondary' : 'destructive'
              }
              className="text-sm"
            >
              {product.status}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Images */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Package className="h-24 w-24 text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded border-2 border-transparent hover:border-primary cursor-pointer flex items-center justify-center">
                        <Package className="h-6 w-6 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Product Name</label>
                    <p className="text-lg font-semibold">{product.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Category</label>
                    <p className="text-sm">{product.category}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Price</label>
                      <p className="text-xl font-bold text-primary">{product.price}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Stock</label>
                      <p className="text-lg font-semibold">{product.stock} units</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">SKU</label>
                    <p className="text-sm font-mono">PRD-{product.id.toString().padStart(4, '0')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.8 out of 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 156 reviews</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                This high-quality {product.name} is perfect for modern ceiling installations. 
                Made with premium materials and designed for durability, it offers excellent 
                acoustic properties and easy installation. Suitable for both residential and 
                commercial applications.
              </p>
            </CardContent>
          </Card>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Material</span>
                  <span className="text-sm font-medium">Gypsum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Dimensions</span>
                  <span className="text-sm font-medium">60cm × 60cm × 2cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Weight</span>
                  <span className="text-sm font-medium">2.5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Color</span>
                  <span className="text-sm font-medium">White</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Warranty</span>
                  <span className="text-sm font-medium">2 years</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Sales</span>
                  <span className="text-sm font-medium">1,247 units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="text-sm font-medium">$32,421.53</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Last Sale</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Views (30 days)</span>
                  <span className="text-sm font-medium">3,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  <span className="text-sm font-medium">12.3%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">ceiling</Badge>
                <Badge variant="outline">acoustic</Badge>
                <Badge variant="outline">gypsum</Badge>
                <Badge variant="outline">commercial</Badge>
                <Badge variant="outline">residential</Badge>
                <Badge variant="outline">fire-resistant</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;