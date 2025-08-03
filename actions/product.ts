"use server";

import { uploader } from "@/helper/FileUploader";
import { IProduct } from "@/types/product";
import { Response } from "@/types/response";
import { prisma } from "@/utils/prisma";
import { ProductFormData, productSchema } from "@/zod-schema/product";
import { revalidatePath } from "next/cache";

export async function addProduct(productInfo: ProductFormData) {
  try {
    if (productInfo.images?.length < 1) {
      throw new Error("images are required");
    }
    const validateProduct = productSchema.safeParse(productInfo);
    if (!validateProduct.success) {
      return {
        message: validateProduct.error.format(),
        success: true,
        data: null,
      };
    }
    const images = await uploader.upload(validateProduct.data.images);
    console.log(validateProduct.data);
    const product = await prisma.product.create({
      data: { ...validateProduct.data, images },
    });
    if (!product) {
      throw new Error("failed to create product on db");
    }
    revalidatePath("/admin/product");
    return {
      message: "product add successfully",
      success: true,
      data: product,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export const getAllProducts = async (): Promise<Response<IProduct[]>> => {
  try {
    const products = (await prisma.product.findMany()) as IProduct[];
    console.log("ddd>>>>>>>>>>>>>>>", products);
    return {
      message: "",
      success: true,
      data: products,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
