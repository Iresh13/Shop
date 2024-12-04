import { Fragment } from 'react'
import { Product } from '@/schemas/product-schema'
import { Category } from '@/schemas/category-schema'
import BannerCard from '@/components/banner/banner-card'
import ProductCard from '@/components/cards/product-card'
import CategoryCard from '@/components/cards/category-card'
import Link from 'next/link'
import { Routes } from '@/constants/routes'
import { Button } from '@/components/ui/button'

export default async function Home() {
    const res = await fetch('http://localhost:3000/api/product')
    const category = await fetch('http://localhost:3000/api/categories')

    const products = await res.json()
    const categories = await category.json()

    return (
        <Fragment>
            <BannerCard />
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                    Shop By Categories
                </h2>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {categories?.length > 0 &&
                        categories.map((category: Category, index: number) => {
                            return (
                                <Fragment key={index}>
                                    {index <= 4 &&
                                        category.image &&
                                        category.name.toLowerCase() !==
                                            'new category' && (
                                            <CategoryCard
                                                category={category}
                                                key={index}
                                            />
                                        )}
                                </Fragment>
                            )
                        })}
                </div>
            </section>

            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                    Shop your favorites
                </h2>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {products?.length > 0 &&
                        products.map((product: Product, index: number) => {
                            return (
                                <Fragment key={index}>
                                    {index <= 8 &&
                                        !product.title
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

                <Link href={Routes.PRODUCTS}>
                    <Button
                        className="min-h-12 rounded-md bg-dark-500 px-12 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-600 hover:dark:bg-dark-300"
                        aria-label="view_more"
                    >
                        View more
                    </Button>
                </Link>
            </section>
        </Fragment>
    )
}
