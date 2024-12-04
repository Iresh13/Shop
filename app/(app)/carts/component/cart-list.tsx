'use client'

import { useAtomValue } from 'jotai/react'
import { cartReducerAtom } from '@/atoms/cart/reducer'

import CartCard from '@/components/cards/cart-card'
import { Cart } from '@/atoms/cart/schema'
import CheckoutButton from '@/components/buttons/checkout'
import EmptyList from '@/components/banner/empty-list'

export default function CartList() {
    const carts = useAtomValue(cartReducerAtom)

    return (
        <div className="flex flex-col gap-6">
            {carts?.length > 0 &&
                carts.map((cart: Cart, index: number) => {
                    return <CartCard product={cart} key={index} />
                })}

            {carts?.length > 0 && (
                <div className="flex flex-col items-end pt-4">
                    <CheckoutButton />
                </div>
            )}

            {carts?.length <= 0 && (
                <EmptyList
                    title="No items added to the card"
                    message="Please add your shopping items into the cart."
                />
            )}
        </div>
    )
}
