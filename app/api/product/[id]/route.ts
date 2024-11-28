import { getData } from "@/app/services/platzi";
import { handleError } from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-error";
import { ProductSchema } from "@/schemas/product-schema";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    throw new NotFoundError("Product");
  }

  try {
    const data = await getData(`/products/${id}`, ProductSchema);

    return NextResponse.json(data);
  } catch (error) {
    handleError(error, "api");
  }
}
