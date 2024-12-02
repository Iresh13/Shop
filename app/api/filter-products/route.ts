import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { ValidationError } from '@/lib/http-error'
import { convertObjectToQueryParams } from '@/lib/utils'
import { FilterSchema } from '@/schemas/filter-schema'
import { ProductSchema } from '@/schemas/product-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: Request) {
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

        return NextResponse.json(response)
    } catch (error) {
        return handleError(error, 'api')
    }
}
