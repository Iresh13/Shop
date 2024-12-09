'use client'

import { Product } from '@/schemas/product-schema'
import ProductCard from '@/components/cards/product-card'
import { useAtomValue } from 'jotai/react'
import { favoriteReducerAtom } from '@/atoms/favorite/reducers'

export default function FavoriteCard() {
    const favorites = useAtomValue(favoriteReducerAtom)

    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {favorites?.length > 0 &&
                favorites.map((product: Product, index: number) => {
                    return <ProductCard product={product} key={index} />
                })}
        </div>
    )
}
