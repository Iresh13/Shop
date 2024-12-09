import React, { ReactNode } from 'react'

import { Filter } from './components/filter'

export default function CategoryLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-10">
            <Filter />

            {children}
        </div>
    )
}
