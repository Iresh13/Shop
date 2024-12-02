import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError, ValidationError } from '@/lib/http-error'
import { convertObjectToQueryParams } from '@/lib/utils'
import { FilterSchema } from '@/schemas/filter-schema'
import { Product, ProductSchema } from '@/schemas/product-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(
    request: Request
): Promise<NextResponse<Product[]> | undefined> {
    const body = await request.json()

    const validatedFilters = await FilterSchema.safeParse(body)

    if (!validatedFilters.success) {
        throw new ValidationError(validatedFilters.error.flatten().fieldErrors)
    }

    const queryParams = convertObjectToQueryParams(validatedFilters.data)

    try {
        const response = await getData(
            `/products/?${queryParams}`,
            z.array(ProductSchema)
        )

        if (response) {
            return NextResponse.json(response)
        }

        throw new NotFoundError('Products')
    } catch (error) {
        return handleError(error, 'api')
    }
}
