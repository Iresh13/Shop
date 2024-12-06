import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError, ValidationError } from '@/lib/http-error'
import { convertObjectToQueryParams } from '@/lib/utils'
import { FilterSchema } from '@/schemas/filter-schema'
import { ProductSchema } from '@/schemas/product-schema'

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams

        const query = {
            title: searchParams.get('title'),
            limit: Number(searchParams.get('limit') || 0),
            offset: Number(searchParams.get('offset') || 0),
            price_min: Number(searchParams.get('price_min') || 0),
            price_max: Number(searchParams.get('price_max') || 0),
        }

        const validatedFilters = await FilterSchema.partial().safeParse(query)

        if (!validatedFilters.success) {
            throw new ValidationError(
                validatedFilters.error.flatten().fieldErrors
            )
        }

        const queryParams = convertObjectToQueryParams(validatedFilters.data)

        const response = await getData({
            endpoint: `/products?categoryId=3&${queryParams} `,
            schema: z.array(ProductSchema),
        })

        if (response) {
            return NextResponse.json(response)
        }

        throw new NotFoundError('Furniture')
    } catch (error) {
        handleError(error, 'api')
    }
}
