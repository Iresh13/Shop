'use client'

import useSWR from 'swr'
import React, { useState } from 'react'
import { PricingAccordion } from './components/pricing-accordion'
import FilterInput from './components/filter-input'
import CategoryBatch from './components/category-batch'
import { Category } from '@/schemas/category-schema'

const Filter = () => {
    const fetchCategories = async (url: string) => {
        const category = await fetch(url)

        if (category) {
            const categories = await category.json()

            return categories
        }

        throw new Error('Failed to fetch product details')
    }

    const { data } = useSWR(
        'http://localhost:3000/api/categories',
        fetchCategories
    )

    return (
        <div className="hidden w-full flex-col rounded-lg bg-slate-100 p-6 lg:visible lg:flex">
            <section className="flex flex-col gap-6">
                <h2 className="text-lg font-medium text-dark-800">
                    Shop By Categories
                </h2>

                <div className="flex flex-wrap gap-5">
                    {data?.length > 0 &&
                        data.map((category: Category, index: number) => {
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
