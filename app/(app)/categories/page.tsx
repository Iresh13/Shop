import React from 'react'

import { EmptyList } from '@/components/banner/empty-list'
import { ProductCard } from '@/components/cards/product-card'
import { Product } from '@/schemas/product-schema'
import { Filter } from '@/types/filter'

export interface SearchParamsProps {
    searchParams: Promise<Filter>
}

export default async function Categories({ searchParams }: SearchParamsProps) {
    const {
        title = '',
        price_min = '',
        price_max = '',
        categoryId = '',
    } = await searchParams

    const filteredResponse = await fetch(
        'http://localhost:3000/api/filter-products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                price_max: Number(price_max),
                price_min: Number(price_min),
                categoryId: Number(categoryId),
            }),
        }
    )

    const filteredProducts = await filteredResponse.json()

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                {filteredProducts?.data?.length > 0 &&
                    filteredProducts.data.map(
                        (product: Product, index: number) => {
                            return <ProductCard product={product} key={index} />
                        }
                    )}
            </div>

            {filteredProducts?.data?.length <= 0 && (
                <EmptyList
                    title="No products found"
                    message="Please check other categories"
                />
            )}
        </div>
    )
}
