'use client'

import { BookHeartIcon, Check, Heart } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Product } from '@/schemas/product-schema'
import { favoriteReducerAtom } from '@/atoms/favorite/reducers'
import { useAtom } from 'jotai/react'
import { FavoriteActions } from '@/atoms/favorite/action'
import { cn } from '@/lib/utils'

const FavButton = ({
    product,
    styles,
}: {
    product: Product
    styles?: string
}) => {
    const [favorites, dispatch] = useAtom(favoriteReducerAtom)

    const isFavorite = favorites.some((p) => p.id === product.id)

    const handleFavorite = () => {
        if (!isFavorite) {
            return dispatch({
                event: FavoriteActions.setFavoriteProduct,
                data: product,
            })
        }

        dispatch({
            event: FavoriteActions.removeFavoriteProduct,
            data: product,
        })
    }

    return (
        <Button
            className={cn(
                `text-black-50 max-w-8 rounded-md bg-primary-200 px-8 py-5 text-xl shadow-none hover:bg-primary-600 ${styles}`,
                { 'bg-dark-700': isFavorite }
            )}
            onClick={() => handleFavorite()}
        >
            {isFavorite && <Check className="text-lg text-white" />}

            {!isFavorite && <Heart className="text-lg text-white" />}
        </Button>
    )
}

export default FavButton
