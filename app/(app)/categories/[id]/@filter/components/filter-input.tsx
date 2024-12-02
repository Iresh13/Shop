import React from 'react'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const FilterInput = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <Label className="text-lg font-medium text-dark-800">
                Search Product by Name
            </Label>
            <div className="flex w-full items-center gap-2 rounded-xl border-2 border-dark-600 px-2 py-1 shadow-sm dark:border-light-300">
                <Search className="h-6 w-6 text-primary-600" />
                <Input
                    placeholder="Search..."
                    className="no-focus placeholder border-none text-lg shadow-none"
                />
            </div>
        </div>
    )
}

export default FilterInput
