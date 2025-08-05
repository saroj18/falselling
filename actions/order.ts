"use server";

import { IOrder, Order, StatusType } from "@/types/order";

import { Response } from "@/types/response";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { userInfo } from "os";

export const createOrder = async (
  orderInfo: Order
): Promise<Response<null>> => {
  try {
    if (!userInfo) {
      throw new Error("provide required info");
    }

    const order = await prisma.order.create({
      data: {
        discount: orderInfo.discount,
        price: orderInfo.price,
        product_id: orderInfo.product_id,
        user_id: orderInfo.user_id,
      },
    });

    if (!order) {
      throw new Error("failed to create order");
    }

    return {
      message: "product add successfully",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return { message: error.message, success: false, data: null };
  }
};

export const getAllOrders = async (): Promise<Response<IOrder[]>> => {
  try {
    const order = (await prisma.order.findMany({
      include: {
        orderedProduct: true,
        orderBy: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })) as IOrder[];

    return {
      message: "",
      success: true,
      data: order,
    };
  } catch (error: any) {
    return { message: error.message, success: false, data: null };
  }
};

export const changeStatus = async (id: string, status: StatusType) => {
  try {
    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
      },
    });
    if (!order) {
      throw new Error("failed to update status");
    }
    revalidatePath("/admin/orders");
    return {
      message: "",
      success: true,
      data: order,
    };
  } catch (error: any) {
    return { message: error.message, success: false, data: null };
  }
};

export const filterByStatus = async (
  status: StatusType | "all"
): Promise<Response<IOrder[]>> => {
  try {
    let order;
    if (status == "all") {
      order = (await prisma.order.findMany({
        include: {
          orderedProduct: true,
          orderBy: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      })) as IOrder[];
      return {
        message: "",
        success: true,
        data: order,
      };
    } else {
      order = (await prisma.order.findMany({
        include: {
          orderedProduct: true,
          orderBy: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        where: {
          status,
        },
      })) as IOrder[];

      return {
        message: "",
        success: true,
        data: order,
      };
    }
  } catch (error: any) {
    return { message: error.message, success: false, data: null };
  }
};
