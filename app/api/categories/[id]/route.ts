import { getData } from "@/app/services/platzi";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-error";
import { CategorySchema } from "@/schemas/category-schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    throw new NotFoundError("Category");
  }

  try {
    const data = await getData(`/categories/${id}`, CategorySchema);

    return NextResponse.json(data?.data);
  } catch (error) {
    handleError(error, "api");
  }
}
