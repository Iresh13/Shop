import BannerCard from './components/banner-card'
import { Category } from '@/schemas/category-schema'
import { Product } from '@/schemas/product-schema'
import CategoryCard from '@/components/cards/category-card'
import ProductCard from '@/components/cards/product-card'
import { Fragment } from 'react'

export default async function Home() {
    const res = await fetch('http://localhost:3000/api/product')
    const category = await fetch('http://localhost:3000/api/categories')

    const products = await res.json()
    const categories = await category.json()

    return (
        <Fragment>
            <BannerCard />
            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="-z-10 p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100">
                    Shop By Categories
                </h2>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {categories?.length > 0 &&
                        categories.map((category: Category, index: number) => {
                            return (
                                <CategoryCard category={category} key={index} />
                            )
                        })}
                </div>
            </section>

            <section className="flex flex-col items-center justify-center gap-6">
                <h2 className="-z-10 p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100">
                    Shop your favorites
                </h2>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {products?.length > 0 &&
                        products.map((product: Product, index: number) => {
                            return <ProductCard product={product} key={index} />
                        })}
                </div>
            </section>
        </Fragment>
    )
}
