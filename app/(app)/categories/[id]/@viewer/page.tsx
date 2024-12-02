import ProductCard from '@/components/cards/product-card'
import { Product } from '@/schemas/product-schema'
import React from 'react'

const Viewer = async () => {
    const filters = {
        title: 'Classic Black',
        price_min: 0,
        price_max: 100,
        categoryId: 1,
    }

    const productResponse = await fetch(
        'http://localhost:3000/api/filter-products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters),
        }
    )

    const products = await productResponse.json()

    return (
        <div className="flex w-full flex-col">
            <section className="flex flex-col items-center justify-center gap-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    {products.data?.length > 0 &&
                        products.data.map((product: Product, index: number) => {
                            return <ProductCard product={product} key={index} />
                        })}
                </div>
            </section>
        </div>
    )
}

export default Viewer
