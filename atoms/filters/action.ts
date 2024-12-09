import { z } from 'zod'

export const FilterActions = {
    setCategoryId: 'SET_CATEGORY_ID',
    setSearchInput: 'SET_SEARCH_INPUT',
    setMinimumAmount: 'SET_MINIMUM_AMOUNT',
    setMaximumAmount: 'SET_MAXIMUM_AMOUNT',
} as const

const SetCategoryIdSchema = z.object({
    event: z.literal(FilterActions.setCategoryId),
    data: z.number(),
})

const SetSearchInputSchema = z.object({
    event: z.literal(FilterActions.setSearchInput),
    data: z.string(),
})

const SetMinimumAmountSchema = z.object({
    event: z.literal(FilterActions.setMinimumAmount),
    data: z.number(),
})

const SetMaximumAmountSchema = z.object({
    event: z.literal(FilterActions.setMaximumAmount),
    data: z.number(),
})

export const FilterActionSchema = z.discriminatedUnion('event', [
    SetCategoryIdSchema,
    SetSearchInputSchema,
    SetMaximumAmountSchema,
    SetMinimumAmountSchema,
])

export type FilterAction = z.infer<typeof FilterActionSchema>
