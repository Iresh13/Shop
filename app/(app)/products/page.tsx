import { Fragment } from 'react'
import { Product } from '@/schemas/product-schema'
import ProductCard from '@/components/cards/product-card'
import { Pagination } from '@/components/ui/pagination'
import { PaginationComponent } from '@/components/pagination/pagination'

export default async function Products({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>
}) {
    const { page = '1' } = await searchParams

    const offset = (Number(page) - 1) * 12

    const res = await fetch(
        `http://localhost:3000/api/product?limit=12&offset=${offset}`
    )

    const products = await res.json()

    return (
        <div className="flex flex-col gap-10">
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                    Available Products
                </h2>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {products?.length > 0 &&
                        products.map((product: Product, index: number) => {
                            return (
                                <Fragment key={index}>
                                    <ProductCard product={product} />
                                </Fragment>
                            )
                        })}
                </div>
            </section>

            <PaginationComponent
                maxVisiblePages={3}
                currentPage={Number(page)}
            />
        </div>
    )
}
