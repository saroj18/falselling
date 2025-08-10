"use client";

import { useEffect, useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { addPhotoOnGallery } from "@/actions/gallery";
import { IGallery } from "@/types/gallery";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GalleryFormDialog = ({ open, onOpenChange }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setFiles([]);
    setDescription("");
    setTagInput("");
    setTitle("");
    setTags([]);
    setLocation("");
  };

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const value = tagInput.trim().replace(/,$/, "");
      if (value && !tags.includes(value)) {
        setTags([...tags, value]);
      }
      setTagInput("");
    }
    if (e.key === "Backspace" && !tagInput && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!files.length) {
      onOpenChange(false);
      return;
    }
    try {
      setSubmitting(true);
      const response = await addPhotoOnGallery({
        description,
        images: files,
        tags,
        location,
        title,
      });
      if (response.success) {
        toast.success("image add successfully");
      }
      onOpenChange(false);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Add Images to Gallery</DialogTitle>
          <DialogDescription>
            Select one or more images and provide optional details like
            description, tags, and location.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Images</label>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Short description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-2 py-1 rounded flex items-center text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-1 text-gray-500 hover:text-red-500"
                    onClick={() => removeTag(idx)}
                    aria-label="Remove tag"
                  >
                    ×
                  </button>
                </span>
              ))}
              <Input
                className="w-auto min-w-[120px] flex-1"
                placeholder="Add tag"
                value={tagInput}
                onChange={handleTagInput}
                onKeyDown={handleTagKeyDown}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Type a tag and press <b>Enter</b> or <b>,</b>. Example: kitchen,
              POP, false ceiling
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Input
              placeholder="e.g. Mumbai, India"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={submitting}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Adding..." : "Add to Gallery"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryFormDialog;
