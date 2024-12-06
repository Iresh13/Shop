import * as http from '@/lib/handlers/http'

import { FilterInput } from './filter-input'
import { PricingAccordion } from './pricing-accordion'
import SelectCategories from './select-categories'

export const Filter = async () => {
    const categories = await http.get('categories')

    return (
        <div className="flex flex-1 flex-col gap-6 rounded-b-lg bg-primary-200 p-4 dark:bg-dark-700">
            <h2 className="text-lg font-medium text-dark-800 dark:text-light-200">
                Shop By Categories
            </h2>

            <SelectCategories categories={categories} />

            <FilterInput />

            <PricingAccordion />
        </div>
    )
}
