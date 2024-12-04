'use client'

import { Product } from '@/schemas/product-schema'
import ProductCard from '@/components/cards/product-card'
import { useAtomValue } from 'jotai/react'
import { favoriteReducerAtom } from '@/atoms/favorite/reducers'
import EmptyList from '@/components/banner/empty-list'

export default function FavoriteCard() {
    const favorites = useAtomValue(favoriteReducerAtom)

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                {favorites?.length > 0 &&
                    favorites.map((product: Product, index: number) => {
                        return <ProductCard product={product} key={index} />
                    })}
            </div>

            {favorites?.length <= 0 && (
                <EmptyList
                    title="No items selected as favorites"
                    message="Please mark your shopping items as favorites."
                />
            )}
        </div>
    )
}
