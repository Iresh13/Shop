import { NextRequest, NextResponse } from 'next/server'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Product, ProductSchema } from '@/schemas/product-schema'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Product> | undefined> {
    try {
        const { id } = await params

        if (!id) {
            throw new NotFoundError('Product')
        }

        const data = await getData({
            endpoint: `/products/${id}`,
            schema: ProductSchema,
        })

        if (data) {
            return NextResponse.json(data)
        }

        throw new NotFoundError('Product')
    } catch (error) {
        handleError(error, 'api')
    }
}
