'use client'

import { useAtom } from 'jotai/react'
import React from 'react'

import { CartActions } from '@/atoms/cart/action'
import { cartReducerAtom } from '@/atoms/cart/reducer'
import { Button } from '@/components/ui/button'
import { Product } from '@/schemas/product-schema'
export const CartCounter = ({ product }: { product: Product }) => {
    const [carts, dispatch] = useAtom(cartReducerAtom)

    const selectedProduct = carts.find((c) => c.id === product.id)

    const removeProduct = () => {
        dispatch({
            event: CartActions.removeProductCart,
            data: { ...product, quantity: 0 },
        })
    }

    const subtractQuantity = () => {
        if (selectedProduct?.quantity && selectedProduct?.quantity > 1) {
            return dispatch({
                event: CartActions.updateProductCart,
                data: {
                    ...product,
                    quantity: selectedProduct?.quantity
                        ? selectedProduct?.quantity - 1
                        : 1,
                },
            })
        }

        removeProduct()
    }

    const addQuantity = () => {
        dispatch({
            event: CartActions.updateProductCart,
            data: {
                ...product,
                quantity: selectedProduct?.quantity
                    ? selectedProduct?.quantity + 1
                    : 1,
            },
        })
    }

    return (
        <div className="flex flex-row gap-3">
            <Button
                onClick={subtractQuantity}
                className="min-h-12 rounded-md bg-dark-500 px-6 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-600 hover:dark:bg-dark-300"
            >
                -
            </Button>

            <div className="flex min-h-12 items-center justify-center rounded-lg border-2 border-dark-500 px-6">
                <p className="text-dark-800">{selectedProduct?.quantity}</p>
            </div>

            <Button
                onClick={addQuantity}
                className="min-h-12 rounded-md bg-dark-500 px-6 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-600 hover:dark:bg-dark-300"
            >
                +
            </Button>
        </div>
    )
}
