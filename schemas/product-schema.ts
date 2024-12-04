import { z } from 'zod'
import { CategorySchema } from './category-schema'

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    images: z.array(z.string()),
    category: CategorySchema,
    creationAt: z.string(),
    updatedAt: z.string(),
})

export type Product = z.infer<typeof ProductSchema>
