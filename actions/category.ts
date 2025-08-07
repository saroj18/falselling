"use server";

import { ICategory } from "@/types/category";
import { Response } from "@/types/response";
import { prisma } from "@/utils/prisma";
import { CategoryFormData, categorySchema } from "@/zod-schema/category";
import { revalidatePath } from "next/cache";

export async function addCategory(CategoryInfo: CategoryFormData) {
  try {
    const validCategory = categorySchema.safeParse(CategoryInfo);
    if (!validCategory.success) {
      return {
        message: validCategory.error.format(),
        success: true,
        data: null,
      };
    }
    const category = await prisma.category.create({
      data: { ...validCategory.data },
    });
    if (!category) {
      throw new Error("failed to create category on db");
    }
    revalidatePath("/admin/category");
    return {
      message: "category create successfully",
      success: true,
      data: category,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export const getAllCategory = async (): Promise<Response<ICategory[]>> => {
  try {
    const category = (await prisma.category.findMany({
      include: {
        products: true,
      },
      orderBy: [
        {
          createdAt: "desc" as "desc" | undefined,
        },
      ],
    })) as (ICategory & { products: any[] })[];
    const categoriesWithProductCount = category.map((cat) => ({
      ...cat,
      productCount: cat.products.length,
    }));
    return {
      message: "",
      success: true,
      data: categoriesWithProductCount,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const getSingleCategory = async (
  id: string
): Promise<Response<ICategory>> => {
  try {
    const category = (await prisma.category.findUnique({
      where: { id },
    })) as ICategory;
    return {
      message: "",
      success: true,
      data: category,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const updateCategory = async (
  id: string,
  categoryInfo: { name: string; description: string }
): Promise<Response<ICategory>> => {
  try {
    const category = (await prisma.category.update({
      where: { id },
      data: categoryInfo,
    })) as ICategory;
    if (!category) {
      throw new Error("failed to update category on db");
    }
    revalidatePath("/dashboard/category");
    return {
      message: "product updated successfully",
      success: true,
      data: category,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const category = await prisma.category.delete({ where: { id } });
    if (!category) {
      throw new Error("failed to delete category on db");
    }
    revalidatePath("/dashboard/category");
    return {
      message: "category deleted successfully",
      success: true,
      data: category,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
