import React, { ReactNode } from 'react'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mx-auto flex flex-col items-center gap-20 pb-10 lg:px-20">
            {children}
        </div>
    )
}

export default AppLayout
