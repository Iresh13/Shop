import { ProductSchema } from '@/schemas/product-schema'
import { z } from 'zod'

export const FavoriteActions = {
    setFavoriteProduct: 'SET_FAVORITE_PRODUCT',
    removeFavoriteProduct: 'REMOVE_FAVORITE_PRODUCT',
} as const

const SetFavoriteProductSchema = z.object({
    event: z.literal(FavoriteActions.setFavoriteProduct),
    data: ProductSchema,
})

const RemoveFavoriteProductSchema = z.object({
    event: z.literal(FavoriteActions.removeFavoriteProduct),
    data: ProductSchema,
})

export const FavoriteActionSchema = z.discriminatedUnion('event', [
    SetFavoriteProductSchema,
    RemoveFavoriteProductSchema,
])

export type FavoriteAction = z.infer<typeof FavoriteActionSchema>
