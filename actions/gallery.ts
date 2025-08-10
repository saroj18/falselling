"use server";

import { uploader } from "@/helper/FileUploader";
import { IGallery } from "@/types/gallery";
import { Response } from "@/types/response";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function addPhotoOnGallery(galleryInfo: any) {
  try {
    if (galleryInfo.images?.length < 1) {
      throw new Error("images are required");
    }

    const images = await uploader.upload(galleryInfo.images);
    console.log("image>>", galleryInfo.images);
    const gallery = await prisma.gallery.create({
      data: {
        ...galleryInfo,
        images,
      },
    });
    if (!gallery) {
      throw new Error("failed to create gallery on db");
    }
    revalidatePath("/admin/gallery");
    return {
      message: "image add successfully",
      success: true,
      data: gallery,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export const getAllPhotos = async (): Promise<Response<IGallery[]>> => {
  try {
    const gallery = (await prisma.gallery.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })) as IGallery[];
    return {
      message: "",
      success: true,
      data: gallery,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const updateGallery = async (
  id: string,
  galleryInfo: any
): Promise<Response<IGallery>> => {
  try {
    const gallery = (await prisma.gallery.update({
      where: { id },
      data: galleryInfo,
    })) as IGallery;
    if (!gallery) {
      throw new Error("failed to update gallery on db");
    }
    revalidatePath("/dashboard/gallery");
    return {
      message: "product updated successfully",
      success: true,
      data: gallery,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};


export const deleteGallery = async (id: string) => {
  try {
    const gallery = await prisma.gallery.delete({ where: { id } });
    if (!gallery) {
      throw new Error("failed to delete gallery on db");
    }
    revalidatePath("/dashboard/gallery");
    return {
      message: "gallery deleted successfully",
      success: true,
      data: gallery,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};