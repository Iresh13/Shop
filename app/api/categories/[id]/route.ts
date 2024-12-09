import { NextRequest, NextResponse } from 'next/server'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Category, CategorySchema } from '@/schemas/category-schema'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Category> | undefined> {
    try {
        const { id } = await params

        if (!id) {
            throw new NotFoundError('Category')
        }

        const data = await getData({
            endpoint: `/categories/${id}`,
            schema: CategorySchema,
        })
        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('Categories')
    } catch (error) {
        handleError(error, 'api')
    }
}
