"use server";

import { uploader } from "@/helper/FileUploader";
import { IContact } from "@/types/contact";
import { IProduct } from "@/types/product";
import { Response } from "@/types/response";
import { sendEmail } from "@/utils/mailer";
import { prisma } from "@/utils/prisma";
import { ContactFormInputs, contactFormSchema } from "@/zod-schema/contact";
import { revalidatePath } from "next/cache";

export async function sendContact(contactInfo: ContactFormInputs) {
  try {
    const validationContact = contactFormSchema.safeParse(contactInfo);
    if (!validationContact.success) {
      return {
        message: validationContact.error.format(),
        success: true,
        data: null,
      };
    }
    console.log(validationContact.data);
    const product = await prisma.contact.create({
      data: {
        ...validationContact.data,
      },
    });
    if (!product) {
      throw new Error("failed to create contact on db");
    }
    await sendEmail(
      "abc@gmail.com",
      "just for testing",
      "this is demo mail message"
    );
    revalidatePath("/admin/contact");
    return {
      message: "message sent successfully",
      success: true,
      data: product,
    };
  } catch (error: any) {
    return { message: error.message, success: false };
  }
}

export const getAllContacts = async (): Promise<Response<IContact[]>> => {
  try {
    const contacts = (await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })) as IContact[];
    return {
      message: "",
      success: true,
      data: contacts,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const getSingleContent = async (
  id: string
): Promise<Response<IContact>> => {
  try {
    const contact = (await prisma.contact.findUnique({
      where: { id },
    })) as IContact;
    return {
      message: "",
      success: true,
      data: contact,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const deleteContact = async (id: string) => {
  try {
    const contact = await prisma.contact.delete({ where: { id } });
    if (!contact) {
      throw new Error("failed to delete contact on db");
    }
    revalidatePath("/dashboard/contact");
    return {
      message: "contact deleted successfully",
      success: true,
      data: contact,
    };
  } catch (error: any) {
    return {
      message: error.message || "internal server error",
      success: false,
      data: null,
    };
  }
};

export const markAsReadContact = async (
  id: string
): Promise<Response<null>> => {
  try {
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        status: "Read",
      },
    });
    if (!contact) {
      throw new Error("failed to update contact on db");
    }
    revalidatePath("/dashboard/contact");
    return {
      message: "contact update successfully",
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
export const markAsUnReadContact = async (
  id: string
): Promise<Response<null>> => {
  try {
    const contact = await prisma.contact.update({
      where: { id },
      data: {
        status: "Unread",
      },
    });
    if (!contact) {
      throw new Error("failed to update contact on db");
    }
    revalidatePath("/dashboard/contact");
    return {
      message: "contact update successfully",
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
