import { getData } from '@/app/services/platzi'
import { handleError } from '@/lib/handlers/error'
import { NotFoundError } from '@/lib/http-error'
import { UserSchema } from '@/schemas/user-schema'
import { NextResponse } from 'next/server'

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params

    if (!id) {
        throw new NotFoundError('User')
    }

    try {
        const data = await getData(`/users/${id}`, UserSchema)

        if (data) {
            return NextResponse.json(data?.data)
        }

        throw new NotFoundError('User')
    } catch (error) {
        handleError(error, 'api')
    }
}
