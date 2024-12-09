'use client'

import { useAtomValue } from 'jotai/react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { favoriteReducerAtom } from '@/atoms/favorite/reducers'
import { Routes } from '@/constants/routes'

export const FavIcon = () => {
    const favorites = useAtomValue(favoriteReducerAtom)

    return (
        <Link href={Routes.FAVORITES} className="relative text-primary-600">
            {favorites.length > 0 && (
                <div className="absolute -right-2 -top-3 flex size-6 flex-col items-center justify-center rounded-full bg-dark-900 opacity-80">
                    <p className="text-white">{favorites.length}</p>
                </div>
            )}

            <Heart />
        </Link>
    )
}
