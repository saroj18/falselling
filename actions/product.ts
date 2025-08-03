"use server";

import { uploader } from "@/helper/FileUploader";
import { prisma } from "@/utils/prisma";
import { ProductFormData, productSchema } from "@/zod-schema/product";

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
    return {
      message: "product add successfully",
      success: true,
      data: product,
    };
  } catch (error: any) {
    return { message: error.message, success: false, data: null };
  }
}
