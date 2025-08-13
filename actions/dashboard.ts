"use server";

import { prisma } from "@/utils/prisma";

export const getDashboardData = async () => {
  try {
    const totalUser = await prisma.user.count();
    const totalProduct = await prisma.product.count();
    const totalOrder = await prisma.product.count();
    const totalRevenue = await prisma.order.findMany({
      where: { status: "COMPLETED" },
    });
    let total = 0;
    totalRevenue.forEach((order) => {
      total += Number(order.price);
    });

    return {
      message: "",
      success: true,
      data: {
        totalOrder,
        totalProduct,
        totalUser,
        totalRevenue: total,
      },
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
