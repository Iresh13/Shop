import FilterInput from './filter-input'
import SelectCategories from './select-categories'
import { PricingAccordion } from './pricing-accordion'

const Filter = async () => {
    const category = await fetch('http://localhost:3000/api/categories')

    const categories = await category.json()

    return (
        <div className="flex min-w-full flex-col gap-6 rounded-b-lg bg-primary-200 p-5 dark:bg-dark-700">
            <h2 className="text-lg font-medium text-dark-800 dark:text-light-200">
                Shop By Categories
            </h2>

            <SelectCategories categories={categories} />

            <FilterInput />

            <PricingAccordion />
        </div>
    )
}

export default Filter
