"use server";

import { uploader } from "@/helper/FileUploader";
import { ICategory } from "@/types/category";
import { Response } from "@/types/response";
import { IService } from "@/types/service";
import { prisma } from "@/utils/prisma";
import { CategoryFormData, categorySchema } from "@/zod-schema/category";
import { ServiceFormData, serviceSchema } from "@/zod-schema/service";
import { revalidatePath } from "next/cache";

export async function addService(
  ServiceInfo: ServiceFormData,
  features: string[] = []
) {
  try {
    const validService = serviceSchema.safeParse(ServiceInfo);

    if (!validService.success) {
      return {
        message: validService.error.format(),
        success: true,
        data: null,
      };
    }
    const service = await prisma.service.create({
      data: { ...validService.data, features },
    });
    if (!service) {
      throw new Error("failed to create service on db");
    }
    revalidatePath("/admin/services");
    return {
      message: "service create successfully",
      success: true,
      data: service,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export const getAllServices = async (): Promise<Response<IService[]>> => {
  try {
    const servicesRaw = (await prisma.service.findMany()) as any[];
    const services: IService[] = servicesRaw.map((service) => ({
      ...service,
      status: service.status === "Inactive" ? "inactive" : "active",
    }));
    return {
      message: "",
      success: true,
      data: services,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
export const getServiceById = async (
  id: string
): Promise<Response<IService | null>> => {
  try {
    const service = (await prisma.service.findUnique({
      where: { id },
    })) as IService | null;
    if (!service) {
      return {
        message: "Service not found",
        success: false,
        data: null,
      };
    }
    return {
      message: "",
      success: true,
      data: service,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export async function updateService(
  id: string,
  ServiceInfo: ServiceFormData,
  features: string[] = []
) {
  try {
    const validService = serviceSchema.safeParse(ServiceInfo);

    if (!validService.success) {
      return {
        message: validService.error.format(),
        success: true,
        data: null,
      };
    }
    const service = await prisma.service.update({
      where: { id },
      data: { ...validService.data, features },
    });
    if (!service) {
      throw new Error("failed to update service on db");
    }
    revalidatePath("/admin/services");
    return {
      message: "service updated successfully",
      success: true,
      data: service,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export async function deleteService(id: string) {
  try {
    const service = await prisma.service.delete({
      where: { id },
    });
    if (!service) {
      throw new Error("failed to delete service on db");
    }
    revalidatePath("/admin/service");
    return {
      message: "service deleted successfully",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}
