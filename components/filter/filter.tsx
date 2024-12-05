import React from 'react'

import { FilterInput } from '@/app/(app)/categories/components/filter-input'
import { PricingAccordion } from '@/app/(app)/categories/components/pricing-accordion'

export const PageFilter = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 rounded-b-lg bg-primary-200 p-4 dark:bg-dark-700">
            <FilterInput />

            <PricingAccordion />
        </div>
    )
}
