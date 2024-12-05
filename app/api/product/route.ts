import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Product, ProductSchema } from '@/schemas/product-schema'

export async function GET(
    request: NextRequest
): Promise<NextResponse<Product[]> | undefined> {
    const url = new URL(request.url)

    const limit = url.searchParams.get('limit') || '10'
    const offset = url.searchParams.get('offset') || '0'

    try {
        const data = await getData({
            endpoint: `/products?limit=${limit}&offset=${offset}`,
            schema: z.array(ProductSchema),
        })

        if (data) {
            return NextResponse.json(data.data)
        }

        throw new NotFoundError('Products')
    } catch (error) {
        handleError(error, 'api')
    }
}
