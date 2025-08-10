"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { IGallery } from "@/types/gallery";
import Image from "next/image";

interface Props {
  item: IGallery | null;
  onClose: () => void;
}

const GalleryPreviewDialog = ({ item, onClose }: Props) => {
  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{item?.title}</DialogTitle>
          <DialogDescription>{item?.description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2 justify-center items-center w-full">
          {item &&
            item.images.map((image) => (
              <Image
                key={image}
                alt="product image"
                src={image}
                width={100}
                height={100}
                className="border-2 border-gray-500"
              />
            ))}
        </div>
        {item && (
          <div className="text-sm text-muted-foreground space-y-1">
            {item.location && (
              <p>
                <strong>Location:</strong> {item.location}
              </p>
            )}
            {item.tags?.length ? (
              <p>
                <strong>Tags:</strong> {item.tags.join(", ")}
              </p>
            ) : null}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryPreviewDialog;
