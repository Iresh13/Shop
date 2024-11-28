import { getData } from "@/app/services/platzi";
import { handleError } from "@/lib/handlers/error";
import { CategorySchema } from "@/schemas/category-schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  try {
    const data = await getData("/categories", z.array(CategorySchema));

    return NextResponse.json(data?.data);
  } catch (error) {
    handleError(error, "api");
  }
}
