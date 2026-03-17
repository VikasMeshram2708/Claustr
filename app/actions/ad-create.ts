"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import * as z from "zod";

const genSchema = z.object({
  name: z.string().min(1, "Name is required").max(200, "Name is too long"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description is too long"),
  audience: z
    .string()
    .min(1, "Audience is required")
    .max(200, "Audience is too long"),
  age: z.string().min(1, "Age is required").max(200, "Age is too long"),
  goal: z.string().min(1, "Goal is required").max(200, "Goal is too long"),
  style: z.string().min(1, "Style is required").max(200, "Style is too long"),
  length: z
    .string()
    .min(1, "Length is required")
    .max(200, "Length is too long"),
  type: z.string().min(1, "Type is required").max(200, "Type is too long"),
});

type genSchema = z.infer<typeof genSchema>;

export type AdGenActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [k in keyof genSchema]?: string[];
  };
  inputs?: genSchema;
};

export async function createAdGen(
  _prevState: unknown,
  formData: FormData,
): Promise<AdGenActionResponse> {
  try {
    const raw = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      audience: formData.get("audience") as string,
      age: formData.get("age") as string,
      goal: formData.get("goal") as string,
      style: formData.get("style") as string,
      length: formData.get("length") as string,
      type: formData.get("type") as string,
    };

    // auth check
    const authorized = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authorized?.session) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    // sanitize
    const sanitized = genSchema.safeParse(raw);
    console.log("raw", raw);

    if (!sanitized.success) {
      return {
        success: false,
        message: "Invalid payload",
        errors: z.flattenError(sanitized.error).fieldErrors,
        inputs: sanitized.data,
      };
    }

    // ai operation

    // respond
    return {
      success: true,
      message: "Ok",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong. Internal server error",
    };
  }
}
