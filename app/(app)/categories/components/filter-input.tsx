'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FilterQuery } from '@/constants/filter'
import React, { useEffect, useState } from 'react'
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/url'
import { useRouter, useSearchParams } from 'next/navigation'

const FilterInput = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get(FilterQuery.TITLE) || ''
    const [searchQuery, setSearchQuery] = useState<string>(query)

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: FilterQuery.TITLE,
                    value: searchQuery,
                })

                router.push(newUrl, { scroll: false })
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keys: [FilterQuery.TITLE],
                })

                router.push(newUrl, { scroll: false })
            }
        }, 500)

        return () => clearTimeout(debounce)
    }, [searchQuery, searchParams, router])

    return (
        <div className="flex w-full flex-col gap-4">
            <Label className="text-lg font-medium text-dark-800 dark:text-light-200">
                Search Product by Name
            </Label>

            <div className="flex w-full items-center gap-2 rounded-xl border-2 border-dark-600 px-2 py-1 shadow-sm dark:border-light-300">
                <Search className="h-6 w-6 text-primary-600" />
                <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="no-focus placeholder border-none text-lg shadow-none"
                />
            </div>
        </div>
    )
}

export default FilterInput
