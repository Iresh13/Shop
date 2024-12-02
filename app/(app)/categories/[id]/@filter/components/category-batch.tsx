import { Badge } from '@/components/ui/badge'
import { Category } from '@/schemas/category-schema'
import React from 'react'

const CategoryBatch = ({ category }: { category: Category }) => {
    return (
        <>
            {category.name.toLowerCase() !== 'new category' && (
                <Badge
                    variant="outline"
                    className="text-md min-w-40 cursor-pointer border-2 border-dark-300 px-4 py-2 font-normal text-dark-700"
                >
                    {category.name}
                </Badge>
            )}
        </>
    )
}

export default CategoryBatch
