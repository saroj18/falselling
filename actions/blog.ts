"use server";

import { uploader } from "@/helper/FileUploader";
import { Response } from "@/types/response";
import { Blog, blogSchema } from "@/zod-schema/blog";
import { revalidatePath } from "next/cache";
import { IBlog } from "../types/blog";
import { prisma } from "@/utils/prisma";

export async function addBlog(blogInfo: Blog) {
  try {
    if (blogInfo.images?.length < 1) {
      throw new Error("images are required");
    }
    const validateBlog = blogSchema.safeParse(blogInfo);
    if (!validateBlog.success) {
      return {
        message: validateBlog.error.format(),
        success: true,
        data: null,
      };
    }
    const images = await uploader.upload(validateBlog.data.images);
    const blog = await prisma.blog.create({
      data: { ...validateBlog.data, images },
    });
    console.log("data>>", blog);
    if (!blog) {
      throw new Error("failed to create blog on db");
    }
    revalidatePath("/admin/blogs");
    return {
      message: "blog add successfully",
      success: true,
      data: blog,
    };
  } catch (error: any) {
    console.log("error>", error.message);
    return { message: error.message, success: false };
  }
}

export const getAllBlogs = async (): Promise<Response<IBlog[]>> => {
  try {
    const blogs = (await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    })) as IBlog[];
    return {
      message: "",
      success: true,
      data: blogs,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const getSingleBlog = async (
  id: string
): Promise<Response<IBlog>> => {
  try {
    const blog = (await prisma.blog.findUnique({
      where: { id },
    })) as IBlog;
    return {
      message: "",
      success: true,
      data: blog,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const updateBlog = async (blogInfo: any): Promise<Response<IBlog>> => {
  try {
    let { id, ...updateData } = blogInfo;
    if (updateData.images[0] instanceof File) {
      const images = await uploader.upload(updateData.images);
      updateData = { ...updateData, images };
    }
    const blog = (await prisma.blog.update({
      where: { id },
      data: updateData,
    })) as IBlog;
    if (!blog) {
      throw new Error("failed to update blog on db");
    }
    revalidatePath("/dashboard/blogs");
    return {
      message: "blog updated successfully",
      success: true,
      data: blog,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const blog = await prisma.blog.delete({ where: { id } });
    if (!blog) {
      throw new Error("failed to delete blog on db");
    }
    revalidatePath("/dashboard/blogs");
    return {
      message: "blog deleted successfully",
      success: true,
      data: blog,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
