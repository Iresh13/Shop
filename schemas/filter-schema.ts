import { z } from 'zod'

export const FilterSchema = z.object({
    title: z.string().optional(),
    limit: z.number().optional(),
    offset: z.number().optional(),
    price_min: z.number().optional(),
    price_max: z.number().optional(),
    categoryId: z.number().optional(),
})
