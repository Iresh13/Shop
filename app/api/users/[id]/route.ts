import { NextRequest, NextResponse } from 'next/server'

import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { UserSchema } from '@/schemas/user-schema'

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        if (!id) {
            throw new NotFoundError('User')
        }

        const data = await getData({
            endpoint: `/users/${id}`,
            schema: UserSchema,
        })

        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('User')
    } catch (error) {
        handleError(error, 'api')
    }
}
