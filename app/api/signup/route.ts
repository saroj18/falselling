import { ApiError } from "@/helper/ApiError";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";
import { asyncHandler } from "@/helper/AsyncHandler";
import { userZodSchema } from "@/zod-schema/user";

export const POST = asyncHandler(async (req, context?: Promise<any>) => {
  const { email, password, firstname, confirmPassword, lastname, phone } =
    await req.json();
  const validateInfo = await userZodSchema.parseAsync({
    email,
    password,
    confirmPassword,
    phone,
    firstname,
    lastname,
  });

  const findUser = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: validateInfo.email,
        },
        {
          phone: validateInfo.phone,
        },
      ],
    },
  });

  if (findUser) {
    throw new ApiError("User already exists");
  }

  const hashedPassword = await bcrypt.hash(validateInfo.password, 10);

  const createUser = await prisma.user.create({
    data: {
      email: validateInfo.email,
      password: hashedPassword,
      firstname: validateInfo.firstname,
      lastname: validateInfo.lastname,
      phone: validateInfo.phone,
    },
  });

  if (!createUser) {
    throw new ApiError("User not created");
  }
  console.log(createUser);
  return NextResponse.json(
    { message: "Signup Successfully", data: createUser },
    { status: 200 }
  );
});
