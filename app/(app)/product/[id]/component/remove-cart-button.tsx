'use client'

import { useAtom } from 'jotai/react'
import React from 'react'

import { CartActions } from '@/atoms/cart/action'
import { cartReducerAtom } from '@/atoms/cart/reducer'
import { Button } from '@/components/ui/button'
import { Product } from '@/schemas/product-schema'
export const RemoveCardButton = ({ product }: { product: Product }) => {
    const [, dispatch] = useAtom(cartReducerAtom)

    const removeCart = (product: Product) => {
        const data = { ...product, quantity: 1 }

        dispatch({
            event: CartActions.removeProductCart,
            data: data,
        })
    }

    return (
        <Button
            className="min-h-12 rounded-md bg-dark-500 px-12 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-600 hover:dark:bg-dark-300"
            aria-label="remove_cart"
            onClick={() => removeCart(product)}
        >
            Remove
        </Button>
    )
}
