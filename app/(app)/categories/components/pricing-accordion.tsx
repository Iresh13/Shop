'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { FilterQuery } from '@/constants/filter'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeKeysFromUrlQuery } from '@/lib/url'
export const PricingAccordion = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const minPrice = searchParams.get(FilterQuery.PRICE_MIN) || ''
    const [minimumPrice, setMinimumPrice] = useState<string>(minPrice)

    const maxPrice = searchParams.get(FilterQuery.PRICE_MAX) || ''
    const [maximumPrice, setMaximumPrice] = useState<string>(maxPrice)

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (minimumPrice) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: FilterQuery.PRICE_MIN,
                    value: minimumPrice,
                })

                router.push(newUrl, { scroll: false })
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keys: [FilterQuery.PRICE_MIN],
                })

                router.push(newUrl, { scroll: false })
            }
        }, 500)

        return () => clearTimeout(debounce)
    }, [minimumPrice, searchParams, router])

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (maximumPrice) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: FilterQuery.PRICE_MAX,
                    value: maximumPrice,
                })

                router.push(newUrl, { scroll: false })
            } else {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keys: [FilterQuery.PRICE_MAX],
                })

                router.push(newUrl, { scroll: false })
            }
        }, 500)

        return () => clearTimeout(debounce)
    }, [maximumPrice, searchParams, router])

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-5">
                        <Input
                            type="text"
                            value={minimumPrice}
                            onChange={(e) => setMinimumPrice(e.target.value)}
                            placeholder="Minimum price"
                            className="no-focus placeholder min-h-12 min-w-full border-2 border-dark-600 text-lg shadow-none dark:border-light-300"
                        />

                        <Input
                            type="text"
                            value={maximumPrice}
                            onChange={(e) => setMaximumPrice(e.target.value)}
                            placeholder="Maximum price"
                            className="no-focus placeholder min-h-12 min-w-full border-2 border-dark-600 text-lg shadow-none dark:border-light-300"
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
