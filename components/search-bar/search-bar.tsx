'use client'

import { Search } from 'lucide-react'
import React, { useState } from 'react'

import { Input } from '../ui/input'

const SearchBar = () => {
    const [searchText, setSearchText] = useState<string>('')

    return (
        <div className="flex w-full items-center gap-2 rounded-xl border-2 border-dark-600 px-3 py-2 shadow-sm dark:border-light-300">
            <Search className="size-6 text-primary-600" />
            <Input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
                className="no-focus placeholder border-none text-lg shadow-none"
            />
        </div>
    )
}

export default SearchBar
