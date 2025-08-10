"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, PencilLine, Eye, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { IGallery } from "@/types/gallery";
import GalleryPreviewDialog from "./preview-dialog";
import GalleryEditDialog from "./edit-dialog";
import GalleryFormDialog from "./form-dialog";
import Image from "next/image";
import { deleteGallery } from "@/actions/gallery";
import { toast } from "sonner";

const GalleryContent = ({ images }: { images: IGallery[] }) => {
  const [items, setItems] = useState<IGallery[]>([]);
  const [previewItem, setPreviewItem] = useState<IGallery | null>(null);
  const [editingItem, setEditingItem] = useState<IGallery | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Edit item
  const handleSaveEdit = async (updatedItem: IGallery) => {};

  const handleCreateItems = async (data: any) => {
    console.log(data);
  };

  const removeItem = async (id: string) => {
    const response = await deleteGallery(id);
    if (response.success) {
      toast.success("gallery deleted successfully");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Gallery</h2>
          <p className="text-sm text-muted-foreground">
            Upload, edit, and manage your images
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => setCreateOpen(true)}>
            <span className="inline-flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Images
            </span>
          </Button>
          {/* <div className="text-sm text-muted-foreground">{count} items</div> */}
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardTitle className="px-3">{item.title}</CardTitle>
              <div className="h-[130px] w-full flex items-center justify-center">
                <Image
                  alt="product image"
                  src={item.images[0]}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>

              <CardContent className="py-0 space-y-2">
                {item.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.location && (
                  <p className="text-xs">
                    <span className="text-muted-foreground">Location:</span>{" "}
                    {item.location}
                  </p>
                )}
                {!!item.tags?.length && (
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-[10px] text-muted-foreground">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewItem(item)}
                >
                  <Eye className="h-4 w-4 mr-1" /> View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingItem(item)}
                >
                  <PencilLine className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <GalleryPreviewDialog
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />

      <GalleryEditDialog
        item={editingItem}
        onClose={() => setEditingItem(null)}
        onSave={handleSaveEdit}
      />

      <GalleryFormDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreate={handleCreateItems}
      />
    </div>
  );
};

export default GalleryContent;
