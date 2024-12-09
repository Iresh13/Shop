import axios from 'axios'
import { ZodSchema } from 'zod'

import { handleError } from '@/lib/handlers/error'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PLATZI_URL,
})

interface getDataProps {
    endpoint: string
    schema?: ZodSchema
}

export const getData = async (params: getDataProps) => {
    try {
        const response = await api.get(params.endpoint)

        if (params.schema) {
            return params.schema.safeParse(response.data)
        }

        return response.data
    } catch (error) {
        handleError(error, 'api')
    }
}
