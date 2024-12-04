import FilterInput from '@/app/(app)/categories/components/filter-input'
import { PricingAccordion } from '@/app/(app)/categories/components/pricing-accordion'
import React from 'react'

const PageFilter = () => {
    return (
        <div className="flex max-w-[350px] flex-1 flex-col gap-6 rounded-b-lg bg-primary-200 p-5 dark:bg-dark-700 lg:min-w-[600px]">
            <FilterInput />

            <PricingAccordion />
        </div>
    )
}

export default PageFilter
