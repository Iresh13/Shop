import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Category, CategorySchema } from '@/schemas/category-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<Category> | undefined> {
    const { id } = await params

    if (!id) {
        throw new NotFoundError('Category')
    }

    try {
        const data = await getData(`/categories/${id}`, CategorySchema)
        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('Categories')
    } catch (error) {
        handleError(error, 'api')
    }
}
