import React from 'react'
import { Filter } from '@/types/filter'
import PageFilter from '@/components/filter/filter'
import { Product } from '@/schemas/product-schema'
import EmptyList from '@/components/banner/empty-list'
import ProductCard from '@/components/cards/product-card'
import { PaginationComponent } from '@/components/pagination/pagination'

const Shoes = async ({ searchParams }: { searchParams: Promise<Filter> }) => {
    const {
        title = '',
        page = '1',
        price_min = '',
        price_max = '',
    } = await searchParams

    const filteredShoesProducts = await fetch(
        'http://localhost:3000/api/filter-products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                limit: 9,
                categoryId: 4,
                price_max: Number(price_max),
                price_min: Number(price_min),
                offset: (Number(page) - 1) * 9,
            }),
        }
    )

    const shoesProducts = await filteredShoesProducts.json()

    return (
        <div className="flex flex-1 flex-col items-center gap-10">
            <PageFilter />

            <div className="flex flex-col items-center justify-center gap-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {shoesProducts?.data?.length > 0 &&
                        shoesProducts.data.map(
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

                {shoesProducts?.data?.length <= 0 && (
                    <EmptyList
                        title="No products found"
                        message="Please check other categories"
                    />
                )}
            </div>

            <PaginationComponent
                maxVisiblePages={3}
                currentPage={Number(page)}
            />
        </div>
    )
}

export default Shoes
