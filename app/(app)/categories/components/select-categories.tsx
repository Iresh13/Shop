'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { FilterQuery } from '@/constants/filter'
import { formUrlQuery } from '@/lib/url'
import { Category } from '@/schemas/category-schema'


const SelectCategories = ({ categories }: { categories: Category[] }) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const id = searchParams.get(FilterQuery.CATEGORY_ID) || 1

    console.log(id)

    const handleChange = (id: string) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: FilterQuery.CATEGORY_ID,
            value: id,
        })

        router.push(newUrl)
    }

    return (
        <div>
            <Select onValueChange={handleChange}>
                <SelectTrigger className="placeholder min-h-12 rounded-xl border-2 border-dark-600 px-2 py-1 shadow-sm dark:border-light-300">
                    <SelectValue placeholder="Search Category" />
                </SelectTrigger>
                <SelectContent className="bg-primary-800 text-primary-100">
                    {categories.map((category) => (
                        <SelectItem
                            key={category.id}
                            value={String(category.id)}
                        >
                            {category.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectCategories
