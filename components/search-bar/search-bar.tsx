import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className="flex w-full items-center gap-2 rounded-xl border-2 border-dark-600 px-3 py-2 shadow-sm dark:border-light-300">
            <Search className="h-6 w-6 text-primary-600" />
            <Input
                placeholder="Search..."
                className="no-focus placeholder border-none text-lg shadow-none"
            />
        </div>
    )
}

export default SearchBar