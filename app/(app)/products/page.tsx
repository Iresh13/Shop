import { Fragment } from 'react'
import { Product } from '@/schemas/product-schema'
import ProductCard from '@/components/cards/product-card'

export default async function Products() {
    const res = await fetch('http://localhost:3000/api/product')

    const products = await res.json()

    return (
        <Fragment>
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                    Available Products
                </h2>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {products?.length > 0 &&
                        products.map((product: Product, index: number) => {
                            return (
                                <Fragment key={index}>
                                    {!product.title
                                        .toLowerCase()
                                        .includes('new') &&
                                        !product.title
                                            .toLowerCase()
                                            .includes('test') && (
                                            <ProductCard product={product} />
                                        )}
                                </Fragment>
                            )
                        })}
                </div>
            </section>
        </Fragment>
    )
}
