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
      <DialogContent className="max-w-4xl">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {item?.title}
          </DialogTitle>
          {/* <DialogDescription className="text-base text-gray-600">
            {item?.description}
          </DialogDescription> */}
        </DialogHeader>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {item?.images.map((image) => (
            <div
              key={image}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md group"
            >
              <Image
                alt="Project image"
                src={image}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Project Info */}
        {item && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border space-y-1">
            {item.location && (
              <p className="text-sm">
                <span className="font-semibold text-gray-800">
                  📍 Location:
                </span>{" "}
                {item.location}
              </p>
            )}
            {item.tags?.length ? (
              <p className="text-sm">
                <span className="font-semibold text-gray-800">🏷 Tags:</span>{" "}
                {item.tags.join(", ")}
              </p>
            ) : null}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryPreviewDialog;
