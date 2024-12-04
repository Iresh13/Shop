import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Product, ProductSchema } from '@/schemas/product-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(
    request: Request
): Promise<NextResponse<Product[]> | undefined> {
    const url = new URL(request.url)

    const limit = url.searchParams.get('limit') || '10'
    const offset = url.searchParams.get('offset') || '0'

    try {
        const data = await getData(
            `/products?limit=${limit}&offset=${offset}`,
            z.array(ProductSchema)
        )

        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('Products')
    } catch (error) {
        handleError(error, 'api')
    }
}
