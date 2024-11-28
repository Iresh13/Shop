import { getData } from "@/app/services/platzi";
import { handleError } from "@/lib/handlers/error";
import { ProductSchema } from "@/schemas/product-schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  try {
    const data = await getData("/products", z.array(ProductSchema));

    return NextResponse.json(data?.data);
  } catch (error) {
    handleError(error, "api");
  }
}
