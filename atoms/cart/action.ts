import { z } from 'zod'
import { CartSchema } from './schema'

export const CartActions = {
    setProductCart: 'SET_PRODUCT_CART',
    updateProductCart: 'UPDATE_PRODUCT_CART',
    removeProductCart: 'REMOVE_PRODUCT_CART',
} as const

export const setProductCartSchema = z.object({
    event: z.literal(CartActions.setProductCart),
    data: CartSchema,
})

export const updateProductCartSchema = z.object({
    event: z.literal(CartActions.updateProductCart),
    data: CartSchema,
})

export const removeProductCartSchema = z.object({
    event: z.literal(CartActions.removeProductCart),
    data: CartSchema,
})

export const CartActionSchema = z.discriminatedUnion('event', [
    setProductCartSchema,
    updateProductCartSchema,
    removeProductCartSchema,
])

export type CartAction = z.infer<typeof CartActionSchema>
