'use client'

import { cartReducerAtom } from '@/atoms/cart/reducer'
import { Routes } from '@/constants/routes'
import { useAtomValue } from 'jotai/react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    const carts = useAtomValue(cartReducerAtom)

    return (
        <Link href={Routes.CARTS} className="relative text-primary-600">
            {carts.length > 0 && (
                <div className="absolute -right-2 -top-3 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-dark-900 opacity-80">
                    <p className="text-white">{carts.length}</p>
                </div>
            )}

            <ShoppingCart />
        </Link>
    )
}

export default CartIcon
