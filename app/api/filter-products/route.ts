import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError, ValidationError } from '@/lib/http-error'
import { convertObjectToQueryParams } from '@/lib/utils'
import { FilterSchema } from '@/schemas/filter-schema'
import { Product, ProductSchema } from '@/schemas/product-schema'

export async function POST(
    request: NextRequest
): Promise<NextResponse<Product[]> | undefined> {
    const body = await request.json()

    const validatedFilters = await FilterSchema.safeParse(body)

    if (!validatedFilters.success) {
        throw new ValidationError(validatedFilters.error.flatten().fieldErrors)
    }

    const queryParams = convertObjectToQueryParams(validatedFilters.data)

    try {
        const response = await getData({
            endpoint: `/products/?${queryParams}`,
            schema: z.array(ProductSchema),
        })

        if (response) {
            return NextResponse.json(response)
        }

        throw new NotFoundError('Products')
    } catch (error) {
        handleError(error, 'api')
    }
}
