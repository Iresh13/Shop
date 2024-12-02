import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Product, ProductSchema } from '@/schemas/product-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(): Promise<NextResponse<Product[]> | undefined> {
    try {
        const data = await getData('/products', z.array(ProductSchema))

        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('Products')
    } catch (error) {
        handleError(error, 'api')
    }
}
