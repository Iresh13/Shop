import SearchBar from '@/components/search-bar/search-bar'

import React from 'react'
import { PricingAccordion } from './components/pricing-accordion'
import FilterInput from './components/filter-input'
import CategoryBatch from './components/category-batch'
import { Category } from '@/schemas/category-schema'

const Filter = async () => {
    const category = await fetch('http://localhost:3000/api/categories')

    const categories = await category.json()

    return (
        <div className="hidden w-full flex-col rounded-lg bg-slate-100 p-10 lg:visible lg:flex">
            <section className="flex flex-col gap-6">
                <h2 className="text-lg font-medium text-dark-800">
                    Shop By Categories
                </h2>

                <div className="flex flex-wrap gap-5">
                    {categories?.length > 0 &&
                        categories.map((category: Category, index: number) => {
                            return (
                                <CategoryBatch
                                    category={category}
                                    key={index}
                                />
                            )
                        })}
                </div>

                <FilterInput />

                <PricingAccordion />
            </section>
        </div>
    )
}

export default Filter
