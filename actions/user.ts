"use server";

import { Response } from "@/types/response";
import { IUser } from "@/types/user";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const getAllUsers = async (): Promise<Response<IUser[]>> => {
  try {
    const users = (await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })) as IUser[];
    console.log("ser>", users);
    return {
      message: "",
      success: true,
      data: users,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const blockUser = async (id: string): Promise<Response<null>> => {
  try {
    const userInfo = await getServerSession(authOptions);
    if ((userInfo?.user as any).role != "Admin") {
      return {
        message: "You are not authorized for this task",
        success: false,
        data: null,
      };
    }
    const users = await prisma.user.update({
      where: { id },
      data: {
        status: "Blocked",
      },
    });
    revalidatePath("/admin/users");
    return {
      message: "",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
export const unBlockUser = async (id: string): Promise<Response<IUser[]>> => {
  try {
    const userInfo = await getServerSession(authOptions);
    if ((userInfo?.user as any).role != "Admin") {
      return {
        message: "You are not authorized for this task",
        success: false,
        data: null,
      };
    }

    const users = await prisma.user.update({
      where: { id },
      data: {
        status: "Active",
      },
    });
    revalidatePath("/admin/users");
    return {
      message: "",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const deleteUser = async (id: string): Promise<Response<IUser[]>> => {
  try {
    const userInfo = await getServerSession(authOptions);
    if ((userInfo?.user as any).role != "Admin") {
      return {
        message: "You are not authorized for this task",
        success: false,
        data: null,
      };
    }

    const findUser = await prisma.user.findUnique({ where: { id } });
    if (findUser?.id == id) {
      return {
        message: "You are not authorized for this task",
        success: false,
        data: null,
      };
    }

    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/users");
    return {
      message: "",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const updateUserInfo = async (
  id: string,
  userUpdatedInfo: any
): Promise<Response<null>> => {
  try {
    const userInfo = await getServerSession(authOptions);

    const findUser = await prisma.user.findUnique({ where: { id } });
    if (!findUser) {
      return {
        message: "User not found",
        success: false,
        data: null,
      };
    }
    console.log(findUser.id);
    console.log(id);
    if (findUser?.id != id) {
      return {
        message: "You are not authorized for this task",
        success: false,
        data: null,
      };
    }

    await prisma.user.update({
      where: { id },
      data: {
        firstname: userUpdatedInfo.firstName,
        lastname: userUpdatedInfo.lastName,
        email: userUpdatedInfo.email,
        phone: userUpdatedInfo.phone,
      },
    });
    revalidatePath("/dashboard/profile");
    return {
      message: "UserInfo update successfully",
      success: true,
      data: null,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const getSingleUser = async (id: string): Promise<Response<IUser>> => {
  try {
    const findUser = (await prisma.user.findUnique({ where: { id } })) as IUser;
    if (!findUser) {
      return {
        message: "User not found",
        success: false,
        data: null,
      };
    }

    return {
      message: "",
      success: true,
      data: findUser,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};
