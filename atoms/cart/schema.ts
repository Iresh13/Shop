import { ProductSchema } from '@/schemas/product-schema'
import { z } from 'zod'

export const CartSchema = ProductSchema.extend({
    quantity: z.number(),
})

export type Cart = z.infer<typeof CartSchema>
