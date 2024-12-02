'use client'

import { filterReducerAtom } from '@/atoms/filters/reducers'
import ProductCard from '@/components/cards/product-card'
import { Product } from '@/schemas/product-schema'
import { useAtomValue } from 'jotai/react'
import React from 'react'
import useSWR from 'swr'

const Viewer = () => {
    const filters = useAtomValue(filterReducerAtom)

    const fetchFilteredProducts = async (url: string) => {
        const filteredProducts = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters),
        })

        if (filteredProducts) {
            const categories = await filteredProducts.json()

            return categories
        }

        throw new Error('Failed to fetch product details')
    }

    const { data } = useSWR(
        'http://localhost:3000/api/filter-products',
        fetchFilteredProducts
    )

    const filteredProducts = data.data

    return (
        <div className="flex w-full flex-col">
            <section className="flex flex-col items-center justify-center gap-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.length > 0 &&
                        filteredProducts.map(
                            (product: Product, index: number) => {
                                return (
                                    <ProductCard
                                        product={product}
                                        key={index}
                                    />
                                )
                            }
                        )}
                </div>
            </section>
        </div>
    )
}

export default Viewer
