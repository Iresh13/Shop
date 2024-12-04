import React, { ReactNode } from 'react'
import Filter from './components/filter'

const CategoryLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col items-center gap-10">
            <Filter />

            {children}
        </div>
    )
}

export default CategoryLayout
