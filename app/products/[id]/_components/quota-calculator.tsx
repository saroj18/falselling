import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Home, ArrowRight } from "lucide-react";
import { IProduct } from "@/types/product";
import { createOrder } from "@/actions/order";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Quote = ({ product, userId }: { product: IProduct; userId: string }) => {
  const [area, setArea] = useState("");
  const router = useRouter();

  const estimatedPrice = area
    ? parseFloat(area) * product.price -
      (product.price * product.discount) / 100
    : 0;

  const handleGetDetailedQuote = async () => {
    if (!userId) {
      router.push("/auth/login");
      return;
    }
    const response = await createOrder({
      discount: String(product.discount),
      price: String(estimatedPrice),
      product_id: product.id,
      user_id: userId,
    });
    if (response.success) {
      toast.success("order created successfully");
    } else {
      toast.error("failed to create order");
    }
  };

  return (
    <div className="my-4 gap-8">
      <Card className="lg:sticky lg:top-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            Price Calculator
          </CardTitle>
          <CardDescription>
            Enter your area's size and find estd.cost
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="area">Area (Square Feet)</Label>
            <Input
              id="area"
              type="number"
              placeholder="Enter total area in sq ft"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="text-lg"
            />
          </div>

          {area && (
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Estimated Total Cost
                </p>
                <p className="text-3xl font-bold text-primary">
                  NPR {estimatedPrice}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {area} sq ft × NPR{" "}
                  {product.price - (product.price * product.discount) / 100}/sq
                  ft
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleGetDetailedQuote}
                  className="w-full group"
                  size="lg"
                >
                  Request for Order
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  * This is an estimated price. Final quote will be provided
                  after site inspection.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Quote;
