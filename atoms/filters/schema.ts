import { z } from 'zod'

export const FilterSchema = z.object({
    title: z.string().optional(),
    price_min: z.number().optional(),
    price_max: z.number().optional(),
    categoryId: z.number().optional(),
})

export type Filter = z.infer<typeof FilterSchema>
