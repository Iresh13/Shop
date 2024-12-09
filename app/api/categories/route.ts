import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { Category, CategorySchema } from '@/schemas/category-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(): Promise<NextResponse<Category[]> | undefined> {
    try {
        const data = await getData('/categories', z.array(CategorySchema))

        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('Categories')
    } catch (error) {
        handleError(error, 'api')
    }
}
